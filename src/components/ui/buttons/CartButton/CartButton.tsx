import { ActionIcon, Group, Badge, Text } from "@mantine/core"
import { IconShoppingCart } from "@tabler/icons-react"
import { CartItem } from "../../../../types";
import styles from './CartButton.module.scss'

export interface CartButtonProps {
  cartItems: CartItem[];
  onCartClick: () => void;
}

const CartButton: React.FC<CartButtonProps> = ({ cartItems, onCartClick }) => {
    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    

    return (        
    <ActionIcon.Group>
          <ActionIcon
            id="cart-button"
            size="xl"
            color="#54B46A"
            onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      onCartClick();
                    }}
            className={styles.cartButton}
          >
            <Group gap="sm" justify='center'>
                {totalItems > 0 && (
                  <Badge
                    size="xs"
                    color="white"
                    className={styles.cartButton__badge}
                  >
                    {totalItems}
                  </Badge>
                )}
                <Text size="lg" fw={700} c="white">
                  Cart
                </Text>
                <IconShoppingCart size={20} />
            </Group>
          </ActionIcon>
    </ActionIcon.Group>
    )
}

export default CartButton;