import { screen } from '@testing-library/react';
import { render } from '../../test/utils';
import CartPopup from './CartPopup';
import { CartItem } from '../../types';
import { describe, expect, it } from 'vitest';

describe('CartPopup', () => {
    const mockItems: CartItem[] = [{
        id: 1,
        name: 'Tomato-1kg',
        price: 2.99,
        image:'tomato.jpg',
        quantity: 2
    }]

    it('отображает пустую корзину', () => {
        render(<CartPopup isOpen={true} onClose={() => {}} cartItems={[]} onUpdateQuantity={() => {}} />)
        expect(screen.getByText('Your cart is empty!')).toBeInTheDocument()
    })

    it('отображает товары в корзине', () => {
        render(<CartPopup isOpen={true} onClose={() => {}} cartItems={mockItems} onUpdateQuantity={() => {}} />)
        expect(screen.getByText('Tomato')).toBeInTheDocument()
        expect(screen.getByText('1kg')).toBeInTheDocument()
        expect(screen.getByText('$2.99')).toBeInTheDocument()
    })
})