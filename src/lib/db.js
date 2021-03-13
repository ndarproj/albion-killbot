const mongoose = require("mongoose");
module.exports = {
  async connect() {
    console.log("mogodb");
    mongoose.connection
      .on("error", (err) => console.log(err))
      .once("open", () => console.log("Connected to MongoDB"));

    await mongoose.connect(process.env.MONGODB_URI, {
      keepAlive: 1,
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });
  },
};
