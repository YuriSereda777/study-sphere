import { Text } from "@chakra-ui/react";

const ContactFormError = ({ text }) => {
  return (
    <Text mt={1} color="gray.200">
      {text}
    </Text>
  );
};

export default ContactFormError;
