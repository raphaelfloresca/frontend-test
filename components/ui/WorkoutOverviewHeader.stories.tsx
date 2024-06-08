import type { Meta, StoryObj } from '@storybook/react'

import WorkoutOverviewHeader from './WorkoutOverviewHeader'

const meta: Meta<typeof WorkoutOverviewHeader> = {
  component: WorkoutOverviewHeader,
  title: 'WorkoutOverviewHeader'
}

export default meta

type Story = StoryObj<typeof meta>

export const Base: Story = {
  args: {

  }
}
