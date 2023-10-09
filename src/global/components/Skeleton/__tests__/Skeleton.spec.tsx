import { queryAllByAttribute, render } from '@testing-library/react';
import { Skeleton } from '..';

describe('Test Skeleton component', () => {
  test('Should be render Skeleton correctly', () => {
    const { container } = render(<Skeleton height="50px" />);

    expect(container.firstChild).toBeInTheDocument();
  });

  test('Should render with circular variant', () => {
    const { getByTestId } = render(
      <Skeleton height="50px" variant="circular" />
    );

    expect(getByTestId('circular')).toBeInTheDocument();
  });

  test('Should render with wave animation', () => {
    const { getByTestId } = render(<Skeleton height="50px" animation="wave" />);

    expect(getByTestId('wave-animation')).toBeInTheDocument();
  });

  test('Should render in row direction', () => {
    const { getByTestId } = render(
      <Skeleton height="50px" flexDirection="row" />
    );
    expect(getByTestId('row-direction')).toBeInTheDocument();
  });

  test('Should render correct number of skeletons', () => {
    const total = 5;
    render(<Skeleton height="50px" total={total} />);

    const getAllByTestClass = queryAllByAttribute.bind(null, 'data-test-class');
    const skeletons = getAllByTestClass(document.body, 'skeleton-cube');

    expect(skeletons.length).toBe(total);
  });
});
