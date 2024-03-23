module.exports = {
  config: {
    name: "restart",
    description: "Restart your akhirobot",
    role: 1,
    usage: "restart",
    author: "Rui",
  },
  onRun: async ({ api, event, args }) => {
    await api.sendMessage("⏳ | 𝗥𝗲𝘀𝘁𝗮𝗿𝘁𝗶𝗻𝗴...", event.threadID, event.messageID);

		process.exit(2);
  },
};
