import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Modal } from '..';

describe('<Modal />', () => {
  it('renders children content', () => {
    render(
      <Modal maxWidth="500px" backgroundColor="#fff" closeButton={false}>
        <div>Modal content</div>
      </Modal>
    );

    expect(screen.getByText('Modal content')).toBeInTheDocument();
  });

  it('does not render close button if closeButton prop is false', () => {
    render(
      <Modal maxWidth="500px" backgroundColor="#fff" closeButton={false}>
        Modal content
      </Modal>
    );

    const closeButton = screen.queryByRole('button');
    expect(closeButton).not.toBeInTheDocument();
  });

  it('renders close button if closeButton prop is true', async () => {
    render(
      <Modal maxWidth="500px" backgroundColor="#fff" closeButton={true}>
        Modal content
      </Modal>
    );

    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('invokes setCloseModal when close button is clicked', () => {
    const mockCloseFn = jest.fn();
    render(
      <Modal
        maxWidth="500px"
        backgroundColor="#fff"
        closeButton={true}
        setCloseModal={mockCloseFn}
      >
        Modal content
      </Modal>
    );

    const closeButton = screen.getByRole('button');
    fireEvent.click(closeButton);

    expect(mockCloseFn).toHaveBeenCalledTimes(1);
  });
});
