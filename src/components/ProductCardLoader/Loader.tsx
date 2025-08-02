import { Card, Center, Skeleton, Image } from '@mantine/core';
import logo from '../../assets/loader.svg'

const Loader = () => {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder w={310} h={384} pos={'relative'}>
      <Card.Section>
          <Skeleton height={276} width={276} mt={10} ml={15} data-testid="loader-skeleton"/>
        <Center pos={'absolute'} w={22} h={20} top={144} left={144}>
          <Image 
          src={logo} 
          width={22} 
          height={20} 
          style={{ opacity: 0.7 }} 
          alt="Loading"
          data-testid="loader-image"
          />
        </Center>
      </Card.Section>
    </Card>
  );
}

export default Loader;