import { screen } from '@testing-library/react';
import ProductGrid from './ProductGrid';
import { Product } from '../../types';
import { render } from '../../test/utils';
import { describe, expect, it } from 'vitest';

describe('ProducTGrid', () => {
    const mockProducts: Product[] = [{
        id: 1,
        name: 'Tomato-1kg',
        price: 2.99,
        image: 'tomato.jpg',
    }];

    it('отображает лоадер при загрузке', () => {
        render(<ProductGrid products={[]} loading={true} onAddToCart={() => {}} />)
        expect(screen.getAllByTestId('loader-skeleton').length).toBeGreaterThan(0)
    })

        it('отображает товары после загрузки', () => {
        render(<ProductGrid products={mockProducts} loading={false} onAddToCart={() => {}} />)
        expect(screen.getByText('Tomato')).toBeInTheDocument()
    })
})