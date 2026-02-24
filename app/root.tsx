import React, { useEffect } from "react";
import type { LinksFunction } from "react-router";
import { useLocation, Links, Meta, Outlet, Scripts, ScrollRestoration } from "react-router";
import "./styles.css";

export const links: LinksFunction = () => [
  { rel: "icon", href: "/favicon.png", type: "image/png" },
];

export default function App() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
