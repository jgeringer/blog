import React, { useState } from 'react'
import ContactForm from '../../components/ContactForm'
import Layout from '../../components/layout'

class Contact extends React.Component {
    render() {
        
        return (
            <>
                <div>
                    <h1>Contact:</h1>
                    <ContactForm />
                </div>
            </>
        )
    }
}

export default Contact