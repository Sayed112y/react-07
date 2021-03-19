import React from 'react';
import Product from './product';
import Productlist from './productlist'
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
const tableHeader = ['ID', 'Product Name', 'Quantity', 'Price'];
const product = {
"models": [
    {
        "productname": "Moto G5",
        "quantity": 2,
        "price": "Rs. 13000"
    },
    {
        "productname": "Racold Geyser",
        "quantity": 3,
        "price": "Rs. 6000"
    },
    {
        "productname": "Dell Inspiron",
        "quantity": 4,
        "price": "Rs. 50000"
    }
]
};

describe("Product Component Test Cases", ()=> {
    let wrapper;
    
    
    beforeEach(() => {
        wrapper = shallow(<Productlist header={tableHeader} rows={product.models} />)
    })

    afterEach(() => {
        wrapper.unmount();
    })

    it("case to check if “Product Name” is rendered as second column heading", ()=> {
        let header = wrapper.find('th');
        expect(header.at(1).text()).toEqual('Product Name');
    })    
    it("case to check if “Price” is rendered as fourth column heading", ()=> {
        let header = wrapper.find('th');
        expect(header.at(3).text()).toEqual('Price');
    })

    it("case to check if 2nd Product’s name is passed as props to 2nd Product component", () => {
        expect(wrapper.find(Product).length).toEqual(3);

        let prodSelection = wrapper.find(Product);
        expect(prodSelection.at(1).props().name).toEqual('Racold Geyser')
    })

    it("case to check if 2nd Product’s price is passed as props to 2nd Product component", () => {
        expect(wrapper.find(Product).length).toEqual(3);
        let prodSelection = wrapper.find(Product);
        expect(prodSelection.at(1).props().price).toEqual('Rs. 6000');
    })
})

describe("test", ()=> {
    
    let wrapper = shallow(<Productlist header={tableHeader} rows={[]}/>);
    
    afterEach(() => {
        wrapper.unmount();
    })
    it("Product list props as null and App will crash", () => {
       expect(wrapper.render())
    })
})