import { render, screen, fireEvent } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import App from './main'

describe('Studio dashboard', () => {
  it('filters the priority inbox', () => {
    render(<App />)
    fireEvent.change(screen.getByLabelText('Filter priorities'), { target: { value: 'Safari' } })
    expect(screen.getByText('Investigate Safari layout shift')).toBeTruthy()
    expect(screen.queryByText('Unify billing webhook retries')).toBeNull()
  })
})
