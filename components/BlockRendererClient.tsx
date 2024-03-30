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
              return <h1 className="text-4xl sm:text-5xl">{children}</h1>;
            case 2:
              return <h2 className="text-3xl">{children}</h2>;
            case 3:
              return <h3 className="text-2xl">{children}</h3>;
            case 4:
              return <h4 className="text-xl">{children}</h4>;
            case 5:
              return <h5 className="text-lg">{children}</h5>;
            case 6:
              return <h6>{children}</h6>;

            default:
              return <h1 className="text-4xl sm:text-5xl">{children}</h1>;
          }
        },
        list: ({ children, format }) => {
          switch (format) {
            case "ordered":
              return <ol className="list-decimal">{children}</ol>;
            case "unordered":
              return <ul className="list-disc">{children}</ul>;

            default:
              return <ol className="list-decimal">{children}</ol>;
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
