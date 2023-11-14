import { Text } from "@chakra-ui/react";

const ContactFormError = ({ text }) => {
  return (
    <Text mt={1} color="white">
      {text}
    </Text>
  );
};

export default ContactFormError;
