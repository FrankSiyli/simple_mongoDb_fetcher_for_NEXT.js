import { MongoClient } from "mongodb";
import { ObjectId } from "mongodb";

export async function getServerSideProps() {
  const client = await MongoClient.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const db = client.db();

  const sessions = await db.collection("sessions").find().toArray();

  client.close();

  const serializedSessions = sessions.map((session) => {
    session._id = session._id.toString();
    return session;
  });

  return {
    props: { sessions: serializedSessions },
  };
}

export default function Home({ sessions }) {
  return (
    <>
      <p>{sessions.map((session) => session.title)}</p>
    </>
  );
}
