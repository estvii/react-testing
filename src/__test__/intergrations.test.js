import React from 'react';
import { mount } from 'enzyme';
import moxios from 'moxios';
import Root from 'Root';
import App from 'components/App';

// Attempt to render the entire app
// Find the fetch comments button and click it
// Expect to find a list of comments!

// we are assuming name is the comments that we're after
// we can combine with describe to use stubrequest for different urls
beforeEach(() => {
    moxios.install();
    moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
        status: 200,
        response: [{name: 'Fetched #1'},{name: 'Fetched #2'}]
    });
});

afterEach(()=> {
    moxios.uninstall();
});

it('can fetch a list of comments and display them', (done) => {
    const wrapped = mount(
        <Root>
            <App />
        </Root>
    );
    
    wrapped.find('.fetch-comments').simulate('click');
// moxios wait
    moxios.wait(() => {
        wrapped.update();
        expect(wrapped.find('li').length).toEqual(2);
        done();
        wrapped.unmount()
    });
})