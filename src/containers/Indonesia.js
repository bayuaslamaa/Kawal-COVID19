import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getIndo } from '../store/action'


export default function Indo() {
    const dispatch = useDispatch()
    const caseIndo = useSelector(state => state.caseIndo)
    console.log(caseIndo)
    useEffect(() => {
        dispatch(getIndo())
    }, [dispatch])
    return (
        <><h1>Indo</h1></>
    )
}