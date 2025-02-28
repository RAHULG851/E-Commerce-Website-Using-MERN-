const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id: "AU-8jq691S_9VYOAtf5H6c6qIxYCPd01dgNej_3SmMorP5Y0Px4s7cS1EHTEQIVhkhzkmoXk8R8i3aGX",
  client_secret: "EB57hD9Guh_l-uyKHFkI7SJMyN6Vnv_eS_3BYeZ1gDpDFw4hyPYeMIa0KA0UesDUrljhjVOfSeuqdVoD",
});

module.exports = paypal;
