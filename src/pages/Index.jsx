import { Box, Container, Flex, Text, VStack, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Flex as="nav" bg="blue.500" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Text fontSize="xl" fontWeight="bold">MyApp</Text>
        <Box>
          <Link as={RouterLink} to="/" p={2} color="white">Home</Link>
          <Link as={RouterLink} to="/about" p={2} color="white">About</Link>
        </Box>
      </Flex>
      <Flex direction="column" justify="center" align="center" height="80vh">
        <VStack spacing={4}>
          <Text fontSize="2xl">Welcome to MyApp</Text>
          <Text>Start building your awesome app!</Text>
        </VStack>
      </Flex>
    </Container>
  );
};

export default Index;