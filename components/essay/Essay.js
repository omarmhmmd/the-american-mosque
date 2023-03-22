import { Fragment } from "react";
import styles from "./essay.module.css";
import Text from "../../structure/text/Text.js";
import Image from 'next/image'

// const renderNestedList = (block) => {
//   const { type } = block;
//   const value = block[type];
//   if (!value) return null;
//   const isNumberedList = value.children[0].type === "numbered_list_item";

//   if (isNumberedList) {
//     return <ol>{value.children.map((block) => renderBlock(block))}</ol>;
//   }
//   return <ul>{value.children.map((block) => renderBlock(block))}</ul>;
// };

const renderBlock = (block) => {
  const { type, id } = block;
  const value = block[type];

  switch (type) {
    case "paragraph":
      return (
        <p className={styles.text}>
          <Text text={value.rich_text} />
        </p>
      );
    case "callout":
      const info = value.rich_text ? value.rich_text[0]?.plain_text : "";
      const infoLink = value.rich_text ? value.rich_text[1]?.plain_text : "";
      return (
        <p className={styles.callOut}>
          {info}{" "}
          <a target="_blank" href={value.rich_text[1]?.href}>
            {infoLink}
          </a>{" "}
        </p>
      );
    case "heading_1":
      return (
        <div className={styles.header}>
          <h1>
            <Text text={value.rich_text} />
          </h1>
        </div>
      );
    case "heading_2":
      return (
        <div className={styles.header}>
          <h2>
            <Text text={value.rich_text} />
          </h2>
        </div>
      );
    case "heading_3":
      return (
        <div className={styles.header}>
          <h3>
            <Text text={value.rich_text} />
          </h3>
        </div>
      );
    case "numbered_list": {
      return <ol>{value.children.map((child) => renderBlock(child))}</ol>;
    }
    case "numbered_list_item":
      return (
        <li className={styles.list} key={block.id}>
          <Text text={value.rich_text} />
          {!!value.children && renderNestedList(block)}
        </li>
      );
    case "image":
      const src =
        value.type === "external" ? value.external.url : value.file.url;
      const caption = value.caption ? value.caption[0]?.plain_text : "";
      const link = value.caption ? value.caption[1]?.plain_text : "";
      return (
        <figure>
          <img className={styles.img} src={src} alt={caption} />
          {caption && (
            <figcaption>
              {caption}{" "}
              <a target="_blank" href={value.caption[1]?.href}>
                {link}
              </a>{" "}
            </figcaption>
          )}
        </figure>
      );
    case "embed":
      let iframeLink = block.embed.url;
      iframeLink = iframeLink.replace("edit", "embed");
      const embedCap = value.caption ? value.caption[0]?.plain_text : "";
      const embedLink = value.caption ? value.caption[1]?.plain_text : "";
      return (
        <figure>
          <iframe
            className={styles.iframe}
            src={iframeLink}
            title={`iframe ${block.type}`}
            allowFullScreen
            loading="lazy"
          />
          {embedCap && (
            <figcaption>
              {embedCap}{" "}
              <a target="_blank" href={value.caption[1]?.href}>
                {embedLink}
              </a>{" "}
            </figcaption>
          )}
        </figure>
      );
    case "column_list": {
      return (
        <div className={styles.row}>
          {block.children.map((block) => {
            if (block.children[0].type != "paragraph") {
              return <div className={styles.leftCol}>{renderBlock(block)}</div>
            }
            return renderBlock(block)
          })}
        </div>
      );
    }
    case "column": {
      return (
        <>
          {block.children.map((child) => {
            return renderBlock(child)
          })}
        </>
      );
    }
    default:
      return `❌ Unsupported block (${
        type === "unsupported" ? "unsupported by Notion API" : type
      })`;
  }
};

export default function Post({ page, blocks }) {
  if (!page || !blocks) {
    return <div>Nothing to see here folks</div>;
  }
  return (
    <div className={styles.container}>
      {/* <h1 className={styles.name}>
          <Text text={page.properties.Name.title} />
        </h1> */}
      {blocks.map((block) => (
        <Fragment key={block.id}>{renderBlock(block)}</Fragment>
      ))}
    </div>
  );
}
