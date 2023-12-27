// const creatKey = require("./createKey");
// const sendEmail = require("./sendEmail");

// exports.handler = async(event, context, callback) => {
//   const data = JSON.parse(event.body).payload;
//   await creatKey(data).then(
//     (result) => {
//       sendEmail(result);
//       callback(null, {
//         statusCode: 200,
//         headers: {
//           "Access-Control-Allow-Origin": "*"
//         },
//         body: JSON.stringify({message: result})
//       });});
// };

exports.handler = async function (event, context) {
  const data = event.queryStringParameters;
  return {
    statusCode: 200,
    body: JSON.stringify({ message: data })
  };
};
