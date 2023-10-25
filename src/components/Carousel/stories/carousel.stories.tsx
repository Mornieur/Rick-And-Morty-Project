import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { Carousel } from '..';

const meta: Meta<typeof Carousel> = {
  title: '/Components/Carousel',
  component: Carousel,
  parameters: {
    viewport: {
      defaultViewport: 'responsive',
      viewports: INITIAL_VIEWPORTS,
    },
  },
};

export default meta;

const DefaultSlide: React.FC = () => (
  <div
    style={{
      width: '184px',
      height: '100px',
      backgroundColor: '#eee',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    Slide
  </div>
);

type Story = StoryObj<typeof Carousel>;

export const WithThreeSlides: Story = {
  args: {
    children: [
      <DefaultSlide key={0} />,
      <DefaultSlide key={1} />,
      <DefaultSlide key={2} />,
      <DefaultSlide key={3} />,
      <DefaultSlide key={4} />,
      <DefaultSlide key={5} />,
    ],
    isInteractive: true,
    hideButtonsWhenSingleSlide: false,
  },
};
