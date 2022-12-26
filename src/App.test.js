import {render, screen, cleanup} from '@testing-library/react'
import App from './App';

afterEach(() => {
    cleanup()
})

test('loading the App component', () => {
  render(<App />);
  const loadApp = screen.getByTestId('app-1')
  expect(loadApp).toBeInTheDocument()
});
