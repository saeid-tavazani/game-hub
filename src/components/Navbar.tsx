import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
export default function Navbar() {
  return (
    <HStack>
      <Image src={logo} boxSize="60px" />
      <ColorModeSwitch />
    </HStack>
  );
}
