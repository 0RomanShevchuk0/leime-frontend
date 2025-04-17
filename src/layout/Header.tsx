import { FC } from "react"
import { Link } from "@tanstack/react-router"
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@heroui/react"
import { appRoutes } from "@/shared/config/routes.config"

const links = [
  { path: appRoutes.home, label: "Home" },
  { path: appRoutes.memesList, label: "Memes List" },
  { path: appRoutes.memesTable, label: "Memes Table" },
]

const Header: FC = () => {
  return (
    <Navbar className="px-4">
      <div className="flex w-full items-center justify-between">
        <NavbarBrand className="font-bold">LEIME</NavbarBrand>

        <NavbarContent className="sm:hidden" justify="end">
          <NavbarMenuToggle />
        </NavbarContent>
      </div>

      <NavbarContent className="hidden sm:flex gap-6" justify="center">
        {links.map(({ path, label }) => (
          <NavbarItem key={path}>
            <Link
              to={path}
              className="text-black hover:text-[#a5b4fc] font-medium transition-colors duration-200"
              activeProps={{ style: { fontWeight: "bold", color: "#a5b4fc" } }}
            >
              {label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarMenu className="mt-2">
        {links.map(({ path, label }) => (
          <NavbarMenuItem key={path}>
            <Link
              to={path}
              className="block w-full text-black py-2 hover:text-[#a5b4fc]"
              activeProps={{ style: { fontWeight: "bold", color: "#a5b4fc" } }}
            >
              {label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  )
}

export default Header
