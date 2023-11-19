import { useEffect, useRef } from "react";
import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Image,
  Text,
} from "@chakra-ui/react";
import Typed from "typed.js";
import wave from "../assets/wave.svg";

const Hero = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Welcome to StudySphere, where learning knows no bounds.",
        "Ignite your curiosity and explore the universe of knowledge with us.",
        "Embark on a journey of discovery and academic excellence at StudySphere.",
      ],
      typeSpeed: 50,
      loop: true,
      loopCount: Infinity,
      showCursor: false,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <Flex
      backgroundColor="brand.500"
      position="relative"
      direction="column"
      justifyContent="center"
    >
      <Box
        px={{ base: "2em", sm: "4em", md: "6em", lg: "10em", xl: "14em" }}
        pt={{ base: "70px", xl: "40px" }}
        mb={{ base: "0", md: "-50px", lg: "-80px", xl: "-120px" }}
      >
        <Grid
          templateColumns="repeat(2, 1fr)"
          gap="30px"
          alignItems="center"
          justifyContent="space-between"
          position="relative"
          zIndex="2"
        >
          <GridItem colSpan={{ base: 2, md: 1 }} h="100%">
            <Flex
              h="100%"
              direction="column"
              gap="30px"
              justifyContent="space-evenly"
              alignItems={{ base: "center", md: "flex-start" }}
            >
              <Box
                color="gray.200"
                fontSize={{ base: "25px", lg: "28px", xl: "32px" }}
                lineHeight="1.5"
              >
                <Text
                  as="span"
                  display="inline-block"
                  textAlign={{ base: "center", md: "left" }}
                  ref={el}
                ></Text>
              </Box>
              <Button
                as="a"
                href="#about"
                w="fit-content"
                px="30px"
                backgroundColor="white"
              >
                Learn more!
              </Button>
            </Flex>
          </GridItem>

          <GridItem colSpan={{ base: 2, md: 1 }}>
            <Image
              src="https://ivy-school.thimpress.com/demo-4/wp-content/uploads/sites/4/2018/12/img-slider-4.png"
              display={{ base: "none", md: "block" }}
            />
          </GridItem>
        </Grid>
      </Box>
      <Image src={wave} />
    </Flex>
  );
};

export default Hero;
