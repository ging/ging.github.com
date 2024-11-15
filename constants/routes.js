import Page from "./../app/page";
import Team from "./../app/team/page";
import Research from "./../app/research/page";
import Contact from "./../app/contact/page";
import About from "./../app/about/page";
import DesignSystem from "@/app/design-system/page";
import Documentation from "@/app/documentation/page";
import Projects from "@/app/projects/page";
import { Route, Routes } from "react-router-dom";

export const routes = [
    { route: "/", key: "nav.home", page:<Page/>, active: true },
    { route: "/about", key: "nav.about", page:<About/>, active: true },
    { route: "/team", key: "nav.team", page:<Team/>, active: true },
    { route: "/research", key: "nav.research", page:<Research/>, active: true },
    { route: "/projects", key: "nav.projects", page:<Projects/>, active: true },
    { route: "/contact", key: "nav.contact", page:<Contact/>, active: true },
    { route: "/design-system", key: "nav.designSystem", page:<DesignSystem/>, active: false },
    { route: "/documentation", key: "nav.documentation", page:<Documentation/>, active: false },
  ];

export const activeRoutes = routes
  .filter(route => route.active)  // Filtrar solo las rutas activas
