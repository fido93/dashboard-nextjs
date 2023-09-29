import styles from "./page.module.css";
import TableUsers from "./components/Table";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <TableUsers />
      <Footer />
    </main>
  );
}
