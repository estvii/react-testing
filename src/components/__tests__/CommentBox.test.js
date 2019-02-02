import React from 'react';
import { mount } from 'enzyme' //is required for fullDOM
import CommentBox from 'components/CommentBox';
import Root from 'root';
// The flow before each runs, the IT runs for each IT then after each runs when each IT completes
let wrapped;

beforeEach(()=>{
    wrapped = mount(
        <Root>
            <CommentBox/>
        </Root>
    );//mounts it to the fake DOM
});

afterEach(()=>{
    wrapped.unmount();
});

it('has a text area and a button', () => {
    expect(wrapped.find('textarea').length).toEqual(1);
    expect(wrapped.find('button').length).toEqual(1);
});

describe('the text area', () => { //Groups the 2 below
    beforeEach(()=>{
        wrapped.find('textarea').simulate('change', {
            target: {value: 'new comment'}
        }) //please note change comes from onChange, its the pure html // event = target: {value: 'new comment'} replaces event on CommentBox
        wrapped.update();
    });

    it('has a text area that users can type in', ()=>{
        expect(wrapped.find('textarea').prop('value')).toEqual('new comment') //Takes the prop value and compare it to the string we passed it
    });

    it('when form is submitted, text area gets emptied', () => {
        // expect(wrapped.find('textarea').prop('value')).toEqual('new comment') //first check optionally since we already checked it above
        wrapped.find('form').simulate('submit') //Simuluates form submission
        wrapped.update();
        expect(wrapped.find('textarea').prop('value')).toEqual(''); //Checks that form is empty
    });
});