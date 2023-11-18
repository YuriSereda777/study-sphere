import { Box } from "@chakra-ui/react";
import GoogleMapReact from "google-map-react";
import { useRef } from "react";
import { useInView, motion } from "framer-motion";

const ContactMap = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };

  return (
    <Box
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
      as={motion.div}
      initial={"hidden"}
      animate={isInView ? "visible" : "hidden"}
      h="300px"
      borderRadius="8px"
      overflow="hidden"
    >
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      ></GoogleMapReact>
    </Box>
  );
};

export default ContactMap;
