import React, {Fragment} from 'react';

const Product = (props) => {
    return (
        <Fragment>
            {
                <tr><td>{props.id + 1}</td><td>{props.name}</td>
                <td>{props.quantity}</td><td>{props.price}</td></tr>
            }
        </Fragment>
    )
}
export default Product;