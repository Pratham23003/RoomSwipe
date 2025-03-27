import { Box, Heading, Text } from '@chakra-ui/react';
import { Layout } from '../components/Layout';

const Matches = () => {
  return (
    <Layout>
      <Box textAlign="center">
        <Heading size="xl" color="blue.500" mb={4}>
          Your Matches
        </Heading>
        <Text color="gray.600">
          Connect with potential roommates
        </Text>
      </Box>
    </Layout>
  );
};

export default Matches; 