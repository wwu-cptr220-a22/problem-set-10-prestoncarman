import { render, screen } from '@testing-library/react'
import App from './App'
import { MemoryRouter } from 'react-router-dom' // our router
import Button from './Components/Common/Button'
import Form from './Components/Common/Form'

test('Renders without errors', () => {
  render(<MemoryRouter initialEntries={['/']}><App /></MemoryRouter>)
  const textElement = screen.getByText(/Login Form/i)
  expect(textElement).toBeInTheDocument()
})

test('Renders button', () => {
    render(<Button title="Test Button" />)
    expect(screen.getAllByRole('button').length).toBe(1)
    expect(screen.getByText(/test button/i)).toBeInTheDocument()
})

// BasicTextFields ({ title, setPassword, setEmail, handleAction })
test('Renders form', () => {
    render(<Form title="Login" />)
    expect(screen.getAllByRole('button').length).toBe(1)
    expect(screen.getAllByText(/Login/i).length).toBe(2)
})