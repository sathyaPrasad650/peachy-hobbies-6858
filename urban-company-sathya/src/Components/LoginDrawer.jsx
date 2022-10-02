import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Input,
  InputGroup,
  InputLeftAddon,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";

function LoginDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const firstField = React.useRef();
  return (
    <>
      <button
        style={{
          fontSize: "16px",
          fontWeight: "600",
          color: "white",
          marginRight: "30px",
        }}
        onClick={onOpen}
      >
        Login/Sign Up
      </button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        initialFocusRef={firstField}
        onClose={onClose}
        size="sm"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">
            Please login to continue
          </DrawerHeader>

          <DrawerBody>
            <Stack mt="20px">
              <InputGroup>
                <InputLeftAddon>+91</InputLeftAddon>
                <Input type="url" id="url" placeholder="Your phone number" />
              </InputGroup>
            </Stack>
            <Stack mt="20px">
              <Button
                height="44px"
                color="white"
                backgroundColor="black"
                variant="solid"
                colorScheme="black"
              >
                Continue
              </Button>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default LoginDrawer;
