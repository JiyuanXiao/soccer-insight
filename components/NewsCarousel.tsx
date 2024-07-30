"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import newsImage from "@/public/news.png";
import { Carousel } from "flowbite-react";

const mockNews = [
  {
    newsImage: newsImage,
    title: "伦敦打比！垃圾车拦路？",
    description: "英超 2024-04-22", // words limited
  },
  {
    newsImage: newsImage,
    title: "Second slide label",
    description: "Nulla vitae elit libero", // words limited
  },
  {
    newsImage: newsImage,
    title: "Third slide label",
    description: "Nulla vitae elit libero", // words limited
  },
];

const NewCarousel = () => {
  const [index, setIndex] = useState(0);
  const [currentTitle, setCurrentTitle] = useState<string>("");
  const [currentDescription, setCurrentDescription] = useState<string>("");

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  useEffect(() => {
    const currentNews = mockNews.find((_, i) => i === index);
    if (currentNews) {
      setCurrentTitle(currentNews.title);
      setCurrentDescription(currentNews.description);
    }
  }, [index]);

  const newsCarousel = mockNews.map((news, index) => (
    <Image key={index} src={news.newsImage} alt={news.title} />
  ));

  const indexIndicator = mockNews.map((_, i) => (
    <div
      key={i}
      className={`size-2 border-2 rounded m-2 ${
        i === index
          ? "border-amber-400 bg-amber-400"
          : "border-gray-400 bg-gray-400"
      }`}
    ></div>
  ));

  return (
    <div className={`flex flex-col items-center h-full max-w-md pt-4`}>
      <div className=" h-60 w-screen max-w-md ">
        <Carousel
          onSlideChange={(index) => handleSelect(index)}
          indicators={false}
          slideInterval={6000}
        >
          {newsCarousel}
        </Carousel>
      </div>
      <h3 className="self-start text-black font-bold text-xl pt-1 mx-1">
        {currentTitle}
      </h3>
      <text className="self-start text-gray-400 text-sm mx-1">
        {currentDescription}
      </text>
      <div className="flex flex-row justify-center w-full h-fit mt-2  border-gray-200 border-b-[1px]">
        {indexIndicator}
      </div>
    </div>
  );
};

export default NewCarousel;
