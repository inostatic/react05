import React, {useEffect} from "react"
import {Form} from "../components/Form";
import {Pagination} from "../components/Pagination";
import {TableHeader} from "../components/TableHeader";
import {TableRow} from "../components/TableRow";
import {Search} from "../components/Search";
import {SelectedRow} from "../components/SelectedRow";
import {useDispatch, useSelector} from "react-redux";
import {getData} from "../redux/action/data";

export const Home = () => {

    const dispatch = useDispatch()
    const items = useSelector(({ data }) => data.data)

    useEffect(() => {
        dispatch(getData('/smalldata'))
    },[])

    console.log(items)

    return (
        <>
            <Form/>
            <Pagination/>
            <TableHeader/>
            {items &&
            items.map(item => <TableRow {...item} />)

            }
            <Search/>
            <SelectedRow/>
        </>
    )
}