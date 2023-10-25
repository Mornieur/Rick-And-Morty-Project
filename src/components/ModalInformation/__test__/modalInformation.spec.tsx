import React from 'react';
import { render } from '@testing-library/react';
import { ModalInformation } from '..';

describe('<ModalInformation />', () => {
  let mockCloseModalFn: jest.Mock;

  beforeEach(() => {
    mockCloseModalFn = jest.fn();
  });

  it('renders correctly', () => {
    const { getByText } = render(
      <ModalInformation
        info="Test Info"
        nameBox="Test Name"
        isModalOpen={true}
        onCloseModal={mockCloseModalFn}
      >
        <div>Carousel content</div>
      </ModalInformation>
    );

    expect(getByText('Test Info')).toBeInTheDocument();
    expect(getByText('Test Name')).toBeInTheDocument();
  });
});
