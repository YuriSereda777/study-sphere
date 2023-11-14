import { Box } from "@chakra-ui/react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const ContactMap = () => {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };

  return (
    <Box h="300px" borderRadius="8px" overflow="hidden">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent lat={30.033333} lng={31.233334} text="My Marker" />
      </GoogleMapReact>
    </Box>
  );
};

export default ContactMap;
