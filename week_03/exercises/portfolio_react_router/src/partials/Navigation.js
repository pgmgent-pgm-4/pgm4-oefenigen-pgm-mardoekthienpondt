import React from 'react';
import { NavLink } from 'react-router-dom';
import { ROUTES } from '../routes/routes';
export default function Navigation() {
  return (
    <>
      <nav>
        <NavLink to={ROUTES.HOME.path}>{ROUTES.HOME.name}</NavLink>
        <NavLink to={ROUTES.ABOUT.path}>{ROUTES.ABOUT.name}</NavLink>
        <NavLink to={ROUTES.PROJECTS.path}>{ROUTES.PROJECTS.name}</NavLink>
      </nav>
      <div className="cta">
        <NavLink to={ROUTES.CONTACT.path}>{ROUTES.CONTACT.name}</NavLink>
      </div>
    </>
  );
}
