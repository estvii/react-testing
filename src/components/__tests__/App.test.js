import React from 'react';
import { shallow } from 'enzyme';
import App from 'components/App';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';


let wrapped;

// This will initialize before each test runs
beforeEach(() =>{
    wrapped = shallow(<App />)
});


it('shows a comment box', () => {
    
    expect(wrapped.find(CommentBox).length).toEqual(1);
    // the .find() returns an array of CommentBox that appears
    // Please note its good to purposely break it by providing a different paramater
});

it('shows a comment list', ()=> {
    expect(wrapped.find(CommentList).length).toEqual(1);
});