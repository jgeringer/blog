import fetch from "node-fetch"
require('dotenv').config();

export default function handler(req, res) {
    // https://developers.google.com/recaptcha/docs/v3

    const name = req.body.name;
    const token = req.body.token;
    const secret_key = process.env.RECAPTCHA_SECRET_KEY;
    const url = `https://www.google.com/recaptcha/api/siteverify?secret=${secret_key}&response=${token}`;

    fetch(url, {
      method: "post",
    })
    .then(response => response.json())
    .then((google_response) => {
        // google_response is the object return by google as a response

        const successfulCriteria = 
          google_response.success === true && 
          google_response.score >= 0.5 && 
          google_response.action === "submit"

        if (successfulCriteria) {
          //   if captcha is verified
          return res.json({ success: true });
        } else {
          // if captcha is not verified
          return res.json({ success: false });
        }
      })
      .catch((error) => {
        // Some error while verify captcha
        return res.json({ error });
      });
  }
  