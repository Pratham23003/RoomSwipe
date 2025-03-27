import { useState } from 'react';
import { useNavigate, Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
  Heading,
  Text,
  Link,
  useToast,
  InputGroup,
  InputRightElement,
  IconButton,
  Container,
  Image,
  Flex,
  Divider,
  HStack,
  useColorModeValue,
  ScaleFade,
  Fade,
  SlideFade,
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon, EmailIcon, LockIcon } from '@chakra-ui/icons';
import { useAuth } from '../context/AuthContext';
import { Layout } from '../components/Layout';
import { FaGoogle, FaGithub } from 'react-icons/fa';

const Login = () => {
  console.log('Login component rendering');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const toast = useToast();

  const bgColor = useColorModeValue('white', 'gray.800');
  const textColor = useColorModeValue('gray.600', 'gray.200');
  const borderColor = useColorModeValue('gray.200', 'gray.600');
  const inputBg = useColorModeValue('white', 'gray.700');
  const inputBorder = useColorModeValue('gray.200', 'gray.600');
  const inputHoverBorder = useColorModeValue('brand.400', 'brand.300');
  const inputFocusBorder = useColorModeValue('brand.500', 'brand.400');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await signIn(email, password);
      navigate('/swipe');
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to sign in. Please check your credentials.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Layout>
      <Container maxW="container.sm" py={8}>
        <VStack spacing={8} align="stretch">
          <ScaleFade in={true} initialScale={0.9}>
            <Box textAlign="center">
              <Image
                src="https://img.icons8.com/color/96/000000/home.png"
                alt="RoomSwipe Logo"
                mx="auto"
                mb={4}
                filter="drop-shadow(0 0 8px rgba(0,0,0,0.1))"
                transition="all 0.3s"
                _hover={{
                  transform: 'scale(1.1) rotate(5deg)',
                }}
              />
              <Heading
                size="xl"
                bgGradient="linear(to-r, brand.400, accent.400)"
                bgClip="text"
                mb={2}
              >
                Welcome Back
              </Heading>
              <Text color={textColor} fontSize="lg">
                Find your perfect roommate match
              </Text>
            </Box>
          </ScaleFade>

          <Fade in={true} delay={0.2}>
            <Box
              p={8}
              bg={bgColor}
              boxShadow="xl"
              borderRadius="2xl"
              border="1px"
              borderColor={borderColor}
              backdropFilter="blur(10px)"
            >
              <form onSubmit={handleSubmit}>
                <VStack spacing={6}>
                  <SlideFade in={true} offsetY={20} delay={0.3}>
                    <FormControl isRequired>
                      <FormLabel>Email</FormLabel>
                      <InputGroup>
                        <Input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Enter your email"
                          size="lg"
                          borderRadius="lg"
                          bg={inputBg}
                          borderColor={inputBorder}
                          _hover={{ borderColor: inputHoverBorder }}
                          _focus={{
                            borderColor: inputFocusBorder,
                            boxShadow: `0 0 0 1px ${inputFocusBorder}`,
                          }}
                          pl={10}
                          transition="all 0.2s"
                        />
                        <InputRightElement width="4rem" h="100%">
                          <EmailIcon color="gray.400" />
                        </InputRightElement>
                      </InputGroup>
                    </FormControl>
                  </SlideFade>

                  <SlideFade in={true} offsetY={20} delay={0.4}>
                    <FormControl isRequired>
                      <FormLabel>Password</FormLabel>
                      <InputGroup size="lg">
                        <Input
                          type={showPassword ? 'text' : 'password'}
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          placeholder="Enter your password"
                          borderRadius="lg"
                          bg={inputBg}
                          borderColor={inputBorder}
                          _hover={{ borderColor: inputHoverBorder }}
                          _focus={{
                            borderColor: inputFocusBorder,
                            boxShadow: `0 0 0 1px ${inputFocusBorder}`,
                          }}
                          pl={10}
                          transition="all 0.2s"
                        />
                        <InputRightElement width="4rem">
                          <IconButton
                            aria-label={showPassword ? 'Hide password' : 'Show password'}
                            icon={showPassword ? <ViewOffIcon /> : <ViewIcon />}
                            onClick={() => setShowPassword(!showPassword)}
                            variant="ghost"
                            colorScheme="brand"
                            transition="all 0.2s"
                            _hover={{
                              transform: 'scale(1.1)',
                            }}
                          />
                        </InputRightElement>
                        <Box position="absolute" left={3} top="50%" transform="translateY(-50%)">
                          <LockIcon color="gray.400" />
                        </Box>
                      </InputGroup>
                    </FormControl>
                  </SlideFade>

                  <SlideFade in={true} offsetY={20} delay={0.5}>
                    <Button
                      type="submit"
                      size="lg"
                      width="100%"
                      isLoading={isLoading}
                      loadingText="Signing in..."
                      borderRadius="lg"
                      bgGradient="linear(to-r, brand.400, accent.400)"
                      _hover={{
                        bgGradient: 'linear(to-r, brand.500, accent.500)',
                        transform: 'translateY(-2px)',
                        boxShadow: 'lg',
                      }}
                      transition="all 0.2s"
                    >
                      Sign In
                    </Button>
                  </SlideFade>

                  <SlideFade in={true} offsetY={20} delay={0.6}>
                    <Box textAlign="center">
                      <Link
                        color="brand.400"
                        href="#"
                        fontSize="sm"
                        _hover={{ color: 'brand.500' }}
                        transition="all 0.2s"
                      >
                        Forgot your password?
                      </Link>
                    </Box>
                  </SlideFade>

                  <SlideFade in={true} offsetY={20} delay={0.7}>
                    <VStack w="100%" spacing={4}>
                      <HStack w="100%">
                        <Divider borderColor={borderColor} />
                        <Text fontSize="sm" color={textColor} whiteSpace="nowrap" px={4}>
                          or continue with
                        </Text>
                        <Divider borderColor={borderColor} />
                      </HStack>

                      <HStack spacing={4} w="100%">
                        <Button
                          w="50%"
                          variant="outline"
                          leftIcon={<FaGoogle />}
                          borderRadius="lg"
                          borderColor={borderColor}
                          _hover={{
                            bg: useColorModeValue('gray.50', 'gray.700'),
                            transform: 'translateY(-2px)',
                            boxShadow: 'md',
                          }}
                          transition="all 0.2s"
                        >
                          Google
                        </Button>
                        <Button
                          w="50%"
                          variant="outline"
                          leftIcon={<FaGithub />}
                          borderRadius="lg"
                          borderColor={borderColor}
                          _hover={{
                            bg: useColorModeValue('gray.50', 'gray.700'),
                            transform: 'translateY(-2px)',
                            boxShadow: 'md',
                          }}
                          transition="all 0.2s"
                        >
                          GitHub
                        </Button>
                      </HStack>
                    </VStack>
                  </SlideFade>
                </VStack>
              </form>
            </Box>
          </Fade>

          <SlideFade in={true} offsetY={20} delay={0.8}>
            <Flex justify="center" align="center" gap={2}>
              <Text color={textColor}>Don't have an account?</Text>
              <Link
                as={RouterLink}
                to="/register"
                color="brand.400"
                fontWeight="semibold"
                _hover={{
                  textDecoration: 'none',
                  color: 'brand.500',
                  transform: 'translateY(-1px)',
                }}
                transition="all 0.2s"
              >
                Sign up
              </Link>
            </Flex>
          </SlideFade>
        </VStack>
      </Container>
    </Layout>
  );
};

export default Login; 