import React, { useState } from 'react'
import ContactForm from '../../components/ContactForm/recaptcha'
import { Helmet } from 'react-helmet'

class Contact extends React.Component {
  render() {
    return (
      <>
        <Helmet title={`Joe Geringer | Contact`} />
        <div className="wrapper">
          <h1>Contact</h1>
          <ContactForm />
        </div>
      </>
    )
  }
}

export default Contact
