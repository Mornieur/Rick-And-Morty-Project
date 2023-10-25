import type { Meta, StoryObj } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { Modal, ModalProps } from '..';

const meta: Meta<typeof Modal> = {
  title: 'Global/components/Modal',
  component: Modal,
  argTypes: {
    maxWidth: { control: 'text' },
    backgroundColor: { control: 'color' },
    closeButton: { control: 'boolean' },
    children: { control: 'text' },
  },
  parameters: {
    viewport: {
      defaultViewport: 'responsive',
      viewports: INITIAL_VIEWPORTS,
    },
  },
};

export default meta;

type Story = StoryObj<typeof Modal>;

export const Primary: Story = {
  args: {
    maxWidth: '500px',
    backgroundColor: '#8CC084',
    closeButton: true,
    children: 'This is a sample modal content.',
  },
};
