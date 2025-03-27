import { Box, Container, Flex, IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { ReactNode } from 'react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue('gray.50', 'gray.900');
  const bgImage = useColorModeValue(
    'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)',
    'linear-gradient(135deg, #1a202c 0%, #2d3748 100%)'
  );

  return (
    <Flex
      minH="100vh"
      bg={bgColor}
      bgImage={bgImage}
      bgBlendMode="overlay"
      position="relative"
      overflow="hidden"
      _before={{
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `radial-gradient(circle at 25px 25px, ${useColorModeValue('rgba(0,0,0,0.05)', 'rgba(255,255,255,0.05)')} 2%, transparent 0%), radial-gradient(circle at 75px 75px, ${useColorModeValue('rgba(0,0,0,0.05)', 'rgba(255,255,255,0.05)')} 2%, transparent 0%)`,
        backgroundSize: '100px 100px',
        animation: 'backgroundMove 20s linear infinite',
        zIndex: 0,
      }}
      _after={{
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: 'url("https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: colorMode === 'dark' ? 0.1 : 0.05,
        zIndex: 0,
      }}
      sx={{
        '@keyframes backgroundMove': {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '100px 100px' },
        },
      }}
    >
      <IconButton
        aria-label={`Switch to ${colorMode === 'light' ? 'dark' : 'light'} mode`}
        icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
        onClick={toggleColorMode}
        position="fixed"
        top={4}
        right={4}
        zIndex={2}
        colorScheme={colorMode === 'light' ? 'gray' : 'yellow'}
        size="lg"
        borderRadius="full"
        boxShadow="lg"
        transition="all 0.3s"
        _hover={{
          transform: 'scale(1.1)',
          boxShadow: 'xl',
        }}
      />
      <Container maxW="container.md" py={8} position="relative" zIndex={1}>
        <Box
          bg={useColorModeValue('white', 'gray.800')}
          p={8}
          borderRadius="2xl"
          boxShadow="xl"
          w="100%"
          backdropFilter="blur(10px)"
          bgGradient={useColorModeValue(
            'linear(to-br, white, gray.50)',
            'linear(to-br, gray.800, gray.900)'
          )}
          transition="all 0.3s"
          _hover={{
            transform: 'translateY(-2px)',
            boxShadow: '2xl',
          }}
        >
          {children}
        </Box>
      </Container>
    </Flex>
  );
}; 