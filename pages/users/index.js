import Link from "next/link";
import Head from "next/head";
const Users = () => {
  return (
    <div>
      <Head>
        <title>Tenjin | Users</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      This is users page
      <Link href="https://github.com/RoySounak/nextYethi">
        <a target="_blank">
          <h2 style={{ cursor: "pointer" }}>Go to Source Code</h2>
        </a>
      </Link>
    </div>
  );
};

export default Users;
