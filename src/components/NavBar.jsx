import { Box, Flex } from "@chakra-ui/react"
import MenuLinks from "../containers/MenuLinks"
import Logo from '../containers/Logo'

const NavBar = () => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      gap={{ base: 8, lg: 16 }}
      px={{ base: 6, lg: 12 }}
      py={3}
      maxW={{ base: "full", xl: "1440px" }}
      mx="auto"
    >
      <Logo />
      {/* Desktop Menu */}
      <Box display={{ base: "none", md: "block" }}>
        <MenuLinks />
      </Box>
    </Flex>
  )
    
}


export default NavBar
