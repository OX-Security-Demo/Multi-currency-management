const BitGoJS = require('bitgo');
// Read the user authentication section to get your API access token
const bitgo = new BitGoJS.BitGo({
  env: 'test',
  accessToken: process.env.ACCESS_TOKEN,
});
const coin = bitgo.coin('tbtc');
