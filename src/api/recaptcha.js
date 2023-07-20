import fetch from "node-fetch"
require('dotenv').config();

export default function handler(req, res) {
    // res.status(200).json({ hello: `world` })

    console.log(`req:`, req);

    // https://www.geeksforgeeks.org/how-to-verify-recaptcha-in-node-js-server-call/
    const name = req.body.name;

    // const response_key = req.body["g-recaptcha-response"];
    const token = req.body.token;

    const secret_key = process.env.RECAPTCHA_SECRET_KEY;

    const url = `https://www.google.com/recaptcha/api/siteverify?secret=${secret_key}&response=${token}`;

    fetch(url, {
      method: "post",
    })
    .then(response => response.json())
    .then(google_response => res.json({ google_response }))
    .catch(error => res.json({ error }));
      // .then((google_response) => {
   
      //   // google_response is the object return by
      //   // google as a response
      //   if (google_response.success == true) {
      //     //   if captcha is verified
      //     return res.send({ response: "Successful!" });
      //   } else {
      //     // if captcha is not verified
      //     return res.send({ response: "Failed!" });
      //   }
      // })
      // .catch((error) => {
      //     // Some error while verify captcha
      //   return res.json({ error });
      // });

  }
  