var OAuth = require("oauth")

const appIdYahoo = `OtQTxa34`
const secretKey = `43f01801eb297d0165bee8b9e433a9166fa096fb`
const clientId = `dj0yJmk9NVFmc2FNYXdJMDlMJmQ9WVdrOVQzUlJWSGhoTXpRbWNHbzlNQS0tJnM9Y29uc3VtZXJzZWNyZXQmc3Y9MCZ4PWJh`

const header = {
  "X-Yahoo-App-Id": appIdYahoo
};

const request = new OAuth.OAuth(
    null,
    null,
    clientId,
    secretKey,
    '1.0',
    null,
    'HMAC-SHA1',
    null,
    header
);

export { request as api };
// exports.myFunc2 = myFunc2;