import React, { useState } from 'react'

import * as styles from './style.module.css'
import { Helmet } from 'react-helmet'

const THIS_PAGE = '/contact'

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

      const dataToPost = {
        'form-name': form.getAttribute('name'),
        'g-recaptcha-response': token,
        ...formData,
      }

      window.grecaptcha
        .execute('6LdpGdYUAAAAAEjBrvf-SIO_H6asq-FowPTZwFKY', {
          //AIzaSyAK-_yeiFLPL6itA27tu4G0T8X1ZQkGCLY
          action: 'submit',
        })
        .then(function (token) {
          // Add your logic to submit to your backend server here.
          console.log('going to the backend...')
          fetch(`/api/recaptcha`, {
            method: 'POST',
            body: JSON.stringify(dataToPost),
          }).then((response) => {
            console.log(`response: `, response)
          })
        })
    })

    // TODO: REMOVE THIS LINE!
    return

    fetch(THIS_PAGE, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        'form-name': form.getAttribute('name'),
        ...formData,
      }).toString(),
    })
      .then((response) => {
        if (!response.ok) throw Error(response.statusText)

        // clear the form
        setFormData(initFormData)

        setStatusText("Thank you! I'll be reaching back out to you shortly.")
      })
      .catch((error) => setStatusText(`Error: ${error.message}`))
  }

  return (
    <>
      <Helmet>
        {/* https://developers.google.com/recaptcha/docs/v3 */}
        {/* <script src="https://www.google.com/recaptcha/api.js"></script>
        <script type="text/javascript">{`
            function onSubmit(token) {
                console.log('submitting...');
                document.getElementById("demo-form").submit();
              }
        `}</script> */}
        <script src="https://www.google.com/recaptcha/api.js?render=6LdpGdYUAAAAAEjBrvf-SIO_H6asq-FowPTZwFKY"></script>
        {/* <script src="https://www.google.com/recaptcha/api.js?render=AIzaSyAK-_yeiFLPL6itA27tu4G0T8X1ZQkGCLY"></script> */}
      </Helmet>
      <p>{statusText}</p>
      <form
        name="contact-form"
        id="contact-form"
        method="POST"
        onSubmit={(e) => handleSubmit(e)}
        // action={THIS_PAGE}
        action="/api/submit"
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
          {/* show reCAPTCHA */}
          <div
            className="g-recaptcha"
            // data-sitekey="6LdpGdYUAAAAAEjBrvf-SIO_H6asq-FowPTZwFKY"
            data-sitekey="AIzaSyAK-_yeiFLPL6itA27tu4G0T8X1ZQkGCLY"
          ></div>

          <button
            type="submit"
            name="submit"
            // className="g-recaptcha"
            // data-sitekey="reCAPTCHA_site_key"
            // data-callback="onSubmit"
            // data-action="submit"
          >
            Send message
          </button>
        </div>
      </form>
    </>
  )
}

export default RecaptchaContactForm
