import { Fragment } from "react";
import Head from "next/head";
import { getDatabase, getPage, getBlocks } from "../lib/notion";
import Layout from "../layout/Layout.js"
export default function Index({ page, blocks }) {

  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <title>{page.properties.Title.title[0].plain_text}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#0EC604" />

        <meta name="title" content={page.properties.Title.title[0].plain_text} />
        <meta name="description" content={page.properties.Info.rich_text[0].plain_text} />
        <meta property="og:title" content={page.properties.Title.title[0].plain_text} />
        <meta
          property="og:description"
          content={page.properties.Info.rich_text[0].plain_text}
        />
        <meta
          property="og:image"
          content="/meta.png"
        />

        <meta property="twitter:card" content="summary" />
        <meta property="twitter:title" content={page.properties.Title.title[0].plain_text} />
        <meta property="twitter:description" content={page.properties.Info.rich_text[0].plain_text} />
        <meta property="twitter:image" content="/meta.png"></meta>
      </Head>
      <Layout page={page} blocks={blocks} />
    </div>
  );
}

export const getStaticProps = async () => {
  // When you want to add citations as database add this
  // const database = await getDatabase('');
  const page = await getPage(process.env.NEXT_PUBLIC_NOTION_PAGE_ID);
  const blocks = await getBlocks(process.env.NEXT_PUBLIC_NOTION_PAGE_ID);
  return {
    props: {
      page,
      blocks,
    },
    revalidate: 1,
  };
};
