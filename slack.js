const { WebClient } = require('@slack/web-api');

// An access token (from your Slack app or custom integration - xoxp, xoxb)
const slack_token = process.env.SLACK_TOKEN;

const web = new WebClient(slack_token);

// This argument can be a channel ID, a DM ID, a MPDM ID, or a group ID
const conversationId = 'C1232456';

(async () => {
  // See: https://api.slack.com/methods/chat.postMessage
  const res = await web.chat.postMessage({ channel: conversationId, text: 'Hello there' });

  // `res` contains information about the posted message
  console.log('Message sent: ', res.ts);
})();
