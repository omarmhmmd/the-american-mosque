import { Fragment } from "react";
import Head from "next/head";
import { getDatabase, getPage, getBlocks } from "../lib/notion";
import Layout from "../layout/Layout.js"
export default function Index({page, blocks}) {
  
  return (
    <div>
      <Head>
        <title>{page.properties.Title.title[0].plain_text}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#E3CA7E"/>
      </Head>
     <Layout page ={page} blocks={blocks}/>
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
