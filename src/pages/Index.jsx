import React, { useState } from "react";
import { Box, Heading, Text, Image, Button, Stack, Input, Grid, GridItem, Link } from "@chakra-ui/react";
import { FaArrowUp, FaComment, FaExternalLinkAlt } from "react-icons/fa";

const products = [
  {
    id: 1,
    name: "Product 1",
    description: "This is a sample product.",
    upvotes: 100,
    comments: 25,
    maker: "John Doe",
    url: "#",
    image: "https://images.unsplash.com/photo-1468495244123-6c6c332eeece?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwcHJvZHVjdHxlbnwwfHx8fDE3MDk4MDE0MDF8MA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 2,
    name: "Product 2",
    description: "Another amazing product.",
    upvotes: 80,
    comments: 15,
    maker: "Jane Smith",
    url: "#",
    image: "https://images.unsplash.com/photo-1697636979792-fb057f6cbe8d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwZ2FkZ2V0fGVufDB8fHx8MTcwOTgwMTQwMXww&ixlib=rb-4.0.3&q=80&w=1080",
  },
  // Add more sample products...
];

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter((product) => product.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <Box maxWidth="800px" margin="auto" padding={4}>
      <Heading as="h1" size="xl" marginBottom={4}>
        ProductHunt Clone
      </Heading>
      <Input placeholder="Search products..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} marginBottom={8} />
      <Grid templateColumns="repeat(auto-fit, minmax(300px, 1fr))" gap={6}>
        {filteredProducts.map((product) => (
          <GridItem key={product.id}>
            <Box borderWidth={1} borderRadius="lg" padding={4}>
              <Image src={product.image} alt={product.name} marginBottom={4} />
              <Heading as="h2" size="md" marginBottom={2}>
                {product.name}
              </Heading>
              <Text marginBottom={4}>{product.description}</Text>
              <Stack direction="row" align="center" marginBottom={4}>
                <Button leftIcon={<FaArrowUp />} variant="ghost">
                  {product.upvotes}
                </Button>
                <Button leftIcon={<FaComment />} variant="ghost">
                  {product.comments}
                </Button>
              </Stack>
              <Text marginBottom={2}>
                Made by <strong>{product.maker}</strong>
              </Text>
              <Link href={product.url} isExternal>
                <Button rightIcon={<FaExternalLinkAlt />}>Visit Product</Button>
              </Link>
            </Box>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export default Index;
