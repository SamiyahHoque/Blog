import Head from "next/head";
import { format } from 'date-fns';
import SiteHeader from "../components/SiteHeader";
import SiteFooter from '../components/SiteFooter';

const ArticleLayout = ({ markdoc, children }) => {
    const { title, description } = markdoc?.frontmatter;
    const lastUpdated = markdoc?.frontmatter?.lastUpdated;
    const formattedLastUpdated = lastUpdated ? format(new Date(lastUpdated), 'MMM dd, yyyy') : null;

    return (
     <>
      <Head>
       <title>{title}</title>
       <meta name="description" content={description} />
      </Head>

      <SiteHeader />
      <article className="site-article">
      <div className="wrapper">
        <header className="article-header">
        <div className="wrapper">
          <h1 className="font-extrabold text-6xl">{title}</h1>
          <p className="text-2xl">{description}</p>
          {formattedLastUpdated && (
            <p className="text-gray-500">Last Updated: {formattedLastUpdated}</p>
          )}
        </div>
        </header>
        <div className="article-content prose">{children}</div>
      </div>
      </article>
      <SiteFooter />

     </>
    );
  };
  
  export default ArticleLayout;