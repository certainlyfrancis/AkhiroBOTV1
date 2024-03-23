const axios = require('axios');

module.exports = {
  config: {
    name: "chat",
    description: "Community driven AI",
    usage: "simi2 [query]",
    author: "Rui",
    aliases: ["simi"],
  },
  onRun: async ({ api, event, args }) => {
    const query = args.join(' ');
    try {
      const response = await axios.get(`https://a-k-h-i-r-o-sim-apiv1.onrender.com/api/chat?message=${query}`);
      const message = response.data.message || "Sorry, I couldn't find a response.";
      api.sendMessage({
        body: message
      }, event.threadID, event.messageID);
    } catch (error) {
      console.error('Error:', error);
      api.sendMessage({
        body: "Sorry, an error occurred while processing your request."
      }, event.threadID, event.messageID);
    }
  },
};
