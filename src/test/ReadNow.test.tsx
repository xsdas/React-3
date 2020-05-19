import React from 'react';
import ReadNow from '../Components/readNow/ReadNow';
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

test('Should have newsGrid text field in readNow dashboard', ()=>{
    const{getByTestId} = render(<ReadNow/>);
   expect(getByTestId('newsGrid')).toBeInTheDocument();
  });

  test('should have div element in ReadNow dashboard', () => {
    renderer(<ReadNow />, element);
    const count = element.getElementsByTagName('div').length;
    expect(count).toBeGreaterThanOrEqual(1);
});
