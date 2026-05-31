import { HStack, VStack, Link, Button } from "@chakra-ui/react";

const links = [
  { name: "Profile", href: "#profile" },
  { name: "About", href: "#about" },
  { name: "League Table", href: "#leaguetable" },
  { name: "Logout", href: "#logout" },
];

const MenuLinks = ({ isMobile = false }) => {
  const LinkComponent = isMobile ? VStack : HStack;

  return (
    <LinkComponent gap={isMobile ? 4 : 8} align="center">
      {links.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          fontWeight="medium"
          color="blue.600"
          _hover={{
            color: "blue.500",
            textDecoration: "underline",
          }}
          transition="color 0.2s ease"
        >
          {link.name}
        </Link>
      ))}
    </LinkComponent>
  );
};

export default MenuLinks