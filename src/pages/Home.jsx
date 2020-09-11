import React, {useEffect} from "react"
import {Form} from "../components/Form";
import {Pagination} from "../components/Pagination";
import {TableHeader} from "../components/TableHeader";
import {TableRow} from "../components/TableRow";
import {Search} from "../components/Search";
import {SelectedRow} from "../components/SelectedRow";
import {useDispatch, useSelector} from "react-redux";
import {getData, selectedItemAC} from "../redux/action/data";
import {Loader} from "../components/Loader";

export const Home = ({select}) => {

    const dispatch = useDispatch()
    const {items, selectedRow, isLoaded} = useSelector(({data}) => ({
        items: data.items,
        selectedRow: data.selectedRow,
        isLoaded: data.isLoaded
    }))

    useEffect(() => {
        dispatch(getData(select))
    }, [select])

    const selectedItem = (event) => {
        let node = event.target.dataset.item || event.target.parentNode.dataset.item
        if (node) {
            dispatch(selectedItemAC(node))
        }
    }

    return (
        <>
            {!isLoaded && <Loader/>}
            {isLoaded &&
            <>
                <Form/>
                <Pagination/>
                <TableHeader/>
                <div className="table__container" onClick={selectedItem}>
                    {
                        items &&
                        items.map((item, index) => <TableRow key={index} {...item} />)
                    }
                </div>
                <Search/>
                <SelectedRow {...selectedRow}/>
            </>
            }
        </>
    )
}