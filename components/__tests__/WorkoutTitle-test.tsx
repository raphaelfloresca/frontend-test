import * as React from 'react'
import { render } from '@testing-library/react-native';

import WorkoutTitle from '../ui/WorkoutTitle'

describe('WorkoutTitle', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(<WorkoutTitle />)
    expect(getByTestId("test-workout-title")).toBeOnTheScreen();
  });

  it('has children', () => {
    const { getByTestId } = render(<WorkoutTitle />)
    expect(getByTestId("test-workout-title")).not.toBeEmptyElement();
  });
});
