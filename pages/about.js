import Head from "next/head";
// import styles from "../styles/Home.module.css";
import SiteLayout from "../layouts/SiteLayout";
import Image from "next/image";

export default function About() {
  return (
    <div className="container mx-auto p-8">
      <Head>
        <title>About Me</title>
        <meta name="description" content="Learn more about me" />
        <link rel="icon" href="/icon.png" />
      </Head>

      <div className="flex flex-col justify-around md:flex-row">

        <div className="md:w-2/3 md:pr-10 md:pl-20 md:pt-10">
          <h1 className="text-4xl font-bold mb-4">About Me</h1>
          <p className="text-md mb-4">
            I am a rising senior at Stony Brook University, where I am enrolled in the Computer Science Honors Program. My specialization lies in Artificial Intelligence and Data Science, complemented by a minor in Environmental Humanities.
          </p>
          <p className="text-md mb-4">
            Within the field of computer science, my primary interests revolve around computer systems and artificial intelligence/machine learning. I am driven by a strong desire to develop technical solutions that address humanitarian issues, regardless of the specific skills required.
          </p>
          <p className="text-md mb-4">
            Through this blog, I aim to document my journey and share insights as I delve into new technologies. It is my hope that this blog will serve as a helpful guide for anyone who shares similar interests and aspirations.
          </p>
          <p className="text-md mb-4">
            I am always available at <span><a href="mailto:samiyahhoque22@gmail.com"> samiyahhoque22@gmail.com</a></span> for questions, comments, or concerns...
          </p>
        </div>

        <div className="md:w-1/3 md:pr-10 md:pl-20 md:pt-10">
          <Image
            src="/profile-photo.jpg"
            alt="Profile Photo"
            width={300}
            height={300}
            className="rounded-2xl"
          />
        </div>
      </div>

      <div className="md:pt-24">
        <h2 className="text-1xl font-bold mb-4 text-center pt-7">Relevant Courses</h2>
        <p className="flex justify-center text-sm font-semi-bold">
            Theory of Computation: Honors &nbsp;
            Analysis of Algorithms: Honors &nbsp;
            Fundamentals of Software Development &nbsp;
            Data Structures and Programming Abstractions: Honors &nbsp;
            User Interface &nbsp;
            Computer Networks &nbsp;
            Foundations of Computer Science: Honors &nbsp;
            Procedural and Object-Oriented Programming: Honors &nbsp;
            System Fundamentals I &nbsp;
            System Fundamentals II &nbsp;
            Technical Communication &nbsp;
            Machine Learning &nbsp;
            Introduction to Robotics &nbsp;
            Applied Linear Algebra &nbsp;
            Finite Mathematical Structures &nbsp;
            Survey of Probabibility and Statistics &nbsp;
            Calculus II
        </p>
    </div>
    </div>
  );
};

// define layout for home page
About.getLayout = (page) => {
  return <SiteLayout> {page} </SiteLayout>;
};