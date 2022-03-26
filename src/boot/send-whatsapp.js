// function sendMessage() {
// const accountSid = process.env.TWILIO_ACCOUNT_SID;
// const authToken = process.env.TWILIO_AUTH_TOKEN;
// const client = require("twilio")(
//   "ACd755b951f39113b748318172a485f8f0",
//   "ea32ea6cf3d5e0966f41f7a52abb9d0c"
// );
// const myNumber = "+17572948749";
// const other = "+13439983864";
// client.messages
//   .create({
//     body: "fuck you osama",
//     from: myNumber,
//     to: other,
//   })
//   .then((message) => console.log(message.sid))
//   .catch((err) => console.log(err));
// }
export const sendMessage = (Message) => {
  const client = require("twilio")(
    "ACd755b951f39113b748318172a485f8f0",
    "ea32ea6cf3d5e0966f41f7a52abb9d0c"
  );
  const myNumber = "+17572948749";
  const other = "+13439983864";
  client.messages
    .create({
      body: "fuck you osama",
      from: myNumber,
      to: other,
    })
    .then((message) => console.log(message.sid))
    .catch((err) => console.log(err));
  console.log("user Created");
};
