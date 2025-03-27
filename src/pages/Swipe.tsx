import { Box, Heading, Text } from '@chakra-ui/react';
import { Layout } from '../components/Layout';

const Swipe = () => {
  return (
    <Layout>
      <Box textAlign="center">
        <Heading size="xl" color="blue.500" mb={4}>
          Find Your Perfect Roommate
        </Heading>
        <Text color="gray.600">
          Swipe right to like, left to pass
        </Text>
      </Box>
    </Layout>
  );
};

export default Swipe; 