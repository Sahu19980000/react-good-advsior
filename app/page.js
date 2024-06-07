import Image from "next/image";
import styles from "./page.module.css";
import Homepage from "../components/homepage";
import Layout  from "../components/shared/layout";
import "./globals.css";

export default function Home() {
  return (
    <div>
      <Layout>
      <Homepage />
      </Layout>
    </div>
  );
}
