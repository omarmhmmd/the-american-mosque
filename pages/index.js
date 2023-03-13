import Head from "next/head";
import Link from "next/link";
import { getDatabase } from "../lib/notion";
import { Text } from "./[id].js";
import styles from "./index.module.css";

export const databaseId = process.env.NEXT_PUBLIC_NOTION_DATABASE_ID;

export default function Home({ posts }) {
  return (
    <div>
      <Head>
        <title>omars blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.container}>
        <div className={styles.posts}>
          {posts.map((post) => {
            console.log(posts)
            const date = new Date(post.last_edited_time).toLocaleString(
              "en-US",
              {
                month: "short",
                day: "2-digit",
                year: "numeric",
              }
            );
            return (
              <div key={post.id} className={styles.post}>
                <div className={styles.postTitle}>
                  <Link href={`/${post.id}`}>
                    <Text text={post.properties.Name.title} />
                  </Link>
                </div>
                <div className={styles.postDescription}>{date}</div>
                <Link href={`/${post.id}`}>Read post →</Link>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}

export const getStaticProps = async () => {
  const database = await getDatabase(databaseId);

  return {
    props: {
      posts: database,
    },
    revalidate: 1,
  };
};
