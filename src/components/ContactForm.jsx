import {
  Flex,
  Input,
  Grid,
  InputGroup,
  InputLeftElement,
  Icon,
  Textarea,
  Button,
  Box,
  GridItem,
  Text,
} from "@chakra-ui/react";
import { AiOutlineUser } from "react-icons/ai";
import { BiPencil } from "react-icons/bi";
import { FaRegEnvelope } from "react-icons/fa6";
import { useFormik } from "formik";
import { useRef, useState } from "react";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import ContactFormError from "./ContactFormError";
import { motion } from "framer-motion";

const ContactForm = () => {
  const [submissionState, setSubmissionState] = useState();
  const formRef = useRef(null);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      subject: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .min(3, "First name must be at least 3 characters.")
        .required("First name is required."),
      lastName: Yup.string()
        .min(3, "Last name must be at least 3 characters.")
        .required("Last name is required."),
      subject: Yup.string()
        .min(10, "Subject must be at least 10 characters.")
        .required("Subject is required."),
      email: Yup.string()
        .email("Invalid email address.")
        .required("Email is required."),
      message: Yup.string()
        .min(50, "Message must be 50 at least characters.")
        .required("Message is required."),
    }),
    onSubmit: async () => {
      try {
        await emailjs.sendForm(
          import.meta.env.VITE_SERVICE_ID,
          import.meta.env.VITE_TEMPLATE_ID,
          formRef.current,
          import.meta.env.VITE_PUBLIC_KEY
        );

        setSubmissionState("success");
      } catch (error) {
        setSubmissionState("error");
      }
    },
  });

  const formInputsVariants = (delay) => {
    return {
      initial: { opacity: 0 },
      inView: { opacity: 1, transition: { duration: 0.2, delay } },
    };
  };

  return (
    <form ref={formRef} onSubmit={formik.handleSubmit}>
      <Flex direction="column" gap="16px">
        <Grid templateColumns="repeat(2, 1fr)" gap="16px">
          <GridItem colSpan={{ base: 2, md: 1, lg: 2, xl: 1 }}>
            <Box>
              <InputGroup
                as={motion.div}
                variants={formInputsVariants(0)}
                initial="initial"
                whileInView="inView"
              >
                <InputLeftElement
                  pointerEvents="none"
                  h="100%"
                  bg="gray.300"
                  borderLeftRadius="0.375rem"
                >
                  <Icon as={AiOutlineUser} color="gray.500" fontSize="20px" />
                </InputLeftElement>
                <Input
                  id="firstName"
                  name="firstName"
                  type="text"
                  placeholder="First name"
                  focusBorderColor="gray.300"
                  backgroundColor="white"
                  size="lg"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.firstName}
                />
              </InputGroup>
              {formik.touched.firstName && formik.errors.firstName && (
                <ContactFormError text={formik.errors.firstName} />
              )}
            </Box>
          </GridItem>
          <GridItem colSpan={{ base: 2, md: 1, lg: 2, xl: 1 }}>
            <Box>
              <InputGroup
                as={motion.div}
                variants={formInputsVariants(0.2)}
                initial="initial"
                whileInView="inView"
              >
                <InputLeftElement
                  pointerEvents="none"
                  h="100%"
                  bg="gray.300"
                  borderLeftRadius="0.375rem"
                >
                  <Icon as={AiOutlineUser} color="gray.500" fontSize="20px" />
                </InputLeftElement>
                <Input
                  id="lastName"
                  name="lastName"
                  type="text"
                  placeholder="Last name"
                  focusBorderColor="gray.300"
                  backgroundColor="white"
                  size="lg"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.lastName}
                />
              </InputGroup>
              {formik.touched.lastName && formik.errors.lastName && (
                <ContactFormError text={formik.errors.lastName} />
              )}
            </Box>
          </GridItem>
        </Grid>
        <Box>
          <InputGroup
            as={motion.div}
            variants={formInputsVariants(0.4)}
            initial="initial"
            whileInView="inView"
          >
            <InputLeftElement
              pointerEvents="none"
              h="100%"
              bg="gray.300"
              borderLeftRadius="0.375rem"
            >
              <Icon as={BiPencil} color="gray.500" fontSize="24px" />
            </InputLeftElement>
            <Input
              id="subject"
              name="subject"
              type="text"
              placeholder="Subject"
              focusBorderColor="gray.300"
              backgroundColor="white"
              size="lg"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.subject}
            />
          </InputGroup>
          {formik.touched.subject && formik.errors.subject && (
            <ContactFormError text={formik.errors.subject} />
          )}
        </Box>
        <Box>
          <InputGroup
            as={motion.div}
            variants={formInputsVariants(0.6)}
            initial="initial"
            whileInView="inView"
          >
            <InputLeftElement
              pointerEvents="none"
              h="100%"
              bg="gray.300"
              borderLeftRadius="0.375rem"
            >
              <Icon as={FaRegEnvelope} color="gray.500" fontSize="20px" />
            </InputLeftElement>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Email address"
              focusBorderColor="gray.300"
              backgroundColor="white"
              size="lg"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
          </InputGroup>
          {formik.touched.email && formik.errors.email && (
            <ContactFormError text={formik.errors.email} />
          )}
        </Box>
        <Box>
          <Textarea
            id="message"
            name="message"
            resize="none"
            placeholder="Your message.."
            height="150px"
            focusBorderColor="gray.300"
            backgroundColor="white"
            size="lg"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.message}
            as={motion.div}
            variants={formInputsVariants(0.8)}
            initial="initial"
            whileInView="inView"
          />
          {formik.touched.message && formik.errors.message && (
            <ContactFormError text={formik.errors.message} />
          )}
        </Box>
        <Button type="submit" width="full" mt="10px">
          Submit
        </Button>
        <Text color="gray.200">
          {submissionState === "success"
            ? "Your message has been sent successfully"
            : submissionState === "error"
            ? "An error occurred."
            : ""}
        </Text>
      </Flex>
    </form>
  );
};

export default ContactForm;
