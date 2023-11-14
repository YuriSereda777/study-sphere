import { Heading, Flex } from "@chakra-ui/react";
import { SwiperSlide, Swiper } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { teachers } from "../data/teachers";
import Teacher from "./Teacher";

const Teachers = () => {
  return (
    <Flex
      direction="column"
      alignItems="center"
      gap={{ base: "25px", md: "35px", lg: "45px" }}
      px={{ base: "2em", sm: "4em", md: "6em", lg: "10em", xl: "14em" }}
    >
      <Heading
        as="h2"
        color="gray.700"
        fontSize={{ base: "30px", sm: "34px", md: "42px", lg: "52px" }}
        textAlign="center"
      >
        Inspirational Instructors
      </Heading>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={20}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          pauseOnMouseEnter: true,
        }}
        modules={[Autoplay]}
        loop={true}
        grabCursor={true}
        className="courses-list-swiper"
      >
        {teachers.map((teacher) => (
          <SwiperSlide key={teacher.id}>
            <Teacher {...teacher} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Flex>
  );
};

export default Teachers;
