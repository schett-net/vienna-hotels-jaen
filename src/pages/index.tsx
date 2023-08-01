import { StarIcon } from "@chakra-ui/icons";
import {
  Box,
  Container,
  HStack,
  Heading,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { Field, connectPage } from "@snek-at/jaen";
import { graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { HotelItems } from "../components/organisms";

const StarsDivider = () => (
  <HStack pt="4">
    {new Array(5).fill(0).map((_, i) => (
      <StarIcon key={i} boxSize="8" color="#958247" />
    ))}
  </HStack>
);

export default connectPage(
  () => {
    const impressumDisclosure = useDisclosure();

    return (
      <Box
        bg={useColorModeValue("white", "gray.900")}
        color={useColorModeValue("gray.700", "gray.200")}
      >
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          mb={2}
          spacing={4}
          justify={"center"}
          align={"center"}
        >
          <Heading
            as="span"
            size="xs"
            textTransform="uppercase"
            fontWeight={"thin"}
            textAlign={"center"}
          >
            <Field.Text name="text1" defaultValue="Hotels" />
          </Heading>
          <Heading
            w="full"
            as="span"
            fontSize={{
              base: "2xl",
              md: "3xl",
              lg: "6xl",
            }}
            textAlign={"center"}
            mt={10}
            color="#958247"
          >
            <Field.Text name="title" defaultValue="Vienna Hotels" />
          </Heading>
          <Heading
            as="span"
            size="xs"
            textTransform="uppercase"
            fontWeight={"thin"}
            textAlign={"center"}
          >
            <Field.Text name="text2" defaultValue="Hotels in Vienna" />
          </Heading>

          <StarsDivider />
        </Container>

        <Box my="4">
          <HotelItems />
        </Box>

        {/* <StaticImage src="../images/skyline.jpeg" alt="Skyline of Vienna" /> */}
        <Box>
          <Modal
            isOpen={impressumDisclosure.isOpen}
            onClose={impressumDisclosure.onClose}
            size="4xl"
          >
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Impressum</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Field.Text
                  name="impressum"
                  defaultValue={`<p>Impressum gemäß § 25 Mediengesetz:</p><p>Medieninhaber und Herausgeber:</p><p>MATE Beherbergungsbetriebe GmbH City Pension Bauernmarkt 10, 1010 Wien Telefon: +43 1 533 9521 E-Mail: <a href="mailto:welcome@citypension.at">welcome@citypension.at</a> Web: <a target="_blank" rel="noopener noreferrer" href="http://www.citypension.at/">www.citypension.at</a></p><p>Firmenbuchnummer: FN 405266t Firmenbuchgericht: Handelsgericht Wien UID-Nummer: ATU68442134</p><p>Unternehmensgegenstand: Beherbergung, Frühstückspension, Bed &amp; Breakfast</p><p>Mitglied bei der Wirtschaftskammer Wien</p><p>Behörde gem. ECG (E-Commerce Gesetz): Magistratisches Bezirksamt des I. Bezirkes</p><p>Berufsrecht: Gewerbeordnung: <a target="_blank" rel="noopener noreferrer" href="http://www.ris.bka.gv.at/">www.ris.bka.gv.at</a></p><p>Die MATE Beherbergungsbetriebe GmbH ist ein in Österreich ansässiges Unternehmen.</p><p>Offenlegung nach § 25 Mediengesetz: Die Website dient der Darstellung und Bewerbung des Unternehmens und bietet Informationen über die angebotenen Leistungen.</p><p>Für den Inhalt verantwortlich: MATE Beherbergungsbetriebe GmbH</p><p>Haftungshinweis: Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.</p>`}
                />
              </ModalBody>
            </ModalContent>
          </Modal>
          <Box
            borderTopWidth={1}
            borderStyle={"solid"}
            borderColor={useColorModeValue("gray.200", "gray.700")}
          >
            <Container
              as={Stack}
              maxW={"6xl"}
              py={4}
              direction={{ base: "column", md: "row" }}
              spacing={4}
              justify={{ base: "center", md: "space-between" }}
              align={{ base: "center", md: "center" }}
            >
              <HStack>
                <Text as={Link} onClick={impressumDisclosure.onToggle}>
                  Impressum
                </Text>
              </HStack>
              <Text>© 2022 snek.at. All rights reserved</Text>

              <Stack direction={"row"} spacing={6}></Stack>
            </Container>
          </Box>
        </Box>
      </Box>
    );
  },
  {
    label: "HomePage",
  }
);

export const query = graphql`
  query ($jaenPageId: String!) {
    ...JaenPageQuery
  }
`;
