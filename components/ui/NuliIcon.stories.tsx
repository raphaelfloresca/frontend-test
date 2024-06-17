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
    name: 'heart',
    color: '#262c45'
  },
}

export const Back: Story = {
  args: {
    name: 'back',
    color: '#262c45'
  }
}

export const Cog: Story = {
  args: {
    name: 'cog',
    color: '#262c45'
  }
}

export const Swap: Story = {
  args: {
    name: 'swap',
    color: '#262c45'
  }
}

export const History: Story = {
  args: {
    name: 'history',
    color: '#262c45'
  }
}

export const MenuInfo: Story = {
  args: {
    name: 'menu-info',
    color: '#262c45'
  }
}

export const Prefill: Story = {
  args: {
    name: 'prefill',
    color: '#262c45'
  }
}
