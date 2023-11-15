import { Heading, Flex, Image, Box } from "@chakra-ui/react";
import Course from "./Course";
import { Swiper, SwiperSlide } from "swiper/react";
import wave from "../assets/wave.svg";
import wave2 from "../assets/wave2.svg";
import { courses } from "../data/courses";
import "swiper/css";

const Courses = () => {
  return (
    <Flex
      direction="column"
      backgroundColor="brand.500"
      position="relative"
      id="courses"
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
          mb={{ base: "20px", lg: "30px" }}
        >
          Explore Our Programs
        </Heading>
        <Swiper
          grabCursor={true}
          slidesPerView={"auto"}
          spaceBetween={25}
          loop={true}
          className="courses-list-swiper"
        >
          {courses.map((course) => (
            <SwiperSlide key={course.id}>
              <Course {...course} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
      <Image src={wave} />
    </Flex>
  );
};

export default Courses;
