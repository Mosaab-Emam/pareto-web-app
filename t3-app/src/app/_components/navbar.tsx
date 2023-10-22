import {
  Button,
  Link,
  NavbarBrand,
  Navbar as NavbarComponent,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";

export default function Navbar() {
  return (
    <NavbarComponent className="absolute">
      <NavbarBrand>
        <p className="font-bold text-inherit">Pareto</p>
      </NavbarBrand>
      <NavbarContent className="hidden gap-4 sm:flex" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">Roadmap</Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Blog
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} color="primary" target="_blank" href="https://getwaitlist.com/waitlist/5612">
            Join the waitlist
          </Button>
        </NavbarItem>
      </NavbarContent>
    </NavbarComponent>
  );
}
