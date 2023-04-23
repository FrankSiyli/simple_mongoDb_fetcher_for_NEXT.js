export async function getServerSideProps() {
  let res = await fetch("http://localhost:3000/api/sessions", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  let sessions = await res.json();

  return {
    props: { sessions },
  };
}

export default function Home({ sessions }) {
  return (
    <>
      <p>{sessions.map((session) => session.title)}</p>
    </>
  );
}
