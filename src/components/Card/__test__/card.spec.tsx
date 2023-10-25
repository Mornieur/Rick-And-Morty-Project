import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Card } from '..';

const mockProps = {
  image: 'https://via.placeholder.com/150',
  name: 'Rick Sanchez',
  status: 'Alive',
  origin: {
    name: 'Earth',
    url: 'http://rickandmortyapi.com/api/location/1',
  },
  id: 1,
};

describe('Card Component', () => {
  it('should render character name correctly', () => {
    render(<Card {...mockProps} />);

    expect(screen.getByText('Rick Sanchez')).toBeInTheDocument();
  });

  it('should render character image correctly', () => {
    render(<Card {...mockProps} />);

    const image = screen.getByAltText('person image') as HTMLImageElement;
    expect(image.src).toBe('https://via.placeholder.com/150');
  });

  it('should render character origin correctly', () => {
    render(<Card {...mockProps} />);

    expect(screen.getByText('Earth')).toBeInTheDocument();
  });

  it('should render character status correctly', () => {
    render(<Card {...mockProps} />);

    expect(screen.getByText('Alive')).toBeInTheDocument();
  });
});
