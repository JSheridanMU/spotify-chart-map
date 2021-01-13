import * as React from "react";
import { render, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer'
import MapView from '.././MapView';

afterEach(cleanup)

test('renders without crashing', () => {
  render(<MapView/>);
});

test('detects watermark test', () => {
  const {getByText} = render(<MapView/>);

  getByText('Leaflet')
});

test('matches snapshot', () => {
    const tree = renderer.create(<MapView/>).toJSON()
    expect(tree).toMatchSnapshot()
});