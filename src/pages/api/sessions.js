const { connectToDatabase } = require("../../../lib/mongodb");

export default async function handler(req, res) {
  let { db } = await connectToDatabase();

  const sessions = await db.collection("sessions").find().toArray();

  res.status(200).json({ sessions });
}
