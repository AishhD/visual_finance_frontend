import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import Adapter from 'enzyme-adapter-react-16'
import { mount, shallow, configure } from "enzyme";
import HomePage from './HomePage'

configure({ adapter: new Adapter() });

describe("Home", () => {
    let mountedHome;
    const Home = () => {
        if (!mountedHome) {
            mountedHome = mount(
                <Router>
                    <HomePage />
                </Router>);
        }
        return mountedHome;
    }

    it("always renders a div", () => {
        const divs = Home().find("div");
        expect(divs.length).toBeGreaterThan(0);
    });

});