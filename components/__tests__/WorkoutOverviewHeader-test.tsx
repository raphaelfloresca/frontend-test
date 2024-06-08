import * as React from 'react'
import { render } from '@testing-library/react-native';

import WorkoutOverviewHeader from '../ui/WorkoutOverviewHeader'

// Mock the icon
jest.mock("../ui/NuliIcon", () => {
  return {
    __esModule: true,
    default: () => {
      return <></>;
    },
  };
});

// Mock the useFonts hook
jest.mock('expo-font', () => ({
  useFonts: jest.fn(() => [true]),
}));

describe('WorkoutOverviewHeader', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(<WorkoutOverviewHeader />)
    expect(getByTestId("workout-overview-header")).toBeOnTheScreen();
  });

  it('has children', () => {
    const { getByTestId } = render(<WorkoutOverviewHeader />)
    expect(getByTestId("workout-overview-header")).not.toBeEmptyElement();
  });
});
