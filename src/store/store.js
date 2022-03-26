require("dotenv").config();
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require("twilio")(
  "ACd755b951f39113b748318172a485f8f0",
  "ea32ea6cf3d5e0966f41f7a52abb9d0c"
);
const myNumber = "+17572948749";

const state = {
  userDetails: {},
};
const mutations = {};

const actions = {
  sendMessage({}, payload) {
    console.log("yoyo");
    client.messages
      .create({
        body: payload.name,
        from: myNumber,
        to: payload.phonenumber,
      })
      .then((message) => console.log(message.sid))
      .catch((err) => console.log(err));
  },
};

const getters = {};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
