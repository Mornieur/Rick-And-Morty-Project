import type { Meta, StoryObj } from '@storybook/react';

import { Skeleton } from '..';

const meta = {
  title: 'Components/global/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Skeleton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    height: '40px'
  }
};
