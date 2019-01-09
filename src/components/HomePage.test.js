import React from 'react'

import Adapter from 'enzyme-adapter-react-16'
import { mount, configure } from "enzyme";
import HomePage from './HomePage'

configure({ adapter: new Adapter() });

describe('Addition', () => {
    it('knows that 2 and 2 make 4', () => {
        expect(2 + 2).toBe(4);
    });
});

describe("LockScreen", () => {
    let props;
    let mountedLockScreen;
    const lockScreen = () => {
        if (!mountedLockScreen) {
            mountedLockScreen = mount(
                <HomePage {...props} />
            );
        }
        return mountedLockScreen;
    }

    beforeEach(() => {
        props = {
            wallpaperPath: undefined,
            userInfoMessage: undefined,
            onUnlocked: undefined,
        };
        mountedLockScreen = undefined;
    });

    it("always renders a div", () => {
        const divs = lockScreen().find("div");
        expect(divs.length).toBeGreaterThan(0);
    });

});