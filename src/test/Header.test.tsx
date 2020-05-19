import Header from '../Components/header/Header';
import React from 'react';
import { render } from '@testing-library/react';
import { render as renderer, unmountComponentAtNode } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

let element = null;
beforeEach(() => {
    element = document.createElement('div');
    document.body.appendChild(element);
});

afterEach(() => {
    unmountComponentAtNode(element);
    element.remove();
    element = null;
});

test('Should have menu text field in Header', ()=>{
    const{getByTestId} = render(<Router><Header/></Router>);
   expect(getByTestId('menu')).toBeInTheDocument();
  });
  
test('Should have home text field in Header', () => {
    const { getByTestId } = render(<Router><Header/></Router>);
    expect(getByTestId('home')).toBeInTheDocument();
  });

  test('Should have home text field in Header', () => {
    const { getByTestId } = render(<Router><Header/></Router>);
    expect(getByTestId('home')).toBeInTheDocument();
  });

  

  test('should have 4 links in news card', () => {
    renderer(<Router><Header/></Router>, element);
    const count = element.getElementsByTagName('a').length;
    expect(count).toBe(4);
});

export default Header;
