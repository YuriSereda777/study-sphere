import { Flex, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { navLinks } from "../data/navLinks";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <Flex
      as="nav"
      py="10px"
      alignItems="center"
      justifyContent="space-between"
      backgroundColor="white"
      px={{ base: "2em", sm: "4em", md: "6em", lg: "10em", xl: "14em" }}
      flexDirection={{ base: "column", lg: "row" }}
    >
      <img src={logo} height="100px" />
      <Flex
        as={motion.ul}
        display={{ base: "none", lg: "flex" }}
        listStyleType="none"
        fontSize="20px"
        flexDirection="row"
        gap="15px"
      >
        {navLinks.map((link) => (
          <Text
            key={link.id}
            as={motion.li}
            sx={{
              color: "gray.600",
              transition: "color 0.5s",
            }}
            _hover={{ color: "brand.500" }}
          >
            <a href={`#${link.id}`}>{link.value}</a>
          </Text>
        ))}
      </Flex>
    </Flex>
  );
};

export default Navbar;
