import { motion, PanInfo } from 'framer-motion';
import { Box, Text, Image, VStack } from '@chakra-ui/react';
import { User } from '../types';

interface SwipeCardProps {
  user: User;
  onSwipe: (direction: 'left' | 'right') => void;
}

export const SwipeCard = ({ user, onSwipe }: SwipeCardProps) => {
  const handleDragEnd = (event: any, info: PanInfo) => {
    const swipeThreshold = 100;
    const { offset } = info;

    if (Math.abs(offset.x) > swipeThreshold) {
      onSwipe(offset.x > 0 ? 'right' : 'left');
    }
  };

  return (
    <motion.div
      drag
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      dragElastic={0.7}
      onDragEnd={handleDragEnd}
      whileHover={{ scale: 1.02 }}
      style={{
        position: 'absolute',
        width: '100%',
        maxWidth: '400px',
        cursor: 'grab'
      }}
    >
      <Box
        bg="white"
        borderRadius="xl"
        boxShadow="xl"
        overflow="hidden"
        position="relative"
      >
        <Image
          src={user.photoURL || 'https://via.placeholder.com/400x500'}
          alt={user.name}
          width="100%"
          height="500px"
          objectFit="cover"
        />
        <Box
          position="absolute"
          bottom={0}
          left={0}
          right={0}
          bg="linear-gradient(to top, rgba(0,0,0,0.8), transparent)"
          p={6}
          color="white"
        >
          <VStack align="start" spacing={2}>
            <Text fontSize="2xl" fontWeight="bold">
              {user.name}
            </Text>
            <Text fontSize="md">
              Budget: ${user.preferences.budget.min} - ${user.preferences.budget.max}
            </Text>
            <Text fontSize="sm">
              {user.preferences.interests.join(', ')}
            </Text>
          </VStack>
        </Box>
      </Box>
    </motion.div>
  );
}; 