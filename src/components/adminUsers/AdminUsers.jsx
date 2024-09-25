
import { getUsers } from "@/lib/data";
import Styles from "./adminUsers.module.css";
import Image from "next/image";
import { deleteUser } from "@/lib/actions";
import Link from "next/link";


const AdminUsers = async () => {
  const users = await getUsers();

  return (
    <div className="wrapper">
      <h1>Users</h1>
      {users.map((user) => (
        <div className={Styles.post} key={user.id}>
          <div className={Styles.detail}>
            <Image
              src={user.image || "/noAvatar.png"}
              alt=""
              width={50}
              height={50}
            />
            <Link href={`/users/${user.id}}`} className={Styles.postTitle}>{user.name}</Link>
          </div>
          <form action={deleteUser}>
            <input type="hidden" name="id" value={user.id} />
            <button className={Styles.postButton}>Delete</button>
          </form>
        </div>
      ))}
    </div>
  );
};

export default AdminUsers;