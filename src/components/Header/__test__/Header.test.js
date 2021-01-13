import * as React from "react";
import { render, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer'
import Header from '.././Header';

afterEach(cleanup)

test('renders without crashing', () => {
  render(<Header/>);
});

test('renders title and button', () => {
  const {getByText} = render(<Header/>);

  getByText('Spotify Chart Map')
  getByText('Login to Spotify')
});

test('matches snapshot', () => {
    const tree = renderer.create(<Header/>).toJSON()
    expect(tree).toMatchSnapshot()
});