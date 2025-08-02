import { Group, Text, Stack, Container } from '@mantine/core';
import CartPopup from '../CartModal/CartPopup';
import { CartItem } from '../../types';
import styles from './Header.module.scss'

interface HeaderProps {
  cartItems: CartItem[];
  onUpdateQuantity: (id: number, quantity: number) => void;
  isCartOpen: boolean;
  onCartToggle: () => void;
}

const Header: React.FC<HeaderProps> = ({ 
  cartItems, 
  onUpdateQuantity, 
  isCartOpen,
  onCartToggle
}) => {

  return (
    <Container size="xll" h="100%">
      <Group justify="space-between" h="100%">
        <Group gap="sm">
          <Stack gap={0} bg='var(--mantine-color-gray-1)' className={styles.header__logo}>
            <Text size="xl" fw={700} c="dark" pl='25px'>
              Vegatable
            </Text>
            <Text size='xl' className={styles.header__green}>
            SHOP
            </Text>

          </Stack>
        </Group>

       <CartPopup 
          isOpen={isCartOpen}
          onClose={onCartToggle} 
          cartItems={cartItems}
          onUpdateQuantity={onUpdateQuantity}
          />
      </Group>
    </Container>
  );
};

export default Header;