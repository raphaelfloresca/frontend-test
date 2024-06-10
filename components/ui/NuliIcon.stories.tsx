import type { Meta, StoryObj } from '@storybook/react'

import NuliIcon from './NuliIcon'

const meta: Meta<typeof NuliIcon> = {
  component: NuliIcon,
  title: 'NuliIcon'
}

export default meta

type Story = StoryObj<typeof meta>

export const Heart: Story = {
  args: {
    name: 'heart'
  },
}

export const Back: Story = {
  args: {
    name: 'back'
  }
}

export const Cog: Story = {
  args: {
    name: 'cog'
  }
}
