import { useQuery } from "@tanstack/react-query";
import React from "react";
import Loader from "../../../context/Loader/Loader";
import Category from "./Category";

const Categories = () => {
  const { data: categories, isLoading } = useQuery({
    queryKey: ["category"],
    queryFn: async () => {
      const res = await fetch("https://phone-hub-server.vercel.app/categories");
      const data = await res.json();
      return data;
    },
  });
  if (isLoading) {
    return <Loader></Loader>;
  }
  return (
    <div className="mt-3">
      <h1 className="text-center text-5xl font-bold text-primary">
        Choose Your Brand
      </h1>
      <div
        className="grid mt-8 gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full my-12"
        data-aos="zoom-in"
        data-aos-duration="2000"
      >
        {categories?.map((category) => (
          <Category key={category._id} category={category}></Category>
        ))}
      </div>
    </div>
  );
};

export default Categories;
