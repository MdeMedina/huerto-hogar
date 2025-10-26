import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useUser();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    // Validación de contraseña
    if (password.length < 8) {
      setError('La contraseña debe tener mínimo 8 caracteres');
      return;
    }

    // Validación de email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setError('Debes ingresar un correo electrónico válido');
      return;
    }

    // Login exitoso
    login(email);
    alert('Inicio de sesión exitoso');
    navigate('/');
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      margin: 0,
      background: '#f0f0f0',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{
        background: 'white',
        padding: '30px',
        borderRadius: '15px',
        boxShadow: '0 6px 20px rgba(0,0,0,0.2)',
        width: '300px',
        textAlign: 'center'
      }}>
        <h2>Iniciar Sesión</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              width: '100%',
              padding: '10px',
              margin: '8px 0',
              border: '1px solid #ccc',
              borderRadius: '8px'
            }}
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{
              width: '100%',
              padding: '10px',
              margin: '8px 0',
              border: '1px solid #ccc',
              borderRadius: '8px'
            }}
          />
          <button
            type="submit"
            style={{
              width: '100%',
              padding: '10px',
              background: '#4CAF50',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '16px'
            }}
          >
            Entrar
          </button>
          {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default Login;