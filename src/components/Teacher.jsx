import { Avatar, Flex, Heading, Text } from "@chakra-ui/react";

const Teacher = ({ image, firstName, lastName, title, description }) => {
  return (
    <Flex direction="column" alignItems="center" gap="5px">
      <Avatar
        size={{ base: "xl", lg: "2xl" }}
        name={`${firstName} ${lastName}`}
        src={image}
      />
      <Heading as="h4" fontSize="20px" color="gray.600">
        {firstName} {lastName}
      </Heading>
      <Heading
        as="h6"
        fontSize="16px"
        fontWeight={500}
        color="gray.600"
        mb="5px"
      >
        {title}
      </Heading>
      <Text width="2xs" textAlign="center" color="gray.500">
        {description}
      </Text>
    </Flex>
  );
};

export default Teacher;
