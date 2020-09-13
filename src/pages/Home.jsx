import React, {useEffect} from "react"
import {Form} from "../components/Form";
import {Pagination} from "../components/Pagination";
import {TableHeader} from "../components/TableHeader";
import {TableRow} from "../components/TableRow";
import {Search} from "../components/Search";
import {SelectedRow} from "../components/SelectedRow";
import {useDispatch, useSelector} from "react-redux";
import {getData, searchByStrAC, selectedItemAC, sendFormAc, setItemAC} from "../redux/action/data";
import {Loader} from "../components/Loader";

export const Home = ({select}) => {
    const dispatch = useDispatch()
    const {items, selectedRow, isLoaded, countPages, currentPage} = useSelector(({data}) => ({
        items: data.items,
        selectedRow: data.selectedRow,
        isLoaded: data.isLoaded,
        countPages: data.countPages,
        currentPage: data.currentPage
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


    const searchByString = React.useCallback((str) => {
        dispatch(searchByStrAC(str))
    }, [])

    const changeCurrentPage = React.useCallback((str_id) => {
        dispatch(setItemAC(str_id))
    }, [])

    const sendForm = React.useCallback((obj) => {
        dispatch(sendFormAc(obj))
    }, [])

    return (
        <>
            {!isLoaded && <Loader/>}
            {isLoaded &&
            <>
                <Form sendForm={sendForm} />
                <Pagination
                currentPage={currentPage}
                countPages={countPages}
                changeCurrentPage={changeCurrentPage}
                />
                <TableHeader/>
                <div className="table__container" onClick={selectedItem}>
                    {
                        items &&
                        items.map((item, index) => <TableRow key={index} {...item} />)
                    }
                </div>
                <Search searchByString={searchByString} />
                <SelectedRow {...selectedRow}/>
            </>
            }
        </>
    )
}