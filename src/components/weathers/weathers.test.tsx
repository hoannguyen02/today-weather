import { render, screen } from '@testing-library/react';
import { Weathers } from './';
import useWeathers from './useWeathers';

jest.mock('./useWeathers', () => jest.fn());
jest.mock('../heading', () => ({
  Heading: () => <div data-testid="Heading" />
}));
jest.mock('./weather-Item', () => ({
  WeatherItem: () => <div data-testid="WeatherItem" />
}));

const defaultProps = {
  weathers: [
    {
      city: 'Ho Chi Minh',
      humidity: '100%',
      title: 'Clouds',
      time: '2023-08-28 11:00 AM',
      location: 'Ho Chi Minh, VN'
    }
  ] as Weather[],
  refresh: jest.fn()
};
const mockUseUseWeathersValues = {
  onDelete: jest.fn(),
  onSearch: jest.fn()
};

describe('Weathers', () => {
  it('should render GetStarted div', () => {
    (useWeathers as jest.Mock).mockImplementationOnce(() => ({
      ...mockUseUseWeathersValues
    }));
    render(<Weathers {...defaultProps} />);
    expect(screen.getByTestId('Heading')).toBeTruthy();
    expect(screen.getByTestId('WeatherItem')).toBeTruthy();
  });
});
