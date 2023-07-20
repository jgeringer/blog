import fetch from "node-fetch"

export default function handler(req, res) {
    // res.status(200).json({ hello: `world` })

    console.log(`req:`, req);

    // https://www.geeksforgeeks.org/how-to-verify-recaptcha-in-node-js-server-call/
    const response_key = req.body["g-recaptcha-response"];

    const secret_key = "6LdpGdYUAAAAAFW_hG8BcMNamliqxiZvzD5XVxmk";

    const url = `https://www.google.com/recaptcha/api/siteverify?secret=${secret_key}&response=${response_key}`;

    fetch(url, {
      method: "post",
    })
      .then((response) => response.json())
      .then((google_response) => {
   
        // google_response is the object return by
        // google as a response
        if (google_response.success == true) {
          //   if captcha is verified
          return res.send({ response: "Successful!" });
        } else {
          // if captcha is not verified
          return res.send({ response: "Failed!", err: req.body["g-recaptcha-response"] });
        }
      })
      .catch((error) => {
          // Some error while verify captcha
        return res.json({ error, err: req.body["g-recaptcha-response"] });
      });

  }
  