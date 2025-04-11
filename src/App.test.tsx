import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
