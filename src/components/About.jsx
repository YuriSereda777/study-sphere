import { useRef } from "react";
import { Flex, Heading, Text } from "@chakra-ui/react";
import { motion, useInView } from "framer-motion";
import { about } from "../data/about";
import AboutSection from "./AboutSection";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

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
        ref={ref}
        variants={{
          hidden: {
            opacity: 0,
          },
          visible: {
            opacity: 1,
            transition: {
              ease: "easeInOut",
              duration: 0.5,
            },
          },
        }}
        as={motion.p}
        initial={"hidden"}
        animate={isInView ? "visible" : "hidden"}
        maxW="2xl"
        color="gray.600"
        fontSize="20px"
        textAlign="center"
        letterSpacing="0.5px"
      >
        {about.intro}
      </Text>
      {about.sections.map((section) => (
        <AboutSection key={section.id} section={section} />
      ))}
    </Flex>
  );
};

export default About;
