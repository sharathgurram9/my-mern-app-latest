import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AppContext } from '../../src/App';

// API calls
const fetchUsers = async () => {
  const res = await axios.get('http://127.0.0.1:5000/api/users');
  return res.data;
};

const addUserApi = async (user) => {
  const res = await axios.post('http://127.0.0.1:5000/api/users', user);
  return res.data;
};

const Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const fromApp = useContext(AppContext);
  console.log('fromApp', fromApp);
  const queryClient = useQueryClient();
  const [errorMsg, setError] = useState('');

  // ✅ Fetch users (v5 style)
  const {
    data: users,
    error,
    isLoading,
  } = useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers,
  });

  // ✅ Mutation for adding user (v5 style)
  const mutation = useMutation({
    mutationFn: addUserApi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] }); // refresh list
      reset(); // clear form
    },
    onError: (err) => {
      setError(err.response?.data?.message || 'Something went wrong');
    },
  });

  const onSubmit = (data) => {
    mutation.mutate(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          {...register('name', { required: 'Name is required' })}
        />
        {errors.name && <p style={{ color: 'red' }}>{errors.name.message}</p>}
        <br />

        <label htmlFor="age">Age:</label>
        <input
          id="age"
          type="number"
          {...register('age', {
            required: 'Age is required',
            valueAsNumber: true,
            min: { value: 1, message: 'Age must be greater than 0' },
          })}
        />
        {errors.age && <p style={{ color: 'red' }}>{errors.age.message}</p>}
        <br />

        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: 'Invalid email address',
            },
          })}
        />
        {errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>}
        <br />

        <button type="submit" disabled={mutation.isPending}>
          {mutation.isPending ? '⏳ Submitting...' : 'Submit'}
        </button>
      </form>

      {errorMsg && <p style={{ color: 'red' }}>{errorMsg}</p>}

      <h3>Users:</h3>
      {isLoading ? (
        <p>Loading users...</p>
      ) : error ? (
        <p style={{ color: 'red' }}>Failed to load users</p>
      ) : (
        <ul>
          {users?.map((user) => (
            <li key={user.id}>
              {user.name} - {user.email} ({user.age})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Form;
