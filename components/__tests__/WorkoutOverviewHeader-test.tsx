import * as React from 'react'
import { render, waitFor } from '@testing-library/react-native';

import WorkoutOverviewHeader from '../ui/WorkoutOverviewHeader'

describe('WorkoutOverviewHeader', () => {
  it('renders correctly', async () => {
    const { queryByTestId } = render(<WorkoutOverviewHeader />);

    // Wait for the component to re-render after fonts have loaded
    await waitFor(() => expect(queryByTestId('workout-overview-header')).toBeTruthy());
  });

  it('has children', async () => {
    const { queryByTestId } = render(<WorkoutOverviewHeader />);

    // Wait for the component to re-render after fonts have loaded
    await waitFor(() => {
      const tree = queryByTestId('workout-overview-header');
      if (tree) {
        expect(tree.children.length).toBeGreaterThan(0);
      }
    });
  });
});
