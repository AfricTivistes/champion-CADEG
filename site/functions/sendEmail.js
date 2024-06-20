require("dotenv").config();
const SparkPost = require("sparkpost");
const {SPARKPOST, BASE_URL} = process.env;
const client = new SparkPost(SPARKPOST);

const sendEmail = (data) => {
  const {key, langue, email} = data;
  const title = {
    en: "Confirm your choice!", fr: "[Champion AfricTivistes de la gouvernance et de la démocratie] Confirmez votre choix !"}[langue];
  const text = {
    en: "Please click on the button below or the link to confirm your vote.",
    fr: "Veuillez cliquer sur le bouton ci-dessous pour confirmer votre vote."
  }[langue];
  const btn = {en: "Confirm", fr: "Confirmer"}[langue];
  const link = `${BASE_URL}/api/voteverify?key=${key}`;
  client.transmissions
    .send({
      content: {
        from: "democracychampion@mail.africtivistes.com",
        subject: title,
        html: `<!DOCTYPE html>
<html
  lang="${langue}"
  xmlns:v="urn:schemas-microsoft-com:vml"
  xmlns:o="urn:schemas-microsoft-com:office:office"
>
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <meta
      name="format-detection"
      content="telephone=no, date=no, address=no, email=no, url=no"
    />
    <meta name="x-apple-disable-message-reformatting" />
    <meta name="color-scheme" content="light dark" />
    <meta name="supported-color-schemes" content="light dark" />
    <title>Le Champion AfricTivistes de la gouvernance et de la démocratie #AfricTivistes</title>
    <!--[if mso]>
      <noscript>
        <xml>
          <o:OfficeDocumentSettings>
            <o:PixelsPerInch>96</o:PixelsPerInch>
          </o:OfficeDocumentSettings>
        </xml>
      </noscript>
    <![endif]-->
    <style>
      :root {
        color-scheme: light dark;
        supported-color-schemes: light dark;
      }

      .body,
      .container {
        font-family: Arial, sans-serif;
        color: #39444d;
      }

      .container {
        padding: 30px;
      }

      h1 {
        font-size: 32px;
        font-weight: 600;
        margin: 0 0 20px 0;
      }

      p {
        font-size: 16px;
        line-height: 24px;
        margin: 0 0 24px 0;
      }

      hr {
        border: 1px solid #c5ced6;
        margin: 48px 0 48px 0;
      }

      a,
      a:visited {
        color: #4f1f37;
      }

      .logo {
        margin: 0 0 58px 0;
      }

      a.social,
      a.social:visited {
        font-size: 14px;
        color: #626f7a;
      }
      a.btn-primary {
        background: #f8d761;
        color: #4f1f37;
        border-radius: 40px;
        padding: 15px 40px !important;
        border: none;
        text-decoration: none;
      }
    </style>
  </head>
  <body class="body">
    <div
      role="article"
      aria-roledescription="email"
      aria-label="AfricTivistes Civic Action Prize"
      lang="en"
      style="font-size: 16px; font-size: 1rem; font-size: max(16px, 1rem);"
    >
      <div class="container">
        <!--[if true]>
        <table role="presentation" width="100%" align="center" style="background:#ffffff">
          <tr>
            <td></td>
            <td style="width:600px;background:#ffffff;padding:24px;">
        <![endif]-->
        <div
          style="
            max-width: 600px;
            margin: 0 auto;
            background: #ffffff;
            padding: 24px;
            mso-padding-alt: 0;
          "
        >
          <img
            class="logo"
            width="140"
            height="56"
            alt="#AfricTivistes"
            src="https://mooc.africtivistes.org/web/image/6222-44b2567e/logo-blanc%20africtivistes__1_-modified.png"
          />

          <h1>${title}</h1>
          <p>${text}</p>
          <hr />
          <p style="text-align: center;">
            <a href="${link}" class="btn-primary">${btn}</a>
          </p>
          <hr />
          <a class="social" href="https://democracychampion.net/"
            >democracychampion.net</a
          >
          <div style="margin-bottom: 48px;"></div>
          <p style="font-size: 10px;">
            africtivistes.org © 2024 All Rights Reserved
          </p>
        </div>
        <!--[if true]>
            </td>
          </tr>
        </table>
        <![endif]-->
      </div>
    </div>
  </body>
</html>`
      },
      recipients: [{address: email}]
    }).then((data) => console.log(data))
    .catch((err) => {
      console.log("Whoops! Something went wrong");
      console.log(err);
    });
};

module.exports = sendEmail;
