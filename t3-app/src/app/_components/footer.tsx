import {
  Button,
  Input,
  Link,
  NavbarBrand,
  Navbar as NavbarComponent,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";

export default function Footer() {
  return (
    <footer className="flex h-16 w-full items-center justify-center">
      <div className="flex w-full max-w-[1024px] flex-row items-center justify-between px-6">
        Made with ❤️ By Mosaab Emam
        <div className="flex flex-row gap-2">
          <Input
            classNames={{
              base: "max-w-full sm:max-w-[16rem] h-10",
              mainWrapper: "h-full",
              input: "text-small",
              inputWrapper:
                "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
            }}
            placeholder="Email"
            size="sm"
            // startContent={<SearchIcon size={18} />}
            type="text"
            radius="sm"
          />
          <Button radius="sm" color="primary">
            Get Updated
          </Button>
        </div>
      </div>
      {/* <NavbarBrand> */}
      {/* </NavbarBrand> */}
      {/* <NavbarContent as="div" className="items-center" justify="end">
      </NavbarContent> */}
    </footer>
  );
}
