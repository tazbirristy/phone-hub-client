import React, { useContext } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../../../../context/AuthProvider";
import { FaCheckCircle } from "react-icons/fa";

const CategoryProduct = ({ product, setBookProduct }) => {
  const { user } = useContext(AuthContext);
  const {
    productName,
    buyingPrice,
    buyingYear,
    condition,
    description,
    location,
    phnNumber,
    postedDate,
    productImg,
    sealingPrice,
    yearsOfUse,
    sellerName,
    _id,
  } = product;

  const handleWishlist = () => {
    const wishlist = {
      buyerName: user.displayName,
      buyerEmail: user.email,
      sellerPhone: phnNumber,
      productId: _id,
      productName,
      productImg,
      sellerName,
      sealingPrice,
    };
    fetch("https://phone-hub-server.vercel.app/wishlists", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${localStorage.getItem("phoneHub-token")}`,
      },
      body: JSON.stringify(wishlist),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          setBookProduct(null);
          toast.success(`${productName} Phone Added to Wishlist`, {
            autoClose: 500,
          });
        }
      });
  };

  return (
    <>
      {!product.paid && (
        <div className="max-w-md rounded-sm shadow-md dark:bg-primary dark:text-gray-100">
          <div>
            <img
              src={productImg}
              alt=""
              className="object-cover object-center w-full rounded-t-sm h-72 dark:bg-gray-500"
            />
            <div className="flex justify-between px-4">
              <div className="mt-2 text-sm">
                <span>Posted Date- {postedDate}</span>
              </div>
              <div className="mt-2 text-sm">
                <p>Condition: {condition}</p>
              </div>
            </div>
          </div>
          <div className="p-4 space-y-8">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold tracking-wide">
                {productName}
              </h2>
              <p className="dark:text-gray-300 text-justify my-10">
                {description}
              </p>
              <div className="flex justify-between">
                <p className="text-yellow-400 text-md font-bold">
                  Buying Price: ${buyingPrice}
                </p>
                <p className="text-yellow-400 text-md font-bold">
                  Selling Price: ${sealingPrice}
                </p>
              </div>
              <div className="flex justify-between">
                <p className="text-yellow-400 text-md font-bold">
                  Buying Year: {buyingYear}
                </p>
                <p className="text-yellow-400 text-md font-bold">
                  Years of Use: {yearsOfUse} Year's
                </p>
              </div>

              <div className="flex justify-between">
                <p className="text-yellow-400 text-md">Location: {location}</p>
                <p className="text-yellow-400 text-md">Phone: {phnNumber}</p>
              </div>
              <div className="flex justify-between">
                {product?.verified && (
                  <div className="flex">
                    <p className="text-yellow-400 text-md">
                      Seller Name: {sellerName}{" "}
                    </p>{" "}
                    <FaCheckCircle className="text-green-400 text-xl ml-2" />
                  </div>
                )}
                {!product?.verified && (
                  <p className="text-gray-50 text-md">
                    Seller Name: {sellerName}{" "}
                    <span className="text-yellow-400 text-sm">
                      Not Verified
                    </span>
                  </p>
                )}

                <button
                  onClick={handleWishlist}
                  className="btn btn-sm bg-secondary"
                >
                  Wishlist
                </button>
              </div>
            </div>

            <label
              onClick={() => setBookProduct(product)}
              htmlFor="booking-modal"
              className="block w-full p-3 text-center rounded-sm dark:text-gray-200 bg-gradient-to-r from-primary to-secondary hover:to-indigo-600 hover:from-purple-600 shadow-md shadow-purple-600"
            >
              Book Now
            </label>
          </div>
        </div>
      )}
    </>
  );
};

export default CategoryProduct;
