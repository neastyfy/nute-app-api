import app from "./app.js";
import { connectToDatabase } from "./db/connection.js";

const startServer = () => {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

const initialize = async () => {
  await connectToDatabase();
  startServer();
};

initialize();