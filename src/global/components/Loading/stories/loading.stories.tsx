import type { Meta, StoryObj } from '@storybook/react';
import { Loading } from '..';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import React from 'react';
import {
  AiOutlineArrowDown,
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
  AiOutlineArrowUp,
} from 'react-icons/ai';
import * as styles from '../styles';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const arrows = {
  AiOutlineArrowDown,
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
  AiOutlineArrowUp,
};

const customViewports = {
  MOBILE: {
    name: 'Cellphone Example',
    styles: {
      width: '415px',
      height: '915px',
    },
  },
  IPAD: {
    name: 'iPad Example',
    styles: {
      width: '810px',
      height: '1080px',
    },
  },
  DESKTOP: {
    name: 'Desktop Example',
    styles: {
      width: '1300px',
      height: '1080px',
    },
  },
};

const meta = {
  title: 'Global/components/Loading',
  decorators: [
    (Story) => {
      return (
        <styles.MainContainer>
          <Story />
        </styles.MainContainer>
      );
    },
  ],
  excludeStories: /.*Data$/,
  component: Loading,
  argTypes: {
    label: { control: 'text' },
    advanced: { control: 'boolean' },
    margin: { control: 'number', if: { arg: 'advanced' } },
    padding: { control: 'number', if: { arg: 'advanced' } },
    cornerRadius: { control: 'number', if: { arg: 'advanced' } },
    arrow: {
      if: { arg: 'advanced' },
      options: Object.keys(arrows),
      mapping: arrows,
      control: {
        type: 'select',
        labels: {
          ArrowUp: 'Up',
          ArrowDown: 'Down',
          ArrowLeft: 'Left',
          ArrowRight: 'Right',
        },
      },
    },
    background: {
      control: 'color',
    },
    backgroundColor: {
      control: 'color',
    },
    variantColor: { control: 'text' },
    variant: {
      options: ['primary', 'secondary'],
      control: { type: 'radio' },
    },
    TesteRadioOne: {
      options: ['Item One', 'Item Two', 'Item Three'],
      control: { type: 'select' },
    },
    TesteRadioTwo: {
      options: ['Another Item One', 'Another Item Two', 'Another Item Three'],
      control: { type: 'select' },
    },
  },

  parameters: {
    customEventPanel: [
      {
        eventName: 'event:example',
      },
      {
        eventName: 'my:event',
        eventData: {
          opt: 23,
        },
        selector: '.selector',
      },
      {
        eventName: 'my:otherevent',
        eventData: {
          foo: 23,
        },
      },
    ],
  },
} satisfies Meta<typeof Loading>;

export default meta;

type Story = StoryObj<typeof Loading>;

export const Primary: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('Carregando')).toBeInTheDocument();
  },
  args: {
    background: 'white',
    label: 'Carregando',
  },

  parameters: {
    nextjs: {
      appDirectory: true,
    },
    viewport: {
      defaultViewport: 'responsive',
      viewports: {
        mobileS: {
          name: 'Mobile S',
          styles: {
            width: '320px',
            height: '568px',
          },
        },
        mobileM: {
          name: 'Mobile M',
          styles: {
            width: '375px',
            height: '667px',
          },
        },
        mobileL: {
          name: 'Mobile L',
          styles: {
            width: '425px',
            height: '812px',
          },
        },
        tablet: {
          name: 'Tablet',
          styles: {
            width: '768px',
            height: '1024px',
          },
        },
        desktop: {
          name: 'Desktop',
          styles: {
            width: '1440px',
            height: '900px',
          },
        },
      },
    },
  },
};

export const Secondary: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await expect(canvas.getByText('Carregando')).toBeInTheDocument();
  },
  args: {
    ...Primary.args,
    primary: false,
  },
  parameters: {
    viewport: {
      viewport: { ...INITIAL_VIEWPORTS, ...customViewports },
      defaultViewport: 'iPad',
    },
  },
};

export const Unchecked: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await expect(canvas.getByText('Unchecked')).toBeInTheDocument();
  },
  args: {
    label: 'Unchecked',
  },
  decorators: [
    (Story) => (
      <>
        <Story />
        <div role="button"></div>
      </>
    ),
  ],
};