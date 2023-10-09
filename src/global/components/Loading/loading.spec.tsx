import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Loading } from '.';

describe('<Loading>', () => {
  it('should render loading component', () => {
    const { getByText, getByRole, getByAltText } = render(
      <Loading label="Carregando..." />
    );

    const loadingContainer = getByRole('loading-container');
    const buttonTextElement = getByText('Carregando...');
    const imageElement = getByAltText('logo');
    const animatedElements = [
      getByRole('animated-element-1'),
      getByRole('animated-element-2'),
      getByRole('animated-element-3'),
    ];

    expect(loadingContainer).toBeInTheDocument();
    expect(buttonTextElement).toBeInTheDocument();
    expect(imageElement).toBeInTheDocument();

    animatedElements.forEach((element) => {
      expect(element).toHaveStyle('opacity: 0');
    });
  });
});
