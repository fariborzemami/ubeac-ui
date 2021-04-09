import Roles from "./roles";
export default {
  sidebar: [
    {
      title: "Home",
      href: "/",
      icon: "warning",
      roles: [Roles.ALL],
    },
    {
      title: "About",
      href: "/about",
      icon: "print",
      roles: [Roles.ALL],
    },
    {
      title: "Add Contact",
      href: "/contacts/add",
      icon: "today",
      roles: [Roles.ALL],
    },
    {
      title: "Contacts List",
      href: "/contacts/list",
      icon: "style",
      roles: [Roles.ALL],
    },
    {
      title: "My Profile",
      href: "/profile",
      icon: "print",
      roles: [Roles.AUTH],
    },
    {
      title: "Register",
      href: "/register",
      icon: "font_download",
      roles: [Roles.UNKNWON],
    },
    {
      title: "Login",
      href: "/login",
      icon: "login",
      roles: [Roles.UNKNWON],
    },
  ],
};
