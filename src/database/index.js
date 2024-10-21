const { default: mongoose } = require("mongoose");

const connectToDB = async () => {
  const connectionURL =
    "mongodb+srv://gokul:gokul@cluster0.ifc0nfa.mongodb.net/";

  mongoose
    .connect(connectionURL)
    .then(() => console.log("jon board database connection is successfull"))
    .catch((error) => console.log(error));
};

export default connectToDB;
