import { Box, Grid, GridItem, Heading, Image, Text } from "@chakra-ui/react";
import { useRef } from "react";
import { useInView, motion } from "framer-motion";

const AboutSection = ({ section }) => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <Grid
      ref={ref}
      templateColumns="repeat(2, 1fr)"
      alignItems="center"
      gap="30px"
      textAlign={{ base: "center", lg: "left" }}
    >
      <GridItem colSpan={{ base: 2, lg: 1 }}>
        <Image
          variants={{
            hidden: {
              x: -100,
              opacity: 0,
            },
            visible: {
              x: 0,
              opacity: 1,
              transition: {
                ease: "easeInOut",
                duration: 0.5,
                delay: (section.id - 1) * 0.5,
              },
            },
          }}
          as={motion.img}
          initial={"hidden"}
          animate={isInView ? "visible" : "hidden"}
          src={section.image}
        />
      </GridItem>
      <GridItem colSpan={{ base: 2, lg: 1 }}>
        <Box
          variants={{
            hidden: {
              x: 100,
              opacity: 0,
            },
            visible: {
              x: 0,
              opacity: 1,
              transition: {
                ease: "easeInOut",
                duration: 0.5,
                delay: (section.id - 1) * 0.5,
              },
            },
          }}
          as={motion.div}
          initial={"hidden"}
          animate={isInView ? "visible" : "hidden"}
        >
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
  );
};

export default AboutSection;
