import {render, screen} from '@testing-library/react'
import { expect, test } from 'vitest'
import Button from './button'

test('render button', () => {
  render(<Button variant="primary">Text</Button>)
  expect(screen.getByRole('button', { name: 'Text' })).toBeInTheDocument()
})