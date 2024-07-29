"use client";

import { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Image from "next/image";
import newsImage from "@/public/news.png";
import "bootstrap/dist/css/bootstrap.min.css";

const mockNews = [
  {
    newsImage: newsImage,
    title: "伦敦打比！垃圾车拦路？",
    description: "英超 2024-04-22",
  },
  {
    newsImage: newsImage,
    title: "Second slide label",
    description: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
  },
  {
    newsImage: newsImage,
    title: "Third slide label",
    description: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
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
    <Carousel.Item key={index}>
      <Image src={news.newsImage} alt={news.title} />
    </Carousel.Item>
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
    <div className="h-full max-w-md pt-4">
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {newsCarousel}
      </Carousel>
      <h3 className="text-black font-bold pt-1">{currentTitle}</h3>
      <text className="text-gray-500">{currentDescription}</text>
      <div className="flex flex-row justify-center w-full h-fit mt-3  border-gray-200 border-b-[1px]">
        {indexIndicator}
      </div>
    </div>
  );
};

export default NewCarousel;
