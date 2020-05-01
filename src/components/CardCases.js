import React from 'react'


export default function CardCases(props) {
    const { elCase } = props
    const { attributes } = elCase
    return (
        <>
            <div className="card col-lg-4 col-sm-6 col-xs-12">
                <div className="side">{attributes.Country_Region}</div>
                <div className="side back"> <div className="card-body">
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                </div>
            </div>
        </>
    )
}