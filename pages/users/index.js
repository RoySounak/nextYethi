import Link from "next/link";
const Users = () => {
  return (
    <div>
      This is users page
      <Link href="https://github.com/RoySounak/nextYethi">
        <h2 style={{ cursor: "pointer" }}>Go to Sourec Code</h2>
      </Link>
    </div>
  );
};

export default Users;
