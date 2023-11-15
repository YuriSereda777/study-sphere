import {
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
  Flex,
  Icon,
  Avatar,
} from "@chakra-ui/react";
import { FiBook, FiClock } from "react-icons/fi";
import { LuUsers2 } from "react-icons/lu";

const Course = ({
  title,
  image,
  lessons,
  hours,
  students,
  instructorName,
  instructorImage,
}) => {
  return (
    <Card maxW="sm">
      <CardBody>
        <Image
          src={image}
          alt="Green double couch with wooden legs"
          h={230}
          w={350}
          borderRadius="lg"
        />
        <Stack
          mt="5"
          spacing="2"
          color="gray.600"
          fontSize={{ base: "15px", md: "17px" }}
        >
          <Flex
            direction="row"
            justifyContent="space-between"
            gap={{ base: "1", lg: "3" }}
            flexWrap="wrap"
          >
            <Flex direction="row" alignItems="center" gap="5px">
              <Icon as={FiBook} />
              <Text>{lessons} Lessons</Text>
            </Flex>
            <Flex direction="row" alignItems="center" gap="5px">
              <Icon as={LuUsers2} />
              <Text>{students} Students</Text>
            </Flex>
            <Flex direction="row" alignItems="center" gap="5px">
              <Icon as={FiClock} />
              <Text>{hours} Hours</Text>
            </Flex>
          </Flex>
          <Heading
            size={{ base: "sm", md: "md" }}
            fontWeight={500}
            color="gray.600"
          >
            {title}
          </Heading>
        </Stack>
      </CardBody>
      <Divider color="gray.300" />
      <CardFooter py={3}>
        <Flex flex="1" gap="1" alignItems="center" flexWrap="wrap">
          <Avatar
            size={{ base: "xs", md: "sm" }}
            name={instructorName}
            src={instructorImage}
            transform="auto"
          />
          <Heading
            size={{ base: "xs", md: "sm" }}
            color="gray.700"
            fontWeight="500"
          >
            {instructorName}
          </Heading>
        </Flex>
      </CardFooter>
    </Card>
  );
};

export default Course;
