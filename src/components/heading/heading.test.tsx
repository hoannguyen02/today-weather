import { render, screen } from '@testing-library/react';
import { Heading } from './heading';

describe('Heading', () => {
  it('should render get correct title', () => {
    render(<Heading title="heading" />);
    expect(screen.getByText('heading')).toBeTruthy();
  });
});
