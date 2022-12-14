import React from "react";
import { Link } from "react-router-dom";

const Category = ({ category }) => {
  const { cateImg, name, id } = category;
  return (
    <div className="card text-white p-6 md:card-side shadow-xl bg-gray-50">
      <figure>
        <img
          src={cateImg}
          alt="phone-category"
          className="w-28 h-28 rounded-full"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl mb-4 text-primary">{name}</h2>
        <Link to={`/category/${id}`}>
          <button className="block px-5 text-center rounded-md dark:text-gray-200 bg-primary  hover:bg-secondary">
            View All
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Category;
