import React from 'react';
import { Container, Text, Grid } from '@mantine/core';
import { Product } from '../../types';
import ProductCard from '../ProductCard/ProductCard';
import Loader from '../ProductCardLoader/Loader';

interface ProductGridProps {
  products: Product[];
  loading: boolean;
  onAddToCart: (product: Product, quantity: number) => void;
}

const ProductGrid: React.FC<ProductGridProps> = ({ products, loading, onAddToCart }) => {
  return (
    <Container size="xl" py="xl">
      <Text size='xl' fw={700} pb={25} fz={32}>Catalog</Text>
        <Grid>
          {loading ? 
            Array(20).fill(0).map((_, index) => (
                <Grid.Col key={`skeleton-${index}`} span={{ base: 12, sm: 6, md: 4, lg: 3 }}>
                      <Loader />
                </Grid.Col>
              )) : (products.map((product) => (
                <Grid.Col key={product.id} span={{ base: 12, sm: 6, md: 4, lg: 3 }}>
                  <ProductCard product={product} onAddToCart={onAddToCart}/>
                </Grid.Col>)
              ))
            }
      </Grid> 
    </Container>

  );
};

export default ProductGrid;