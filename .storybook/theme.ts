import { create } from '@storybook/theming/create';
import rickLogo from '../public/rickLogo.png';

export const lightTheme = {
  colors: {
    background: '#ffffff',
    text: '#333333',
    primary: '#6200ee',
    secondary: '#03dac6',
    error: '#b00020',
    surface: '#ffffff',
  },
};

export const darkTheme = {
  colors: {
    background: '#121212',
    text: '#ffffff',
    primary: '#bb86fc',
    secondary: '#03dac6',
    error: '#cf6679',
    surface: '#121212',
  },
};

export const customViewports = {
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

export const globalViewports = {
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
};

export const defaultStyleTheme = {
  'yellow-light': '#fdd100',
  'yellow-dark': '#E5B800',

  'blue-light': '#00A8FF',
  'blue-light2': '#EDF6FF',
  'blue-dark': '#2A4999',
  'blue-dark-title': '#1E439B',
  'blue-dark2': '#012563',

  'green-light': '#34C759',
  'green-dark': '#1AB570',
  'green-600': '#16BA32',

  white: '#fff',
  whitesmoke: '#FCFCFC',

  'red-dark': '#ff2d2d',

  'purple-400': '#C549EC',

  'cyan-500': '#1AC4CD',

  'orange-300': '#FCA844',

  'red-600': '#EF2929',
  'red-100': '#FA7171',

  'grey-1000': '#212121',
  'grey-700': '#6d6d6d',
  'grey-400': '#c6c6c6',
  'grey-200': '#e2e2e2',
  'grey-100': '#d8d8d8',
  'grey-90': '#D7DEE3',
  'grey-40': '#ECECEC',
  'grey-30': '#F3F3F3',
  'grey-25': '#F7F7F7',
  'grey-20': '#FBFBFB',

  'grey-opacity': 'rgba(0, 0, 0, 0.2)',

  montserrat: 'Montserrat',
  titillium: 'Titillium Web',

  light: 300,
  regular: 400,
  semibold: 600,
  bold: 700,

  'default-box-shadow': 'rgba(149, 157, 165, 0.2) 0px 8px 14px;',
  'elements-box-shadow':
    'rgb(114 119 128 / 5%) 0px 1px 0px 0px, rgb(114 119 128 / 5%) 0px 2px 4px 0px, rgb(114 119 128 / 5%) 0px 4px 8px 0px',
  radius: '8px',
};
export default create({
  base: 'dark',

  brandTitle: 'Rick and Morty',
  // brandUrl: 'url da aplicacao',
  brandImage: rickLogo,

  brandTarget: '_self',
  fontBase: '"Montserrat", sans-serif',
  fontCode: '"Titillium Web", monospace',

  textColor: '#2A4999',
  textInverseColor: '#FFFFFF',
  textMutedColor: '#666666',

  barTextColor: '#999999',
  barSelectedColor: '#1E439B',
  barBg: '#FFFFFF',

  inputBg: '#2A4999',
  inputBorder: '#2A4999',
  inputTextColor: '#FFFFFF',
  inputBorderRadius: 4,

  appBg: '#F6F9FC',
  appContentBg: '#FFFFFF',
  appBorderColor: 'rgba(0,0,0,.1)',
  appBorderRadius: 4,
});
