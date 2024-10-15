/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */

"use client";

import BlogItem from "@/components/app/blog-item";
import { Button } from "@/components/ui/button";
import { LayoutValue } from "@/helpers/constants";
import { courseItemImages } from "@/helpers/mock";
import { ChevronRight } from "lucide-react";

const BlogDetails = () => {
  return (
    <div className="main-content gap-10">
      {/*  */}
      <div className="b-dt-section1 grid grid-cols-1 xl:grid-cols-2 xl:h-[380px] gap-8">
        <div className="flex flex-col gap-3 xl:gap-0 justify-between">
          <div className="flex items-center gap-2 text-base cursor-pointer">
            <h4>
              <a href="">Blog</a>
            </h4>
            <ChevronRight size={22} />
            <h4>
              <a href="">Get Interviews</a>
            </h4>
          </div>
          <h1 className="text-[28px] lg:text-[38px] font-semibold">
            27 Essential Data Engineer Interview Questions and Answers
          </h1>
          <div className="flex flex-col gap-1">
            <span className="text-base">
              <span className="">By</span>{" "}
              <span className="font-bold">Dan Klos</span>
            </span>
            <div className="flex items-center gap-2">
              <span>Get Interviews</span>{" "}
              <span className="font-bold text-xl">•</span>{" "}
              <span>5 min read</span>
            </div>
          </div>
        </div>
        <img
          className="rounded-xl xl:h-[380px] w-full object-contain xl:object-cover"
          src="/blog-image.png"
          alt=""
        />
      </div>

      {/*  */}
      <div className="b-dt-section2 flex flex-col xl:grid xl:grid-cols-3 xl:items-start gap-16">
        <div className="flex flex-col order-2 xl:order-1 gap-10 xl:col-span-2">
          <div className="flex flex-col">
            <p>
              {`Data engineering has seen exponential growth over the last decade,
            alongside the massive increase in data production and utilization
            across industries. This surge has led to a significant demand for
            skilled data engineers capable of managing, analyzing data
            processing, and converting raw data into actionable insights. If
            you're planning on becoming a data engineer or advancing to a
            managerial position, it's important to prepare for the interview
            process by studying the questions they'll be asking you.`}
            </p>
            <div className="flex flex-col gap-2 my-5 self-center items-center justify-center">
              <h1 className="font-semibold text-lg text-center">
                Looking for a Data Engineering Job?
              </h1>
              <Button className="bg-[#6805DA] text-white uppercase rounded-[100px] max-w-max">
                Automate your Applications
              </Button>
            </div>
            <p>
              {`This guide is tailored for Data Engineers and Engineering Managers
            preparing for technical interviews. We'll walk through 27 critical
            interview questions covering various areas from data modeling and
            ETL tools to data processing and data infrastructure.`}
            </p>

            <div className="flex flex-col gap-2 my-5 self-center items-center justify-center">
              <h1 className="font-semibold text-lg text-center">
                Ready to Start Applying?
              </h1>
              <Button className="bg-[#6805DA] text-white uppercase rounded-[100px] max-w-max">
                Get 40% More Interviews
              </Button>
            </div>
            <p>
              Tailoring your responses with specific examples from your
              experiences will make your answers more compelling. Remember, the
              goal is to not only demonstrate your technical expertise but also
              to:
              <ol className="">
                <li>highlight your problem-solving abilities</li>
                <li>showcase your adaptability to new technologies</li>
                <li>
                  establish your capacity to think critically about data
                  infrastructure challenges
                </li>
                <li>
                  express your commitment to ensure data quality and data
                  security
                </li>
                <li>
                  When preparing for your data engineering interview, focus on
                  the broader implications of your work.
                </li>
              </ol>
              <p>
                How does data engineering drive business value? How do you stay
                updated with emerging data science technologies and
                methodologies? Your answers to these questions will help paint a
                picture of you not just as a technical specialist, but as a
                strategic thinker and
              </p>
            </p>
          </div>
          {/* Author card */}
          <div className="b-dt-author flex flex-col gap-4 px-5 py-4 border bg-[#6805DA]/15 rounded-xl">
            <h1 className="text-[28px] font-bold">Author</h1>
            <div className="flex flex-col lg:flex-row gap-3 items-start lg:items-center">
              <img
                className="size-16 object-cover rounded-full"
                src="https://cdn.prod.website-files.com/65dcdc8067ad38483fe3b6e0/6601b6621a7a71fd58d7b5c2_Avatar.jpg"
                alt=""
              />
              <div className="flex w-full items-center grow justify-between">
                <div className="flex flex-col">
                  <h1 className="font-bold text-lg lg:text-xl">Dan Klos</h1>
                  <p className="text-sm lg:text-base">
                    Co-Founder & CEO @applypass
                  </p>
                </div>
                <a href="">
                  <img
                    className="rounded-full size-10 lg:size-16"
                    src="/linkedin.svg"
                    alt=""
                  />
                </a>
              </div>
            </div>
            <p className="text-[#667085]">
              Dan has spent the last 8 years helping software engineers level up
              their career. He created Outco to help over 2,000+ engineers
              secure top-paying job offers. Currently, his entire focus is on
              building ApplyPass to aid engineers in getting 40% more interviews
              and saving more than 5 hours per week on job applications. When
              he's not at work, he's deeply involved in activism, challenging
              hikes, and canoeing.
            </p>
          </div>
        </div>
        <div className="flex flex-col order-1 xl:order-2 gap-8">
          <div className="flex flex-col gap-3 border bg-[#6805DA]/15 p-3 lg:p-5 rounded-lg">
            <h1 className="text-lg font-bold uppercase">Table of contents</h1>
            <ol className="flex flex-col gap-3">
              <li>
                <a href="">
                  Working with Cloud-based Data Storage and Processing Platforms
                </a>
              </li>
              <li>
                <a href="">
                  Working with Cloud-based Data Storage and Processing Platforms
                </a>
              </li>
              <li>
                <a href="">
                  Working with Cloud-based Data Storage and Processing Platforms
                </a>
              </li>
              <li>
                <a href="">
                  Working with Cloud-based Data Storage and Processing Platforms
                </a>
              </li>
              <li>
                <a href="">
                  Working with Cloud-based Data Storage and Processing Platforms
                </a>
              </li>
              <li>
                <a href="">
                  Working with Cloud-based Data Storage and Processing Platforms
                </a>
              </li>
            </ol>
          </div>

          <div className="flex flex-col gap-3">
            <h1 className="text-base font-bold uppercase">
              Share this article
            </h1>
            <div className="flex items-center gap-3">
              <div className="size-16 rounded-full bg-[#6805DA]/5"></div>
              <div className="size-16 rounded-full bg-[#6805DA]/5"></div>
              <div className="size-16 rounded-full bg-[#6805DA]/5"></div>
              <div className="size-16 rounded-full bg-[#6805DA]/5"></div>
            </div>
          </div>
        </div>
      </div>

      {/*  */}
      <div className="b-dt-section3">
        <h1 className="font-bold text-[30px] mb-4">Similar Blogs</h1>
        <div>
          <div
            className={`transition-all ease-in duration-200 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[25px]`}
          >
            <BlogItem style={LayoutValue.Grid} image={courseItemImages[0]} />
            <BlogItem style={LayoutValue.Grid} image={courseItemImages[1]} />
            <BlogItem style={LayoutValue.Grid} image={courseItemImages[2]} />
          </div>
        </div>
      </div>

      {/*  */}
      <div className="b-dt-section4 flex flex-col gap-5 items-center text-white bg-gradient-to-r from-[#6805DA] to-[#8770a1] rounded-xl py-10">
        <img src="/logoMin.svg" className="size-20" alt="" />
        <h1 className="font-bold text-xl">Want to learn more ?</h1>
        <p className="text-center">
          Simply create an account, submit applications and start getting
          interviews
        </p>
        <Button className="bg-[#6805DA] text-white uppercase rounded-[100px] px-10">
          CREATE ACCOUNT
        </Button>
      </div>
    </div>
  );
};

export default BlogDetails;
