import { screen } from '@testing-library/react';
import { render } from '../../../../test/utils';
import userEvent from '@testing-library/user-event';
import CartButton from './CartButton';
import { describe, it, expect, vi } from 'vitest';

describe('CartButton', () => {
    const mockItems = [{
        id: 1, 
        name: 'Tomato-1kg',
        price: 2.99,
        image: 'tomato.jpg',
        quantity: 2
    }, {
        id: 2, 
        name: 'Potato-2kg',
        price: 1.99,
        image: 'potato.jpg',
        quantity: 3
    }];

    it('рендер с уччетом колличества товара в корзине', () => {
        render(<CartButton cartItems={mockItems} onCartClick={() => {}} />)
        expect(screen.getByText('5')).toBeInTheDocument()
        expect(screen.getByText('Cart')).toBeInTheDocument()
    });

    it('вызывает onCartClick при нажатии', async() => {
        const user = userEvent.setup();
        const mockClick = vi.fn();
        render(<CartButton cartItems={mockItems} onCartClick={mockClick} />)
        await user.click(screen.getByRole('button'))
        expect(mockClick).toHaveBeenCalled();
    })

    it('значек не показывается когда корзина пуста', () => {
        render(<CartButton cartItems={[]} onCartClick={() => {}} />)
        expect(screen.queryByTestId('cart-badge')).not.toBeInTheDocument()
    })
})