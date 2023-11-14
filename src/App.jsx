import { Box } from "@chakra-ui/react";
import Hero from "./components/Hero";
import Navbar from "./layout/Navbar";
import About from "./components/About";
import Courses from "./components/Courses";
import Contact from "./components/Contact";
import Teachers from "./components/Teachers";

const App = () => {
  return (
    <Box as="div" minHeight="100vh" backgroundColor="gray.50">
      <Navbar />
      <Hero />
      <About />
      <Courses />
      <Teachers />
      <Contact />
    </Box>
  );
};

export default App;
