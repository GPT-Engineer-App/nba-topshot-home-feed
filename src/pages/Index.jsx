import React, { useState, useEffect } from "react";
import { Box, Container, Heading, Text, VStack, HStack, Image, Badge, useColorModeValue } from "@chakra-ui/react";
import { FaBasketballBall } from "react-icons/fa";

const initialFeed = [
  { id: 1, type: "New Card", description: "LeBron James Dunk Highlight", price: "$200" },
  { id: 2, type: "Price Update", description: "Steph Curry 3-Pointer Card", price: "$180" },
];

const Index = () => {
  const [feed, setFeed] = useState(initialFeed);

  useEffect(() => {
    const interval = setInterval(() => {
      const newEntry = {
        id: feed.length + 1,
        type: "Popular Trade",
        description: `Random Player Action #${feed.length + 1}`,
        price: `$${Math.random() * 100 + 100}`,
      };
      setFeed((currentFeed) => [newEntry, ...currentFeed]);
    }, 5000);

    return () => clearInterval(interval);
  }, [feed.length]);

  const cardBg = useColorModeValue("white", "gray.700");

  

  return (
    <Container maxW="container.xl" py={5}>
      <VStack spacing={4} align="stretch">
        <Heading as="h1" size="xl" textAlign="center">
          NBA Top Shot Live Feed <FaBasketballBall />
        </Heading>
        {feed.map((item) => (
          <Box key={item.id} p={5} shadow="md" borderWidth="1px" bg={cardBg} borderRadius="md">
            <HStack justify="space-between">
              <VStack align="start">
                <Badge colorScheme="red" p={1} borderRadius="full">
                  {item.type}
                </Badge>
                <Text fontSize="xl" fontWeight="bold">
                  {item.description}
                </Text>
                <Text fontSize="md">Price: {item.price}</Text>
              </VStack>
              <Image borderRadius="full" boxSize="100px" src="https://images.unsplash.com/photo-1653191584476-9b7b47f9a8c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxOQkElMjBwbGF5ZXJ8ZW58MHx8fHwxNzE0NDMwNTYyfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="NBA Player" />
            </HStack>
          </Box>
        ))}
      </VStack>
    </Container>
  );
};

export default Index;
