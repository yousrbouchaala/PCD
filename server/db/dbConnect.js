const mongoose = require("mongoose");
DB_URL=process.env.DB_URL
async function dbConnect() {
  // use mongoose to connect this app to our database on mongoDB using the DB_URL (connection string)
  mongoose
    .connect(
        DB_URL
    )
    .then(() => {
      console.log("Successfully connected ");
    })
    .catch((error) => {
      console.log("Unable to connect ");
      console.error(error);
    });
}

module.exports = dbConnect;