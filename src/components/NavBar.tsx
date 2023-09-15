import { HStack, Image } from "@chakra-ui/react";

import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import logo from "../assets/logo.webp";

const NavBar = () => {
  return (
    <HStack justifyContent={"space-between"} padding="10px">
      <Image boxSize={"60px"} src={logo} />
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
