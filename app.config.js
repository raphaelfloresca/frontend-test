export default ({ config }) => ({
  ...config,
  extra: {
    storybookEnabled: process.env.STORYBOOK_ENABLED,
  },
  assets: ['./assets/icons/'],
})
