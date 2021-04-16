import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

test('renders a link', () => {
  render(<App />)
  const headerElement = screen.getByText(/shlack app/i)
  expect(headerElement).toBeInTheDocument()
})
