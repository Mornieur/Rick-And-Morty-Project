import { createGlobalStyle, keyframes } from 'styled-components';

const fadeIn = keyframes`
from { opacity: 0}
to { opacity: 1 }
`;

export const GlobalStyles = createGlobalStyle`
* {
  padding: 0;
  margin: 0; 
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
}

html {
  height: 100%;

  @media (min-width: 1600px){
    font-size: 18px;
  }
  @media (min-width:600px){
    font-size:16px;
  }
  @media (max-height:720px){
    font-size:14px;
  }
  @media (max-width:480px){
    font-size:14px;
  }
}

body {
  width: 100%;
  overflow-x: hidden;
  scrollbar-width: thin;

  .fadeIn {
    animation: ${fadeIn} 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
  }
}

li, ul {
  list-style: none;
}

button {
  cursor: pointer;
  :focus {
    outline: 1px solid transparent;
  }
}

p, span, label {
  font-weight: var(--medium);
}

h1, h2 {
  font-weight: var(--bold);
  font-family: var(--titillium);
}

a {
  text-decoration: none;
  color: #214392;

  :focus {
    border: 2px solid transparent;
  }
}


  :root {
    --yellow-light: #fdd100;
    --yellow-dark: #E5B800;


    --blue-light:#00A8FF; 
    --blue-light2:#EDF6FF; 
    --blue-dark: #2A4999;
    --blue-dark-title: #1E439B;
    
    --blue-dark2: #002B72;
    --blue-dark3: #012563;

    --green-light:#34C759;
    --green-light2: #DAFFF2;  
    --green-dark:#1AB570;
    --green-600: #16BA32;

    --white: #fff;
    --whitesmoke: #FCFCFC;

    --red-dark: #ff2d2d;

    --purple-400: #C549EC;
  
    --cyan-500: #1AC4CD;

    --orange-300: #FCA844;

    --red-600: #EF2929;
    --red-100: #FA7171;
    
    --grey-700: #6d6d6d;
    --grey-400: #c6c6c6;
    --grey-200: #e2e2e2;
    --grey-100: #d8d8d8;
    --grey-90: #F3F3F3;
    
    --grey-opacity: rgba(0, 0, 0, 0.2);

    // FONTS
    --montserrat: 'Montserrat', sans-serif;
    --titillium: 'Titillium Web', sans-serif;
    --inria-sans: "Inria Sans", sans-serif;

    // FONTS WEIGHT 
    --light: 300;
    --regular: 400;
    --medium: 500;
    --semibold: 600;
    --bold: 700;

    
    --default-box-shadow: 0 2px 5px 1px rgba(0, 0, 0, 0.1);
    --radius: 5px;

    scrollbar-width: thin !important;
  }

  ::-webkit-scrollbar {
  width: 5px;
  height: 8px;
  background-color: transparent; 
}

`;
