import DisplayCard from '../Components/displayCard/DisplayCard';
import React from 'react';
import { render } from '@testing-library/react';
import { render as renderer, unmountComponentAtNode } from 'react-dom';

let element:any = null;
beforeEach(() => {
    element = document.createElement('div');
    document.body.appendChild(element);
});

afterEach(() => {
    unmountComponentAtNode(element);
    element.remove();
    element = null;
});

test('Should have author text field in news card', ()=>{
    const{getByTestId} = render(<DisplayCard/>);
   expect(getByTestId('author')).toBeInTheDocument();
  });
  
test('Should have description text field in news card', () => {
    const { getByTestId } = render(<DisplayCard />);
    expect(getByTestId('description')).toBeInTheDocument();
  });
  

  test('Should have title text field in news card', () => {
    const { getByTestId } = render(<DisplayCard />);
    expect(getByTestId('title')).toBeInTheDocument();
  });

  test('Should have title readLater field in news card', () => {
    const { getByTestId } = render(<DisplayCard />);
    expect(getByTestId('readLater')).toBeInTheDocument();
  });

  test('should have 1 button in news card', () => {
    renderer(<DisplayCard />, element);
    const count = element.getElementsByTagName('button').length;
    expect(count).toBe(2);
});
