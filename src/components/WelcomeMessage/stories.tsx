import { Story, Meta } from '@storybook/react/types-6-0'
import WelcomeMessage, { WelcomeMessageProps } from '.'

export default {
  title: 'WelcomeMessage',
  component: WelcomeMessage,
  args: {
    name: 'Mehmed Al Fatih'
  }
} as Meta

export const Default: Story<WelcomeMessageProps> = (args) => (
  <WelcomeMessage {...args} />
)
