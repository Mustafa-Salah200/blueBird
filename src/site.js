import { createContext, useContext } from "react";

export const NAV = [
  ["home", "Home"],
  ["about", "About"],
  ["solutions", "Solutions"],
  ["products", "Products"],
  ["projects", "Projects"],
  ["careers", "Careers"],
  ["blog", "Blog"],
  ["contact", "Contact"],
];

export const BUILT = ["home", "about", "solutions", "products", "projects"];

export const SiteContext = createContext(null);
export const useSite = () => useContext(SiteContext);
