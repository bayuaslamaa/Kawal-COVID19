import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCases } from '../store/action'
import CardCases from '../components/CardCases'

export default function Home() {
    const dispatch = useDispatch()
    const cases = useSelector(state => state.cases)
    console.log(cases)
    useEffect(() => {
        dispatch(getCases())
    }, [dispatch])
    return (
        <>
            <h1>This Home</h1>
            <section className="section-heroes container" >
                <div className="card-container row">
                    {
                        cases.map(elCase => (<CardCases key={elCase.attributes.OBJECTID} elCase={elCase} />))
                    }


                </div>
            </section>
        </>
    )
}