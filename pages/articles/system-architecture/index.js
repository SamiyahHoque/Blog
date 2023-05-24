import fs from "fs";
import glob from "glob-promise";
import matter from "gray-matter";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import path from "path";
import SiteLayout from "../../../layouts/SiteLayout";

export const getStaticProps = async () => {
  // Find all Markdown files in the /articles directory
  const ARTICLES_DIR = path.join(process.cwd(), "pages/articles/system-architecture");
  const articlesPaths = await glob("**/*.md", { cwd: ARTICLES_DIR });

  const articles = articlesPaths.map((articlePath) => {
    // get the slug from the markdown file name
    const slug = path.basename(articlePath, path.extname(articlePath));
    // read the markdown files
    const source = fs.readFileSync(
      path.join(process.cwd(), "pages/articles/system-architecture", articlePath),
      "utf8"
    );
    // use gray-matter to parse the article frontmatter section
    const { data } = matter(source);
    const { title, description, cover } = data;

    return {
      title,
      description,
      cover,
      slug,
    };
  });
  return {
    props: {
      articles,
    },
  };
};

const SYS_ARC_Articles = ({ articles }) => {
  return (
    <>
      <Head>
        <title>System Architecture</title>
        <meta name="description" content="View all my articles about system-architecture" />
      </Head>
      <section>
        <header className="articles-header">
          <div className="wrapper">
            <h1 className="font-extrabold text-5xl">
            View all my articles about system architecture
            </h1>
          </div>
        </header>
        <ul className="articles">
          {articles.map((article) => (
            <li key={article.slug} className="article">
              <Link href={`system-architecture/${article.slug}`}>
                <header className="article-item-header">
                  <Image
                    src={article.cover}
                    width={300}
                    height={200}
                    alt="cover"
                  />
                  <div className="details">
                    <h2 className="font-bold text-3xl">{article.title}</h2>
                    <p> {article.description} </p>
                  </div>
                </header>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};
export default SYS_ARC_Articles;

// define layout for articles page
SYS_ARC_Articles.getLayout = (page) => {
  return <SiteLayout> {page} </SiteLayout>;
};