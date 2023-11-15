import { Heading, Flex, Grid, GridItem, Box, Image } from "@chakra-ui/react";
import wave2 from "../assets/wave2.svg";
import ContactInfo from "./ContactInfo";
import ContactMap from "./ContactMap";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <Flex
      direction="column"
      pb={{ base: "50px", lg: "80px" }}
      backgroundColor="brand.500"
      position="relative"
      id="contact"
    >
      <Image src={wave2} />
      <Box
        px={{ base: "2em", sm: "4em", md: "6em", lg: "10em", xl: "14em" }}
        mt={{ base: "0", lg: "-50px" }}
      >
        <Heading
          as="h2"
          color="gray.100"
          fontSize={{ base: "30px", sm: "34px", md: "42px", lg: "52px" }}
          textAlign="center"
          mb={{ base: "10px", md: "18px", lg: "30px" }}
        >
          Get in Touch
        </Heading>
        <Grid w="100%" templateColumns="repeat(2, 1fr)" gap="30px">
          <GridItem colSpan={{ base: 2, lg: 1 }}>
            <ContactForm />
          </GridItem>
          <GridItem colSpan={{ base: 2, lg: 1 }}>
            <ContactMap />
            <ContactInfo />
          </GridItem>
        </Grid>
      </Box>
    </Flex>
  );
};

export default Contact;
