import {
  Box, Button, Image, Modal, ModalBody,
  ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure, Wrap
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Authentication from "../../authentication/Authentication";
import "./AppHeader.css";

export default function AppHeader() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      width="100%"
      height="100%"
      p={5}
      bgGradient="linear(to-r, blue.200, purple.500)"
      display="inline-flex"
    >
      <Wrap width="100%" spacing={5}>
        <Link to="/">
          <Image width="50px" src="/assets/home.png"></Image>
        </Link>
        <Link to="/play">
          <Image width="50px" src="/assets/sword.png"></Image>
        </Link>
        <Link to="/about">
          <Image width="50px" src="/assets/question.png"></Image>
        </Link>
      </Wrap>
      <Box width="100%">
        <Button className="push-right" onClick={onOpen}>
          Login
        </Button>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Authentication></Authentication>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
              <Button variant="ghost">Secondary Action</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    </Box>
  );
}
