import React from 'react'
import { Outlet } from 'react-router-dom'
import Navigation from '../partials/Navigation'
export default function Root() {
  return (
    <>
      <header>
      <Navigation/>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  )
}
