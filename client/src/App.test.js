import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the form correctly', () => {
  render(<App />);
  const nameLabel = screen.getByText(/name:/i);
  expect(nameLabel).toBeInTheDocument();
});
