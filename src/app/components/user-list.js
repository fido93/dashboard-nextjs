import { setUsersList } from "@/redux/features/getUserSlice";
import { store } from "@/redux/store";
import WrapperTable from "./WrapperTable";

export default async function UserList() {
  const req = await fetch("https://reqres.in/api/users");
  const data = await req.json();
  store.dispatch(setUsersList(data));

  return (
    <main>
      <WrapperTable />
    </main>
  );
}
