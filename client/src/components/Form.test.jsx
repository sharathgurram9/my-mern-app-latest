import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import axios from 'axios';
import Form from './Form';

const queryClient = new QueryClient();

test('renders form inputs', () => {
  render(
    <QueryClientProvider client={queryClient}>
      <Form />
    </QueryClientProvider>
  );

  // Check if Name input is there
  expect(screen.getByLabelText(/name:/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/age:/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/email:/i)).toBeInTheDocument();
});

test('shows validation errors', async () => {
  render(
    <QueryClientProvider client={queryClient}>
      <Form />
    </QueryClientProvider>
  );
  const submitBtn = screen.getByRole('button', { name: /submit/i });
  userEvent.click(submitBtn);
  expect(await screen.findByText(/Name is required/i)).toBeInTheDocument();
  expect(await screen.findByText(/Age is required/i)).toBeInTheDocument();
  expect(await screen.findByText(/Email is required/i)).toBeInTheDocument();
});

jest.mock('axios');
test('submits form data', async () => {
  axios.post.mockResolvedValueOnce({
    data: { id: 1, name: 'John', age: 25, email: 'john@test.com' },
  });

  // Mock GET response (what the UI uses to render users after submit)
  axios.get.mockResolvedValueOnce({
    data: [{ id: 1, name: 'John', age: 25, email: 'john@test.com' }],
  });
  render(
    <QueryClientProvider client={queryClient}>
      <Form />
    </QueryClientProvider>
  );
  userEvent.type(screen.getByLabelText(/Name/i), 'John');
  userEvent.type(screen.getByLabelText(/Age/i), '25');
  userEvent.type(screen.getByLabelText(/Email/i), 'john@test.com');

  userEvent.click(screen.getByRole('button', { name: /submit/i }));

  expect(await screen.findByText(/John - john@test.com/i)).toBeInTheDocument();
});
