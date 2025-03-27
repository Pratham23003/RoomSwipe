import { Box, Heading, Text } from '@chakra-ui/react';
import { Layout } from '../components/Layout';

const Profile = () => {
  return (
    <Layout>
      <Box textAlign="center">
        <Heading size="xl" color="blue.500" mb={4}>
          Your Profile
        </Heading>
        <Text color="gray.600">
          Manage your preferences and information
        </Text>
      </Box>
    </Layout>
  );
};

export default Profile; 