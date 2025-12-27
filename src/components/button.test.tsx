import {render, screen} from '@testing-library/react'
import { expect, test } from 'vitest'

import { composeStories } from '@storybook/react-vite'
import * as stories from './button.stories'

const { Primary } = composeStories(stories)

test('render button', () => {
  render(<Primary />)
  expect(screen.getByRole('button', { name: 'Text' })).toBeInTheDocument()
})