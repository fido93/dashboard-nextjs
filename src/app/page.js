import styles from "./page.module.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import UserList from "./components/user-list";

export default function Home() {
  return (
    <main className={styles.main}>
      {/* <WrapperTable /> */}
      <Header />
      <UserList />
      <Footer />
    </main>
  );
}
