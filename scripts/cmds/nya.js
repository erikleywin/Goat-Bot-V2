module.exports = {
      config: {
          name: "nya",
              aliases: ["ny"],
                  version: "1.0",
                      author: "Erik Styn",
                          countDown: 5,
                              role: 0,
                                  shortDescription: "command nya",
                                      longDescription: "command nya versi ku",
                                          category: "info",
                                              guide: "{pn}nya"
                                                },

                                                  onStart: async function ({ message }) {
                                                      message.reply("Nyaa! Aku masih disini.\n\nOwner : *Erik Styn*");
                                                        }
                                                        };
}