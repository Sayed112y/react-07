import React from 'react';
import Allproduct from './allproduct';
import Productlist from './productlist';
import { shallow, configure, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe("All Product Page Snapshot ", () => {
    let mountWrapper;
    beforeEach(() => {
        mountWrapper = mount(<Allproduct />);
    })

    afterEach(() => {
        console.log('TEST')
        mountWrapper.unmount();
    })

    it("renders Correctly", () => {
        expect(mountWrapper).toMatchSnapshot();
    })
});

describe("All Product Page rendering of element", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Allproduct />);
    })

    afterEach(() => {
        wrapper.unmount();
    })
    
    it("Renders one Productlist React Compount", ()=> {
        expect(wrapper.find(Productlist).render())
    })

    it("Renders Correct heading for Product List", ()=> {
        expect(wrapper.find("h1").text()).toEqual("Product List");
    });
});