import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { render } from '../../test/utils';
import ProductCard from './ProductCard';
import { describe, expect, it, vi } from 'vitest';

describe('ProductCard', () => {

    const mockProduct = {
        id: 1,
        name: 'Tomato-1kg',
        price: 2.99,
        image:'tomato.jpg'
    }

    const mockAddToCart = vi.fn();

    it('отображение цены и названия товара', () => {
        render(<ProductCard product={mockProduct} onAddToCart={mockAddToCart} />)
        expect(screen.getByText('Tomato')).toBeInTheDocument()
        expect(screen.getByText('1kg')).toBeInTheDocument()
        expect(screen.getByText('$2.99')).toBeInTheDocument()
    })

    it('вызывает onAddToCart с правильными данными', async () => {
        render(<ProductCard product={mockProduct} onAddToCart={mockAddToCart} />)

        await userEvent.click(screen.getByText('Add to Cart'));
        expect(mockAddToCart).toHaveBeenCalledWith(mockProduct, 1)
    })
})