import * as React from 'react'
import { render } from '@testing-library/react-native';
import Title from '../ui/Title';

describe('Title', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(<Title titleText="Full Body" />)
    const element = getByTestId("test-title")
    expect(element).toBeOnTheScreen();
  });

  it('has children', () => {
    const { getByTestId } = render(<Title titleText="Full Body" />)
    expect(getByTestId("test-title")).not.toBeEmptyElement();
  });

  it('renders title correctly when titleText prop is passed', () => {
    const { getByTestId } = render(<Title titleText="Leg Day" />)
    expect(getByTestId("test-title")).toHaveTextContent(/Leg Day/)
  });
});
