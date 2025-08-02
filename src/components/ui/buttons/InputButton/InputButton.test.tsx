import { screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import { render } from "../../../../test/utils";
import { describe, expect, it, vi } from 'vitest';
import InputButton from "./InputButton";

describe('InputButton', () => {
    const mockChange = vi.fn();

    it('отображает начальное значение', () => {
        render(<InputButton value={1} onChange={mockChange} />)
        expect(screen.getByText('1')).toBeInTheDocument()
    })

    it('увеличивает значение при клике на +', async() => {
        render(<InputButton value={1} onChange={mockChange} />)

        await userEvent.click(screen.getAllByRole('button')[1])
        expect(mockChange).toHaveBeenCalledWith(2)
    })

    it('не уменьшает значение меньше 1', async () => {
        render(<InputButton value={1} onChange={mockChange} />)

        await userEvent.click(screen.getAllByRole('button')[0])
        expect(mockChange).not.toHaveBeenCalledWith()
    })
})