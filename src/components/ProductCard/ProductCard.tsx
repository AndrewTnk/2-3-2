import React, { useState } from 'react';
import { Card, Image, Text, Button, Group, Stack } from '@mantine/core';
import { IconShoppingCart } from '@tabler/icons-react';
import { Product } from '../../types';
import InputButton from '../ui/buttons/InputButton/InputButton';
import styles from './ProductCard.module.scss'

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product, quantity: number) => void;
}


const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart}) => {
  const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);

  function nameAndWeight(object: { name: string; }) {
    return object.name.split('-');
}

  const handleAddToCart = async () => {
    setIsAdding(true);
    onAddToCart(product, quantity);
    
    setTimeout(() => {
      setIsAdding(false);
    }, 1000);
};

  return (
      <Card 
        shadow="sm" 
        padding="lg" 
        radius="md" 
        withBorder
        className={styles.card__container}
      >
        <Card.Section>
          <Image
            src={product.image}
            height={276}
            alt={product.name}
            fit="cover"
          />
        </Card.Section>

        <Stack gap={20}>
          <Group justify='space-between'>
            <Group justify='flex-start' align="center" gap={5}>
              <Text fw={600} size="lg">
                {(nameAndWeight(product))[0]}
              </Text>
              <Text fw={400} c='dimmed' size='sm'>
                {(nameAndWeight(product))[1]}
              </Text>
            </Group>
              <InputButton 
              value={quantity}
              onChange={setQuantity}
              />
        </Group>
        <Group>
            <Text size="xl" fw={600}>
              $ {product.price.toFixed(2)}
            </Text>
            
            <Button
              color="#E7FAEB"
              rightSection={<IconShoppingCart size={16} />}
              onClick={handleAddToCart}
              loading={isAdding}
              className={styles.card__addbutton}
            >
              {isAdding ? 'Adding...' : 'Add to Cart'}
            </Button>
          </Group>
        </Stack>
      </Card>
)}

export default ProductCard;