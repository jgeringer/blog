import React, { useState } from 'react'

import * as styles from './style.module.css'
import { Helmet } from 'react-helmet'
import { isWindowDefined } from '@utils/dom'

const RecaptchaContactForm = () => {
  const initFormData = {
    name: '',
    email: '',
    message: '',
  }
  const [formData, setFormData] = useState(initFormData)
  const [statusText, setStatusText] = useState('')

  const handleChange = (event) => {
    const key = event.target.name
    const updatedFormValue = event.target.value
    const newFormData = { ...formData, [key]: updatedFormValue }
    setFormData(newFormData)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const form = event.target

    window.grecaptcha.ready(function () {
      console.log('*** grecaptcha ready ***')
      console.log('formdata: ', formData)

      window.grecaptcha
        .execute('6LdpGdYUAAAAAEjBrvf-SIO_H6asq-FowPTZwFKY', {
          action: 'submit',
        })
        .then(function (token) {
          const dataToPost = {
            'form-name': form.getAttribute('name'),
            token: token,
            ...formData,
          }
          // Add your logic to submit to your backend server here.
          ;(async () => {
            const response = await fetch('/api/recaptcha', {
              method: 'post',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(dataToPost),
            })
            const recaptchaResponse = await response.json()
            console.log(recaptchaResponse)

            if (recaptchaResponse.success === true) {
              // passed backend validation, so fire off the email form...
              fetch(window.location.pathname, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams({
                  'form-name': form.getAttribute('name'),
                  ...formData,
                }).toString(),
              })
                .then((response) => {
                  if (!response.ok) throw Error(response.statusText)

                  // clear the form
                  setFormData(initFormData)

                  setStatusText(
                    "Thank you! I'll be reaching back out to you shortly."
                  )
                })
                .catch((error) => setStatusText(`Error: ${error.message}`))
            } else {
              setStatusText(`Error processing`)
            }
          })()
        })
    })
  }

  return (
    <>
      <Helmet>
        <script src="https://www.google.com/recaptcha/api.js?render=6LdpGdYUAAAAAEjBrvf-SIO_H6asq-FowPTZwFKY"></script>
      </Helmet>
      <p>{statusText}</p>
      <form
        name="contact-form"
        id="contact-form"
        method="POST"
        onSubmit={(e) => handleSubmit(e)}
        // action={THIS_PAGE}
        // action="/api/submit"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        className={styles.form}
      >
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="contact-form" />
        <div>
          <label htmlFor="name">Name</label>
          <br />
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={(e) => handleChange(e)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <br />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={(e) => handleChange(e)}
            required
          />
        </div>
        <div className={styles.colspan3}>
          <label htmlFor="message">Message</label>
          <br />
          <textarea
            name="message"
            value={formData.message}
            rows="7"
            onChange={(e) => handleChange(e)}
            required
          />
        </div>
        <div className={styles.colspan3}>
          <button type="submit" name="submit">
            Send message
          </button>
        </div>
      </form>
    </>
  )
}

export default RecaptchaContactForm
