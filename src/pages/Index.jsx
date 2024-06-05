import { Box, Container, Flex, Text, VStack, HStack, Link, Spacer, IconButton } from "@chakra-ui/react";
import { FaHome, FaInfoCircle } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Flex as="nav" bg="blue.500" color="white" p={4} borderRadius="md" align="center">
        <HStack spacing={4}>
          <IconButton aria-label="Home" icon={<FaHome />} size="lg" variant="ghost" color="white" />
          <Link href="/" fontSize="xl" fontWeight="bold">Home</Link>
          <Link href="/about" fontSize="xl" fontWeight="bold">About</Link>
        </HStack>
        <Spacer />
        <HStack spacing={4}>
          <IconButton aria-label="Info" icon={<FaInfoCircle />} size="lg" variant="ghost" color="white" />
        </HStack>
      </Flex>
      <Box mt={8}>
        <VStack spacing={4}>
          <Text fontSize="2xl">Your Blank Canvas</Text>
          <Text>Chat with the agent to start making edits.</Text>
        </VStack>
      </Box>
    </Container>
  );
};

export default Index;