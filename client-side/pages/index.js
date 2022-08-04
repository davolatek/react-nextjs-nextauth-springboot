import Head from "next/head";
import AddUser from "../components/AddUser";
import Navbar from "../components/Navbar";
import UserList from "../components/UserList";
import { getSession } from "next-auth/react";
import Login from "../components/Login";

export default function Home({ session }) {
  if (!session) return <Login />;
  return (
    <div>
      <Head>
        <title>User Management System</title>
      </Head>

      <Navbar />
      <main>
        <AddUser />
        <UserList />
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  return {
    props: { session },
  };
}
