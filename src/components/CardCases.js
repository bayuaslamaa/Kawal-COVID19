import React from 'react'


export default function CardCases(props) {
    const { elCase } = props
    const { attributes } = elCase
    return (
        <>
            <div className="card col-lg-4 col-sm-6 col-xs-12">
                <div className="side">
                    <div className="card-title">{attributes.OBJECTID}</div>
                    <div className="card-title">{attributes.Country_Region}</div>
                </div>
                <div className="side back"> <div className="card-body">
                    <p className="card-title">Active: {attributes.Active}
                    </p>
                    <p className="card-title">Confirmed: {attributes.Confirmed} </p>
                    <p className="card-title">Recovered: {attributes.Recovered}</p>
                    <p className="card-title">Death: {attributes.Deaths}</p>
                </div>
                </div>
            </div>
        </>
    )
}