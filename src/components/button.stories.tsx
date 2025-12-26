import type { ComponentProps } from "react";
import { fn, expect, within } from 'storybook/test'
import Button from './button'
import type { Meta, StoryObj } from "@storybook/react-vite";

type StoryProps = ComponentProps<typeof Button>

const meta: Meta<StoryProps> = {
  component: Button,
  argTypes: {
    variant: {
      options: ['primary', 'secondary'],
      control: {
        type: 'select'
      }
    }
  },
 args: {
  onClick: fn()
 }
}

export default meta

type Story = StoryObj<StoryProps>

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Text'
  },
  render: (args) => {
    return (
      <Button { ...args}/>
    )
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(
      canvas.getByRole("button", { name: 'Text' })
    ).toBeInTheDocument()
  }
}
