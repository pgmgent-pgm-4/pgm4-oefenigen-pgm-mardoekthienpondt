import React from 'react';
import { NavLink } from 'react-router-dom';
import { ROUTES } from '../routes/routes';
export default function Navigation() {
  return (
    <div>
      <NavLink to={ROUTES.HOME.path}>{ROUTES.HOME.title}</NavLink>
      <NavLink to={ROUTES.ABOUT.path}>{ROUTES.ABOUT.title}</NavLink>
      <NavLink to={ROUTES.CONTACT.path}>{ROUTES.CONTACT.title}</NavLink>
      <NavLink to={ROUTES.BLOGS.path}>{ROUTES.BLOGS.title}</NavLink>
    </div>
  );
}
