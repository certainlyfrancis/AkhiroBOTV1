const fs = require('fs');

module.exports = {
  config: {
    name: "fbblock",
    aliases: ["block", "fbban"],
    credits: 'Eugene Aguilar | Rui & Akhiro',
    description: 'Block or unblock a user from using the bot',
    role: 1,
    usage: 'fbuser [uid/mention] [block/unblock]',
  },

  onRun: async function ({ api, event, args }) {
    if (args.length < 2) {
      api.sendMessage('Please provide both a user ID or mention and an action (block/unblock).', event.threadID, event.messageID);
      return;
    }

    let targetUserID;
    if (event.mentions.length > 0) {
      targetUserID = event.mentions[0].id;
    } else if (args[0].match(/^\d+$/)) {
      targetUserID = args[0];
    } else {
      api.sendMessage('Invalid user ID or mention provided.', event.threadID, event.messageID);
      return;
    }

    const action = args[1].toLowerCase();

    if (action === 'unblock') {
      api.changeBlockedStatus(targetUserID, false, (err) => {
        if (err) {
          api.sendMessage(`Failed to unblock user ${targetUserID}: ${err}`, event.threadID, event.messageID);
        } else {
          api.sendMessage(`Successfully unblocked user ${targetUserID}`, event.threadID, event.messageID);
        }
      });
    } else if (action === 'block') {
      api.changeBlockedStatus(targetUserID, true, (err) => {
        if (err) {
          api.sendMessage(`Failed to block user ${targetUserID}: ${err}`, event.threadID, event.messageID);
        } else {
          api.sendMessage(`Successfully blocked user ${targetUserID}`, event.threadID, event.messageID);
        }
      });
    } else {
      api.sendMessage('Invalid action. Please use "block" or "unblock".', event.threadID, event.messageID);
    }
  }
};
