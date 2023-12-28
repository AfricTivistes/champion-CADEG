const creatKey = require("./createKey");
const sendEmail = require("./sendEmail");

exports.handler = async(event, context, callback) => {

  const body = event.body;
  // Convertissez la chaîne en objet FormData
  const formData = new FormData();
  const params = new URLSearchParams(body);

  for (const pair of params.entries()) {
    formData.append(pair[0], pair[1]);
  }

  const data = {};
  formData.forEach((value, key) => {
    data[key] = value;
  });

  // const data = JSON.parse(event.body).payload;
  await creatKey(data).then(
    (result) => {
      sendEmail(result);
      callback(null, {
        statusCode: 200,
        headers: {
          "Access-Control-Allow-Origin": "*"
        },
        body: JSON.stringify({message: result})
      });});
};