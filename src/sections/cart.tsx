import {
  Heading,
  Text,
  VStack,
  useColorModeValue,
  useColorMode,
  HStack,
  Divider,
  Button,
} from "@chakra-ui/react";

const Cart = () => {
  const { toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue("gray.50", "whiteAlpha.80");

  const secondaryTextColor = useColorModeValue("gray.600", "gray.400");
  return (
    <VStack
      w="full"
      h="full"
      p={10}
      spacing={10}
      alignItems={"flex-start"}
      bg={bgColor}
    >
      <VStack spacing={3} alignItems="flex-start">
        <Heading size="2xl">Your cart</Heading>
        <Text>
          If the price is too hard on your eyes,{" "}
          <Button onClick={toggleColorMode} variant="link" colorScheme="black">
            try changing the theme.
          </Button>
        </Text>
      </VStack>
      <VStack spacing={4} alignItems="stretch" w="full">
        <HStack justifyContent="space-between">
          <Text color={secondaryTextColor}>Subtotal</Text>
          <Heading size="sm">$119.00</Heading>
        </HStack>
        <HStack justifyContent="space-between">
          <Text color={secondaryTextColor}>Shipping</Text>
          <Heading size="sm">$19.99</Heading>
        </HStack>
        <HStack justifyContent="space-between">
          <Text color={secondaryTextColor}>Taxes (estimated)</Text>
          <Heading size="sm">$23.80</Heading>
        </HStack>
      </VStack>
      <Divider />
      <HStack justifyContent="space-between" w="full">
        <Text color={secondaryTextColor}>Total</Text>
        <Heading size="lg">$162.79</Heading>
      </HStack>
    </VStack>
  );
};

export default Cart;
