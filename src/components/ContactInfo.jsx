import { Flex, Icon, Text } from "@chakra-ui/react";
import { FaLocationDot, FaPhone } from "react-icons/fa6";

const ContactInfo = () => {
  return (
    <>
      <Flex
        direction="row"
        alignItems="center"
        gap="6px"
        mt="20px"
        color="gray.200"
        fontSize="16px"
      >
        <Icon as={FaLocationDot} />
        <Text>123 Elm Street, ST 45678 United States</Text>
      </Flex>
      <Flex
        direction="row"
        alignItems="center"
        gap="6px"
        mt="10px"
        color="gray.200"
        fontSize="16px"
      >
        <Icon as={FaPhone} />
        <Text>(555) 123-4567</Text>
      </Flex>
    </>
  );
};

export default ContactInfo;
