import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import { about } from "../data/about";

const About = () => {
  return (
    <Flex
      direction="column"
      alignItems="center"
      gap={{ base: "10px", md: "18px", lg: "30px" }}
      px={{ base: "2em", sm: "4em", md: "6em", lg: "10em", xl: "14em" }}
      id="about"
    >
      <Heading
        as="h2"
        color="gray.700"
        fontSize={{ base: "30px", sm: "34px", md: "42px", lg: "52px" }}
        textAlign="center"
      >
        About Us
      </Heading>
      <Text
        maxW="2xl"
        color="gray.600"
        fontSize="20px"
        textAlign="center"
        letterSpacing="0.5px"
      >
        {about.intro}
      </Text>
      {about.sections.map((section) => (
        <Grid
          key={section.id}
          templateColumns="repeat(2, 1fr)"
          alignItems="center"
          gap="30px"
          textAlign={{ base: "center", lg: "left" }}
        >
          <GridItem colSpan={{ base: 2, lg: 1 }}>
            <Image src={section.image} />
          </GridItem>
          <GridItem colSpan={{ base: 2, lg: 1 }}>
            <Box>
              <Heading
                as="h5"
                color="gray.600"
                fontSize={{ base: "24px", md: "30px", lg: "28px", xl: "32px" }}
                fontWeight={500}
              >
                {section.title}
              </Heading>
              <Text
                mt="15px"
                color="gray.500"
                fontSize="18px"
                letterSpacing="0.5px"
              >
                {section.text}
              </Text>
            </Box>
          </GridItem>
        </Grid>
      ))}
    </Flex>
  );
};

export default About;
