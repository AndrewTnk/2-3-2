import { useState, useEffect } from 'react';
import { AppShell} from '@mantine/core';
import { Product, CartItem } from './types';
import Header from './components/Header/Header';
import ProductGrid from './components/ProductGrid/ProductGrid';

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch('https://res.cloudinary.com/sivadass/raw/upload/v1535817394/json/products.json');
        
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        
        const data = await response.json();
        console.log('Fetched data:', data);
        setProducts(data.products || data || []);
      } catch (err) {
        console.error('Error fetching products:', err);
        setError(err instanceof Error ? err.message : 'Failed to load products');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);


  const handleAddToCart = (product: Product, quantity: number) => {
    setCartItems(prev => {
      const existingItem = prev.find(item => item.id === product.id);
      
      if (existingItem) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [...prev, { ...product, quantity }];
      }
    });
  };

  const handleUpdateQuantity = (id: number, quantity: number) => {
    if (quantity <= 0) {
      return;
    }
    
    setCartItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  return (
    <AppShell
      header={{ height: 59 }}
      padding={0}
    >
      <AppShell.Header>
        <Header 
          cartItems={cartItems} 
          onUpdateQuantity={handleUpdateQuantity}
          isCartOpen={isCartOpen}
          onCartToggle={() => setIsCartOpen(!isCartOpen)}
        />
      </AppShell.Header>

      <AppShell.Main 
      style={{
        backgroundColor: '#F7F7F7'
      }}
      >
      <ProductGrid 
        products={products} 
        loading={loading}
        onAddToCart={handleAddToCart} 
      />
      </AppShell.Main>
    </AppShell>
  );
}

export default App;