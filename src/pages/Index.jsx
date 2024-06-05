import { Container, Text, VStack, Box, Flex, Spacer, IconButton } from "@chakra-ui/react";
import { FaHome, FaInfoCircle } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex as="nav" bg="blue.500" color="white" p={4} align="center">
        <Box p="2">
          <Text fontSize="xl" fontWeight="bold">MyApp</Text>
        </Box>
        <Spacer />
        <Box>
          <IconButton aria-label="Home" icon={<FaHome />} size="lg" variant="ghost" color="white" />
          <IconButton aria-label="About" icon={<FaInfoCircle />} size="lg" variant="ghost" color="white" />
        </Box>
      </Flex>
      <Container centerContent maxW="container.md" height="80vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
        <VStack spacing={4}>
          <Text fontSize="2xl">Your Blank Canvas</Text>
          <Text>Chat with the agent to start making edits.</Text>
        </VStack>
      </Container>
    </Container>
  );
};

export default Index;