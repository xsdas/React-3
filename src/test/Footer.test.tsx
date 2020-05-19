import Footer from '../Components/footer/Footer';
import React from 'react';
import { render } from '@testing-library/react';
import { render as renderer, unmountComponentAtNode } from 'react-dom';

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

test('Should have About US Text', () => {
    const { getByText } = render(<Footer />);
    const linkElement = getByText(/Copyright/i);
    expect(linkElement).toBeInTheDocument();
  });

test('Should have footer text field in news dashboard', ()=>{
    const{getByTestId} = render(<Footer/>);
   expect(getByTestId('footer')).toBeInTheDocument();
  });

  test('should have div element in news dashboard', () => {
    renderer(<Footer />, element);
    const count = element.getElementsByTagName('h3').length;
    expect(count).toBeGreaterThanOrEqual(1);
});
  
export default Footer;
