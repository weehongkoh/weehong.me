"use client";

import "swiper/css";
import "@/styles/custom-swiper.css";

import Image from "next/image";
import { ReactNode } from "react";

import jsYaml from "js-yaml";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

export default function ImageSlider({ children }: { children: ReactNode }) {
  const content = children as string;
  const images = jsYaml.load(content);
  const isIterable = Array.isArray(images) && images.length > 0;
  const captions: string[] = isIterable
    ? images
        .map((value) => {
          const parts = value.split("|");
          return parts.length > 0 ? parts[parts.length - 1] : "";
        })
        .filter((caption) => {
          if (!caption) return false; // Skip empty captions
          try {
            new URL(caption);
            return false;
          } catch (_) {
            return true;
          }
        })
    : [];

  console.log(captions);

  return (
    <Swiper
      pagination={{
        type: "fraction",
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      grabCursor={true}
      className="w-full h-full border"
      slidesPerView={"auto"}
    >
      {Array.isArray(images) &&
        images.map((value, index) => (
          <SwiperSlide key={index}>
            <Image
              width={0}
              height={0}
              src={value}
              alt={value}
              sizes="100vw"
              className="aspect-[16/9] w-full object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
            />
            {isIterable && captions[index] && (
              <p className="swiper-caption px-2 py-4 w-full break-words relative md:absolute md:bottom-0 md:left-0">
                {captions[index].replaceAll('"', "").trim()}
              </p>
            )}
          </SwiperSlide>
        ))}
    </Swiper>
  );
}
