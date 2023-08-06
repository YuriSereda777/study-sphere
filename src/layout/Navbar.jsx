import { Flex, ListItem, UnorderedList } from "@chakra-ui/react";
import { navLinks } from "../data/navLinks";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <Flex
      as="nav"
      py="10px"
      alignItems="center"
      justifyContent="space-around"
      backgroundColor="white"
    >
      <img src={logo} height="100px" />
      <UnorderedList
        sx={{ display: "flex", gap: "15px", listStyle: "none" }}
        fontSize="20px"
      >
        {navLinks.map((link) => (
          <ListItem key={link.id}>
            <a href={`#${link.id}`}>{link.value}</a>
          </ListItem>
        ))}
      </UnorderedList>
    </Flex>
  );
};

export default Navbar;
