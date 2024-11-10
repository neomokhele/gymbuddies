"use client";

import { useState } from "react";
import Image from "next/image";
import { IoIosArrowRoundForward } from "react-icons/io";
import { classCategoryList } from "@/data/classCategories";
import { classLessonData } from "@/data/classLessons";
import NoResultsFoundComponent from "../common/NoResultsFoundComponent";
import {
  classesTitle,
  classExerciseText,
  classMinutesText,
  classSetText,
} from "@/constants/string";

const ClassComponent = () => {
  const [selectedCategory, setSelectedCategory] =
    useState<string>("All Classes");

  const handleCategoryClick = (categoryName: string) => {
    setSelectedCategory(categoryName);
  };

  const filteredLessons =
    selectedCategory === "All Classes"
      ? classLessonData
      : classLessonData.filter(
          (lesson) => lesson.classCategory === selectedCategory
        );

  const getCategoryCount = (categoryName: string) => {
    if (categoryName === "All Classes") {
      return classLessonData.length;
    }
    return classLessonData.filter(
      (lesson) => lesson.classCategory === categoryName
    ).length;
  };

  return (
    <section id="#classes" className="flex flex-col pt-16">
      <div className="flex text-white text-sm pl-6 md:pl-16">
        <p>{classesTitle}</p>
      </div>

      <div className="flex flex-row gap-2 md:gap-4 pl-6 md:pl-16 pr-4 pt-4 overflow-x-auto scrollbar-none">
        {classCategoryList.map((item) => (
          <div
            key={item.id}
            className={`${
              selectedCategory === item.name
                ? "border-yellow-500 border-2 font-bold"
                : "border-white border-[0.5px] font-normal"
            } flex w-auto flex-row gap-2 items-center justify-center px-4 py-2 rounded-full whitespace-nowrap cursor-pointer`}
            onClick={() => handleCategoryClick(item.name)}
          >
            <p className="text-white text-xs md:text-sm">{item.name}</p>
            <div className="bg-yellow-500 rounded-full text-[10px] text-white h-4 w-4 flex items-center justify-center">
              <span>{getCategoryCount(item.name)}</span>
            </div>
          </div>
        ))}
      </div>

      <div
        className={`${
          filteredLessons.length === 0
            ? "flex flex-col gap-4 items-center justify-center mt-10"
            : "grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 px-6 md:px-16"
        }`}
      >
        {filteredLessons.length === 0 ? (
          <NoResultsFoundComponent />
        ) : (
          filteredLessons
            .map((item) => (
              <div key={item.id} className="flex flex-col gap-2">
                <div className="w-full">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={1000}
                    height={1000}
                    className="w-full object-cover h-72 md:h-96 rounded-md"
                  />
                </div>

                <div className="flex flex-row w-full">
                  <div className="flex flex-col w-5/6 gap-1">
                    <p className="text-white text-sm font-bold">{item.title}</p>
                    <p className="text-white text-xs opacity-50">
                      {item.exercise} {classExerciseText} &#183; {item.set}{" "}
                      {classSetText} &#183; {item.duration} {classMinutesText}
                    </p>
                  </div>

                  <div className="w-1/6 flex items-center justify-end">
                    <div className="flex cursor-pointer items-center justify-center border-2 border-white rounded-full w-6 h-6">
                      <IoIosArrowRoundForward
                        size={20}
                        className="text-white"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))
            .slice(0, selectedCategory === "All Classes" ? 4 : undefined)
        )}
      </div>
    </section>
  );
};

export default ClassComponent;
