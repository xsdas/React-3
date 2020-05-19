import React from 'react';
import { render as renderer, unmountComponentAtNode } from 'react-dom';
import { render as testrender} from '@testing-library/react';
import App from '../App';
import Register from '../Components/register/Register';

let element: any = null;
beforeEach(() => {
    element = document.createElement('div');
    document.body.appendChild(element);
});

afterEach(() => {
    unmountComponentAtNode(element);
    element.remove();
    element = null;
});


test('should have 5 links in app bar', () => {
    renderer(<App />, element);
    const count = element.getElementsByTagName('a').length;
    expect(count).toBe(5);
});


