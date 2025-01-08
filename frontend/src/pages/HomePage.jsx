import React, { useEffect } from 'react';
import { Container, VStack, Text, SimpleGrid } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useProductStore } from '@/store/product';
import { use } from 'react';

const HomePage = () => {
    const { fetchProducts, products } = useProductStore();

    useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);
    console.log(products);

    return (
        <Container maxW='container.xl' py={12}>
            <VStack spacing={8}>
                <Text
                    fontSize={"30"}
                    fontWeight={'bold'}
                    textAlign={'center'}
                    bgGradient={"linear(to-r, #000000, #e74c3c)"}
                //bgClip={'text'}
                >
                    Current Products
                </Text>

                <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10} w='full'>

                </SimpleGrid>

                <Text fontSize="xl" textAlign={'center'} fontWeight={'bold'} color='gray.500'>
                    No products found{' '}
                    <Link to={'/create'}>
                        <Text as='span' color='blue.500' _hover={{ textDecoration: 'underline' }}>
                            Create a new product!
                        </Text>
                    </Link>
                </Text>
            </VStack>
        </Container>
    )
}

export default HomePage