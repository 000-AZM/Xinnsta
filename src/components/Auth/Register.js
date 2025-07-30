import React, { useState } from 'react';
import { register } from '../../firebase/auth';
import {
  Container, Typography, TextField, Button, Box
} from '@mui/material';

export default function Register() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      await register(email, password, name);
      alert('Registration Successful');
    } catch (e) {
      alert(e.message);
    }
  };

  return (
    <Container maxWidth="sm">
      <Box mt={5}>
        <Typography variant="h4">Register</Typography>
        <TextField fullWidth label="Name" margin="normal" value={name} onChange={e => setName(e.target.value)} />
        <TextField fullWidth label="Email" margin="normal" value={email} onChange={e => setEmail(e.target.value)} />
        <TextField fullWidth label="Password" margin="normal" type="password" value={password} onChange={e => setPassword(e.target.value)} />
        <Button variant="contained" fullWidth onClick={handleRegister}>Register</Button>
      </Box>
    </Container>
  );
}
