import { Flex, Text } from "@chakra-ui/react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Flex
      justifyContent="center"
      gap={1}
      py="10px"
      fontSize="20px"
      fontWeight={500}
      color="gray.600"
    >
      Copyright © {currentYear}
      <Text color="brand.500"> StudySphere</Text>
    </Flex>
  );
};

export default Footer;
