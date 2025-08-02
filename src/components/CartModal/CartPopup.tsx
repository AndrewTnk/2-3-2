import React from 'react';
import { Text, Group, Image, Table, Flex, Box} from '@mantine/core';
import { CartItem } from '../../types';
import CartButton from '../ui/buttons/CartButton/CartButton';
import Empty from '../../assets/cart_empty.svg'
import InputButton from '../ui/buttons/InputButton/InputButton';
import styles from './CartPopup.module.scss'

function EmptyCard() {
    return <img src={Empty} alt='emptycart'></img>
}

export interface CartPopupProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (id: number, quantity: number) => void;
}

const CartPopup: React.FC<CartPopupProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity
}) => {
  const totalPrice = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <Box className={styles.cartPopup__container}>
      <CartButton 
        cartItems={cartItems} 
        onCartClick={() => onClose()}
      />

      {isOpen && (
        <Box className={styles.cartPopup__main}>
          {cartItems.length === 0 ? (
            <Group className={styles.cartPopup__empty}>
              <EmptyCard />
              <Text c='dimmed'>Your cart is empty!</Text>
            </Group>
        ) : (
          <Box>
              <Table w={400} 
              style={{
                flexWrap: 'nowrap'
              }}
              >
                  <Table.Tbody>
                    {cartItems.map((item) => (
                      <Table.Tr key={item.id}>
                        <Table.Td w={64}>
                            <Image
                              src={item.image}
                              alt={item.name}
                              w={64}
                              h={64}
                              fit="cover"
                            />
                        </Table.Td>
                        <Group justify='space-between'
                        style={{
                          height: '80px'
                        }}
                        >
                        <Table.Td >
                          <Group justify='flex-start' align="center" gap={5}>
                            <Text fw={600} size="sm">
                              {item.name.split('-')[0]} 
                            </Text>
                            <Text fw={400} c='dimmed' size='xs'>
                              {item.name.split('-')[1]} 
                            </Text>
                          </Group>
                          <Text size="md" fw={600}>${item.price.toFixed(2)}</Text>
                        </Table.Td>
                        </Group>
                        <Table.Td>
                          <Flex justify='flex-end'>
                            <InputButton 
                              value={item.quantity}
                              onChange={(newValue) => onUpdateQuantity(item.id, newValue)}
                            />
                          </Flex>
                        </Table.Td>
                      </Table.Tr>
                    ))}
                  </Table.Tbody>
                  
                  <Table.Tfoot>
                    <Table.Tr></Table.Tr>
                      <Table.Td colSpan={2}>
                      <Text size="md" fw={600}>
                        Total
                      </Text>
                      </Table.Td>
                      <Table.Td>
                        <Flex justify='flex-end'>
                          <Text size="xl" fw={700} c="black">
                            ${totalPrice.toFixed(2)}
                          </Text>
                        </Flex>
                      </Table.Td>
                  </Table.Tfoot>
                </Table>
            </Box>
          )}
        </Box>
      )}
    </Box>
  );
};

export default CartPopup;