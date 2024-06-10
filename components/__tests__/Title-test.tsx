import * as React from 'react'
import { render } from '@testing-library/react-native';
import Title from '../ui/Title';
import { Asset } from 'expo-asset';

// Mock the useFonts hook
jest.mock('expo-asset', () => ({
  ...jest.requireActual('expo-asset'),
  useAssets: jest.fn(() => []),
}));

describe('Title', () => {
  it('renders correctly', async () => {
    const { findByTestId } = render(<Title titleText="Full Body" />)
    const element = await findByTestId("test-title")
    expect(element).toBeOnTheScreen();
  });

  it('has children', async () => {
    const { findByTestId } = render(<Title titleText="Full Body" />)
    const element = await findByTestId("test-title")
    expect(element).not.toBeEmptyElement();
  });

  it('renders title correctly when titleText prop is passed', async () => {
    const { findByTestId } = render(<Title titleText="Leg Day" />)
    const element = await findByTestId("test-title")
    expect(element).toHaveTextContent(/Leg Day/)
  });
});
