import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Card } from '..';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

const meta: Meta<typeof Card> = {
  title: '/Components/Card',
  component: Card,
  argTypes: {
    image: { control: 'text' },
    name: { control: 'text' },
    status: {
      control: { type: 'select', options: ['Alive', 'Dead', 'Unknown'] },
    },
    origin: { control: 'text' },
    id: { control: 'number' },
  },
  parameters: {
    viewport: {
      defaultViewport: 'responsive',
      viewports: INITIAL_VIEWPORTS,
    },
  },
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Primary: Story = {
  args: {
    image: 'https://via.placeholder.com/150',
    name: 'Rick Sanchez',
    status: 'Alive',
    origin: {
      name: 'Earth',
      url: 'http://rickandmortyapi.com/api/location/1',
    },
    id: 1,
  },
};
