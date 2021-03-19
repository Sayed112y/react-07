import React, { Fragment, Component} from 'react';
import Productlist from './productlist';
import product from '../product/product.json';

export default class Allproduct extends Component {
  constructor(props){
    super(props);
    this.state = {product : product, hasError: false};
  }
  render() {
    const tableHeader = ['ID', 'Product Name', 'Quantity', 'Price'];
    return (
      <Fragment>
      {(this.state.product.models.length>0) && (
      <div className="row">
      <div className="col-xs-1-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
          <div className="card">
            <div className="card-body">
              <h1 className="card-title">Product List</h1>
              <div className="mt-4 ml-auto">
                <Productlist header={tableHeader} rows={this.state.product.models}/>
              </div>
            </div>
          </div>
      </div>  
    </div>
    )}
    </Fragment>
    )
  }
}
