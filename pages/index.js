import Head from "next/head";
import fs from "fs";
import glob from "glob-promise";
import matter from "gray-matter";
import path from "path";
import styles from "../styles/Home.module.css";
import SiteLayout from "../layouts/SiteLayout";
import SearchBar from "../components/SearchBar";

export const getStaticProps = async () => {
  // Find all Markdown files in the /articles directory
  const ARTICLES_DIR = path.join(process.cwd(), "pages/articles");
  const articlesPaths = await glob("**/*.md", { cwd: ARTICLES_DIR });

  const articles = articlesPaths.map((articlePath) => {
    // get the slug from the markdown file name
    const slug = path.basename(articlePath, path.extname(articlePath));
    // Get the topic from the folder name
    const topic = path.basename(path.dirname(articlePath));
    // read the markdown files
    const source = fs.readFileSync(
      path.join(process.cwd(), "pages/articles", articlePath),
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
      topic,
    };
  });
  return {
    props: {
      articles,
    },
  };
};

export default function Home({ articles }) {  
  return (
   <div className={styles.container}>
    <Head>
     <title>Home</title>
     <meta name="description" content="This is my Next.js site" />
     <link rel="icon" href="/icon.png" />
    </Head>
    <section>
     <header className="flex flex-col items-center justify-around min-h-screen">
      <div className="flex flex-col items-center justify-center">
        <h1 className="font-extrabold text-7xl">Samiyah Hoque</h1>
        <p className="text-2xl p-4">Welcome To My Blog</p>
      </div>
      <div className="mt-[-350px]">
        <SearchBar articles = {articles} />
      </div>
     </header>
    </section>
   </div>
  );
}

// define layout for home page
Home.getLayout = (page) => {
  return <SiteLayout> {page} </SiteLayout>;
};