import React from 'react'
import { shallow } from 'enzyme'
import Button from '../Button';
/**
 * @description Button
 */

describe('Button component', () => {
    let props={
        colour:'green',
        text: 'Login'
    }
    let shallowWrapper = shallow(
        <Button {...props}/>
    )

    it('renders `Button` properly', () => {
        expect(shallowWrapper).toMatchSnapshot();
    })
})