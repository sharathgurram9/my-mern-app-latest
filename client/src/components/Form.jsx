import axios from 'axios';
import { useState } from 'react';

const Form = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const addUser = async (payload) => {
    try {
      setLoading(true);
      console.log('adding user', payload);
      const response = await axios.post(
        'http://127.0.0.1:5000/api/users',
        payload
      );
      console.log('response', response);
      setLoading(false);
      setName('');
      setAge(0);
      setEmail('');
    } catch (error) {
      setError(error.response?.data?.message || 'Something went wrong');
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      name,
      age,
      email,
    };
    console.log('payload', payload);
    addUser(payload);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <label htmlFor="Age">Age:</label>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <br />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <button type="submit">Submit</button>
      </form>

      {loading && <p>⏳ Please wait...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};
export default Form;
