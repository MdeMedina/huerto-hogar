// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

// Cambia 'test' por 'it'
it('renders learn react link', () => {
  render(<App />);
  // Buscamos un elemento que probablemente no esté en tu App.js real,
  // ajusta esto a algo que sí exista en tu App.js si el test sigue fallando
  // por no encontrar el texto "learn react".
  // Por ejemplo, podrías buscar el título principal si lo tienes:
  // const linkElement = screen.getByText(/Bienvenido a HuertoHogar/i);
  const linkElement = screen.getByText(/learn react/i); // <-- Si este texto no existe en tu App.js, cámbialo!
  expect(linkElement).not.toBeNull(); // Usamos not.toBeNull() como antes
});