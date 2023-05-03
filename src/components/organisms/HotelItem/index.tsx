import {
  Box,
  BoxProps,
  Center,
  Heading,
  Text,
  VStack,
  useColorModeValue,
  Image,
} from "@chakra-ui/react";
import { Field, connectBlock, useField } from "@snek-at/jaen";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

const IMAGE =
  "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2l0eXxlbnwwfHwwfHw%3D&w=1000&q=80";

export const HotelItem = connectBlock(
  (props: BoxProps) => {
    const hiddenUrlField = useField<string>("hiddenUrl", "IMA:TextField");

    const card = (
      <Center
        maxW={{
          base: "100%",
          md: "sm",
          lg: "md",
        }}
        padding="1rem"
        height="100%"
      >
        <Box
          minW="xs"
          maxW="100%"
          role="group"
          bg={useColorModeValue("white", "gray.800")}
          boxShadow="2xl"
          rounded="xl"
          height="100%"
          zIndex={1}
          overflow="hidden"
          transition="all 0.2s ease"
          _hover={{
            boxShadow: "xl",
            transform: "scale(1.04)",
          }}
        >
          <Box h="64">
            <Field.Image
              name={"image"}
              label="Image"
              defaultValue={undefined}
            />
          </Box>

          <VStack p={5} spacing={2} align={"center"}>
            <Text
              as="span"
              color="gray.500"
              fontSize="sm"
              textTransform="uppercase"
            >
              <Field.Text name={"lead"} defaultValue={"Lead"} label="Lead" />
            </Text>
            <Heading
              fontSize={"3xl"}
              fontFamily={"heading"}
              fontWeight={500}
              as="span"
            >
              <Field.Text
                name={"title"}
                defaultValue={"City Pension"}
                label="Heading"
              />
            </Heading>
            <Text color={"gray.500"} textAlign="center" as="span">
              <Field.Text
                name={"address"}
                defaultValue={"Addresse"}
                label="Address"
              />
            </Text>
            <Box h="3rem">
              <Field.Image
                name={"logoimage"}
                label="Logo"
                objectFit={"contain"}
                style={{
                  width: "auto",
                }}
                imgStyle={{
                  objectFit: "contain",
                }}
                defaultValue={undefined}
              />
            </Box>
            <Field.Text
              name="hiddenUrl"
              defaultValue="Empty"
              label="URL"
              style={{
                display: hiddenUrlField.isEditing ? "block" : "none",
              }}
            />
          </VStack>
        </Box>
      </Center>
    );

    const value = (
      hiddenUrlField.value ||
      hiddenUrlField.staticValue ||
      ""
    ).replace(/<\/?[^>]+(>|$)/g, "");

    if (hiddenUrlField.isEditing || !value) {
      return card;
    }

    return (
      <a
        href={value}
        target="_blank"
        style={{
          height: "100%",
        }}
      >
        {card}
      </a>
    );
  },
  {
    name: "HotelCard",
    label: "Hotel Card",
  }
);
