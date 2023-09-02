"use client";
import { Col, Row } from "antd";
import blogData from "../Data";
import Link from "next/link";
import Footer from "@components/Footer/Footer";

function getRandomArticles(count) {
  // Shuffle the blogData array randomly
  const shuffledData = [...blogData].sort(() => Math.random() - 0.5);

  // Slice the first `count` articles as random articles
  const randomArticles = shuffledData.slice(0, count);

  return randomArticles;
}

const page = ({ params }) => {
  const randomArticles = getRandomArticles(4);

  const selectedBlog = blogData.find(
    (blog) => blog.blogId === Number(params.blog)
  );

  if (!selectedBlog) {
    return (
      <div>
        <h1 className="mt-40">Blog Post Not Found</h1>
      </div>
    );
  }
  console.log(selectedBlog.blogId);
  const scrollToSection = (sectionId) => {
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
      const offset = window.innerWidth >= 1159 ? 1130 : 400;
      window.scrollTo({
        top: targetSection.offsetTop + offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <div>
      {/* <h1 className='mt-40'>{selectedBlog.heading}</h1>
    <img src={selectedBlog.image} alt={selectedBlog.heading} />
    {selectedBlog.description && <p>{selectedBlog.description}</p>}
    Render the rest of the content for the selected blog post */}

      <>
        <Row>
          <Col
            className="mx-auto mt-40"
            xs={{ span: 20 }}
            lg={{ span: 24 }}
          ></Col>

          <Col xs={{ span: 0 }} lg={{ span: 1 }}></Col>
          <Col className="mx-auto mt-0" xs={{ span: 20 }} lg={{ span: 12 }}>
            <h1 className="mx-auto mt-0 text-4xl text-amber-700 mb-4">
              {selectedBlog.heading}
            </h1>
            <img
              className="mx-auto justify-center max-w-full"
              src={selectedBlog.image}
              alt=""
            />

            <div className="mt-10 bg-faf9f9 p-10 rounded-lg shadow-md mb-10 shadow-top">
              <h3 className="text-1.5rem mb-10 font-Poppins text-2xl">
                Table of Contents
              </h3>
              <ul className="list-none p-0">
                {selectedBlog.table_of_contents.map((content, index) => (
                  <li key={index}>
                    <a
                      className="no-underline text-black transition duration-300 hover:text-c07c45 font-Poppins text-xl"
                      href={`#${content.header_id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(content.header_id);
                      }}
                    >
                      <h1>
                        {index + 1}. {content.header}
                      </h1>
                    </a>
                  </li>
                ))}
                {/* Add more links for other topics */}
              </ul>
            </div>
          </Col>
          <Col xs={{ span: 0 }} lg={{ span: 2 }}></Col>

          <Col className="hidden lg:block" xs={{ span: 20 }} lg={{ span: 6 }}>
            <div className="">
              <h1 className="text-4xl text-center font-Poppins mb-5">
                Who Am I ?
              </h1>
              <img
                className="w-auto mr-0 mb-5"
                src="/assets/images/tiran.png"
                alt=""
              />
            </div>
            <p className="text-center text-16 font-Poppins leading-1.4 mb-5">
              My name is Tiran Jayasekara! a Developper, blogger, veterinarian
              and above all, animal lover. Not to be proud, but I kind of know
              how to take everything along. I am kind of a person whom you call
              pet person. I don’t just live around pets, I observe their
              behavior, their ongoing and down going, there response to weather,
              and everything else that needed to be studied about pets,
            </p>
            <h4 className="h-30 outline_btn w-40 text-center ml-auto mr-auto mb-5">
              <button> Rede more</button>
            </h4>

            <h2 className="text-2xl">Latest</h2>
            <hr />

            {randomArticles.map((article, index) => (
              <Row key={index}>
                <Col className="mt-6" xs={{ span: 20 }} lg={{ span: 8 }}>
                  <img
                    className="mx-auto justify-center max-w-full"
                    src={article.image}
                    alt=""
                  />
                </Col>

                <Col className="mt-0" xs={{ span: 20 }} lg={{ span: 16 }}>
                  <h5 className="ml-8 text-md  text-amber-700 mt-10 font-Poppins">
                    <Link href={`/breedpost${article.blogId}`}>
                      {article.heading}
                    </Link>
                  </h5>
                </Col>
              </Row>
            ))}
          </Col>
          <Col xs={{ span: 0 }} lg={{ span: 2 }}></Col>
        </Row>

        <Row>
          <Col
            className="mx-auto mt-0 mb-20"
            xs={{ span: 20 }}
            lg={{ span: 20 }}
          >
            <div id="optimal-physical-performance">
              {/* Remove the <p> tag and render the <ul> directly */}
              <ul>
                {selectedBlog.table_of_contents.map((content, index) => (
                  <li key={index} id={content.header_id}>
                    <h6 className="font-Poppins text-start text-3xl font-medium text-black mt-10 mb-4">
                      {content.header}
                    </h6>
                    <p className="text-xl text-justify">
                      {content.description}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </Col>
        </Row>

        <div className="flex justify-center gap-3 md:gap-10 mb-10">
          <Link
            href={`/blogs/${selectedBlog.blogId - 1}`}
            className={`outline_btn ${
              selectedBlog.blogId === 1
                ? "pointer-events-none text-gray-500"
                : ""
            }`}
          >
            Previews
          </Link>
          <Link href="/blogs" className="outline_btn">
            Blogs
          </Link>
          <Link
            href={`/blogs/${selectedBlog.blogId + 1}`}
            className={`outline_btn ${
              selectedBlog.blogId === 14
                ? "pointer-events-none text-gray-500"
                : ""
            }`}
          >
            Next
          </Link>
        </div>
        <Footer/>
      </>
    </div>
  );
};

export default page;
