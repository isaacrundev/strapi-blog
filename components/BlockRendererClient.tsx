"use client";
import Image from "next/image";

import {
  BlocksRenderer,
  type BlocksContent,
} from "@strapi/blocks-react-renderer";
import Link from "next/link";

export default function BlockRendererClient({
  content,
}: {
  readonly content: BlocksContent;
}) {
  if (!content) return null;
  return (
    <BlocksRenderer
      content={content}
      blocks={{
        paragraph: ({ children }) => <p>{children}</p>,
        heading: ({ children, level }) => {
          switch (level) {
            case 1:
              return <h1>{children}</h1>;
            case 2:
              return <h2>{children}</h2>;
            case 3:
              return <h3>{children}</h3>;
            case 4:
              return <h4>{children}</h4>;
            case 5:
              return <h5>{children}</h5>;
            case 6:
              return <h6>{children}</h6>;

            default:
              return <h1>{children}</h1>;
          }
        },
        list: ({ children, format }) => {
          switch (format) {
            case "ordered":
              return <ol>{children}</ol>;
            case "unordered":
              return <ul>{children}</ul>;

            default:
              return <ol>{children}</ol>;
          }
        },
        link: ({ children, url }) => <Link href={url}>{children}</Link>,
        image: ({ image }) => {
          console.log(image);
          return (
            <Image
              src={image.url}
              width={image.width}
              height={image.height}
              alt={image.alternativeText || ""}
            />
          );
        },
      }}
      modifiers={{
        bold: ({ children }) => <strong>{children}</strong>,
        italic: ({ children }) => <i>{children}</i>,
      }}
    />
  );
}

// "use client";
// import {
//   BlocksRenderer,
//   type BlocksContent,
// } from "@strapi/blocks-react-renderer";

// export default function BlockRendererClient({
//   content,
// }: {
//   readonly content: BlocksContent;
// }) {
//   if (!content) return null;
//   return <BlocksRenderer content={content} />;
// }
