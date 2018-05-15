const line = require('@line/bot-sdk');

const client = new line.Client({
  channelAccessToken: '<channel access token>'
});

client.getProfile('<userId>')
  .then((profile) => {
    console.log(profile.displayName);
    console.log(profile.userId);
    console.log(profile.pictureUrl);
    console.log(profile.statusMessage);
  })
  .catch((err) => {
    // error handling
  });
