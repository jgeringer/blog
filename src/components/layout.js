import React from 'react'
import { Link } from 'gatsby'
import base from './base.css'
import Container from './container'
import Navigation from './navigation'
import '../styles/app.css'


export default function Layout({ children }) {
  return (
    <Container>
        <Navigation />
        {children}
      </Container>
  );
}
