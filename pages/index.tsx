import { Box, Button, Flex, Heading, Text, VStack } from '@chakra-ui/react';

export default function Home() {
  return (
    <Flex
      minH="100vh"
      direction="column"
      bg="gray.50"
      align="center"
      justify="center"
    >
      <Box
        bg="white"
        p={{ base: 6, md: 12 }}
        borderRadius="lg"
        boxShadow="lg"
        maxW="lg"
        w="full"
        textAlign="center"
      >
        <Heading
          as="h1"
          size="2xl"
          mb={4}
          color="brand.red"
          fontFamily="brand"
        >
          KMW Metalworks
        </Heading>
        <Text fontSize="xl" mb={6} color="gray.700">
          Precision Metalworking &amp; Tech Solutions<br />
          North West of Ireland
        </Text>
        <VStack spacing={4}>
          <Button
            size="lg"
            colorScheme="red"
            bg="brand.red"
            color="white"
            _hover={{ bg: "brand.redDark" }}
            fontFamily="brand"
            borderRadius="full"
          >
            Contact Us
          </Button>
          <Text fontSize="sm" color="gray.500">
            Modern. Skilled. Reliable.
          </Text>
        </VStack>
      </Box>
    </Flex>
  );
}
