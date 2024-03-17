import Link from "next/link";
import { Fragment } from "react";
import { v4 } from "uuid";

type Category = { name: string; link: string };

const categories: Category[] = [
  { name: "Adventure", link: "" },
  { name: "Food", link: "" },
  { name: "Web", link: "" },
];

export default function Header() {
  return (
    <header className="space-y-2">
      <div className="space-y-2">
        <Link href="/">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            My Blog
          </h1>
        </Link>
        <p className="text-gray-500 dark:text-gray-400">
          Musings on technology, design, and the web
        </p>
      </div>
      <nav className="flex items-center space-x-4">
        {categories.map((category) => (
          <Fragment key={v4()}>
            <Link
              className="font-medium tracking-tight border-b-2 border-transparent hover:text-gray-900 dark:hover:text-gray-100 dark:hover:underline"
              href="/category/"
            >
              {category.name}
            </Link>
          </Fragment>
        ))}
      </nav>
    </header>
  );
}
