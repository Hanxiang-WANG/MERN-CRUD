import { Button, Container, Flex, HStack, Text } from '@chakra-ui/react';
import React from 'react';
import { FaRegPlusSquare } from "react-icons/fa";
import { IoMoon } from "react-icons/io5";
import { LuSun } from "react-icons/lu";
import { Link } from 'react-router-dom';
import { useColorMode, useColorModeValue } from '../components/ui/color-mode';

const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode();

    return <Container maxW={"1140px"} py={4}>
        <Flex
            h={16}
            alignItems={'center'}
            justifyContent={'space-between'}
            flexDir={{ base: 'column', sm: 'row', }}
        >
            <Text
                fontSize={{ base: '22', sm: '28' }}
                fontWeight={'bold'}
                textTransform={'uppercase'}
                textAlign={'center'}
                bgGradient={"linear(to-r, #000000, #e74c3c)"}
            //bgClip={'text'}
            >
                <Link to={"/"}>Product Store</Link>
            </Text>

            <HStack spacing={2} alignItems={'center'}>
                <Link to={"/create"}>
                    <Button>
                        <FaRegPlusSquare fontSize={20} />
                    </Button>
                </Link>
                <Button onClick={toggleColorMode}>
                    {colorMode === "light" ? <IoMoon /> : <LuSun size="20" />}
                </Button>
            </HStack>
        </Flex>
    </Container>;
}

export default Navbar