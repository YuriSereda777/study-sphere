import { useEffect, useRef } from "react";
import { Box, Button, Flex, Grid, GridItem, Image } from "@chakra-ui/react";
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
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <Flex
      backgroundColor="#7971ea"
      position="relative"
      direction="column"
      justifyContent="center"
    >
      <Box
        px={{ base: "2em", sm: "4em", md: "6em", lg: "10em", xl: "14em" }}
        pt="100px"
        mb={{ base: "0", lg: "-50px" }}
      >
        <Grid
          templateColumns="repeat(2, 1fr)"
          gap="30px"
          alignItems="center"
          justifyContent="space-between"
          position="relative"
          zIndex="2"
        >
          <GridItem colSpan={{ base: 2, md: 1 }}>
            <Flex h="100%" direction="column" gap="30px">
              <Box color="gray.200" fontSize="35px" lineHeight="1.5">
                <span ref={el}></span>
              </Box>
              <Button w="fit-content" px="30px" backgroundColor="white">
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
