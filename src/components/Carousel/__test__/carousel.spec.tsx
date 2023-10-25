import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Carousel } from '..';

describe('Carousel', () => {
  it('renders correctly', () => {
    const { getByText } = render(
      <Carousel>
        <div>Slide 1</div>
        <div>Slide 2</div>
        <div>Slide 3</div>
      </Carousel>
    );

    expect(getByText('Slide 1')).toBeInTheDocument();
    expect(getByText('Slide 2')).toBeInTheDocument();
    expect(getByText('Slide 3')).toBeInTheDocument();
  });

  it('navigates to the next and previous slide', () => {
    const { getByText, getByRole } = render(
      <Carousel>
        <div>Slide 1</div>
        <div>Slide 2</div>
      </Carousel>
    );

    const buttonNext = getByRole('button', { name: /forward/i });
    const buttonPrev = getByRole('button', { name: /back/i });

    fireEvent.click(buttonNext);

    fireEvent.click(buttonPrev);
  });

  it('hides buttons when hideButtonsWhenSingleSlide is true', () => {
    const { queryByRole } = render(
      <Carousel hideButtonsWhenSingleSlide={true}>
        <div>Single Slide</div>
      </Carousel>
    );

    expect(queryByRole('button', { name: /forward/i })).not.toBeInTheDocument();
    expect(queryByRole('button', { name: /back/i })).not.toBeInTheDocument();
  });
});
