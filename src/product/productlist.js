import React, {Fragment} from 'react'
import Product from './product';

export default function productlist(props) {
    return (
        <Fragment>
            <table className="table table-striped table-dark table-responsive table-bordered table-responsive">
                <thead>
                <tr>
                    { props.header.map((heading, index) => <th key={index}>{heading}</th>) }
                </tr>
                </thead>
            <tbody>
                {
                    props.rows !== undefined && props.rows.map((row, index) => <Product key = {index} id = {index} name={row.productname}
                    quantity={row.quantity} price={row.price} />)
                }
            </tbody>
            </table>
        </Fragment>
    )
}