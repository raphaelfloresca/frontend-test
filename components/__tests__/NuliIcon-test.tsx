import * as React from 'react'
import { render } from '@testing-library/react-native';

import NuliIcon from '../ui/NuliIcon'

// Mock the useFonts hook
jest.mock('expo-font', () => ({
  ...jest.requireActual('expo-font'),
  useFonts: jest.fn(() => [true]),
}));

describe('NuliIcon', () => {
  it('renders correctly', async () => {
    const { findByTestId } = render(<NuliIcon name="heart" />)
    const icon = await findByTestId("test-icon")
    expect(icon).toBeOnTheScreen();
  });
});

describe('NuliIcon', () => {
  it('renders correctly when color prop is passed', async () => {
    const { findByTestId } = render(<NuliIcon name="heart" color="blue" />)
    const icon = await findByTestId("test-icon")
    expect(icon).toHaveStyle({ color: 'blue' })
  });
});
