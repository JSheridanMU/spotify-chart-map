import * as React from "react";
import { render, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer'
import Dashboard from '.././Dashboard';

afterEach(cleanup)

test('renders without crashing', () => {
  render(<Dashboard/>);
});

test('detects page content', () => {
  const {getByText, getAllByText, getByTestId} = render(<Dashboard/>);

  //table titles
  getByText('Global Charts 11/12/2020')
  getByText('Ireland Charts 11/12/2020')

  //table headers
  getAllByText('Rank')
  getAllByText('Song')
  getAllByText('Streams')

  //slider
  getByTestId('slider')
  
  //table data
  getAllByText('Loading')
});

test('matches snapshot', () => {
    const tree = renderer.create(<Dashboard/>).toJSON()
    expect(tree).toMatchSnapshot()
});