import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Search } from '..';

test('should render a search input and a search icon', () => {
  render(<Search value="" onChange={jest.fn()} />);

  expect(screen.getByTestId('search-input')).toBeInTheDocument();
  expect(screen.getByRole('searchbox')).toBeInTheDocument();
});

test('should call the onChange prop when the search input is changed', () => {
  const onChangeMock = jest.fn();

  render(<Search value="" onChange={onChangeMock} />);

  const searchInput = screen.getByTestId('search-input');

  fireEvent.change(searchInput, { target: { value: 'Rick Sanchez' } });

  expect(onChangeMock).toHaveBeenCalledWith('Rick Sanchez');
});
