import * as React from 'react'
import renderer, { ReactTestRendererJSON } from 'react-test-renderer'

import { ThemedText } from '../ThemedText';
import WorkoutOverviewHeader from '../ui/WorkoutOverviewHeader'

let tree: ReactTestRendererJSON | ReactTestRendererJSON[] | null;

beforeAll(() => {
  tree = renderer.create(<WorkoutOverviewHeader />).toJSON()
})

it(`renders correctly`, () => {

  expect(tree).toBeTruthy()
})

it(`has children`, () => {
  const tree = renderer.create(<WorkoutOverviewHeader />).toJSON()
  expect(tree.children.length).toBeGreaterThan(0)
})
