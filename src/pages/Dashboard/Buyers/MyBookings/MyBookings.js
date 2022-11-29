import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../context/AuthProvider";
import axios from "axios";
import { Link } from "react-router-dom";

const MyBookings = () => {
  const { user } = useContext(AuthContext);
  const [bookedProducts, setBookedProducts] = useState();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/bookings/${user?.email}`, {
        headers: {
          authorization: `bearer ${localStorage.getItem("phoneHub-token")}`,
        },
      })
      .then((res) => {
        // console.log(res.data);
        setBookedProducts(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [user?.email]);

  return (
    <div>
      <h1 className="text-3xl text-primary font-bold my-6 text-center">
        My Bookings
      </h1>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Image</th>
              <th>Name of Product</th>
              <th>Price</th>
              <th>Payment</th>
            </tr>
          </thead>

          <tbody>
            {bookedProducts?.map((bookProduct) => (
              <tr key={bookProduct?._id}>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={bookProduct?.productImg}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </td>
                <td>{bookProduct.productName}</td>
                <td>${bookProduct.sealingPrice}</td>
                <td>
                  {bookProduct.sealingPrice && !bookProduct.paid && (
                    <Link to={`/dashboard/payment/${bookProduct?._id}`}>
                      <button className="btn border-0 btn-sm bg-indigo-500 hover:bg-purple-500">
                        Pay
                      </button>
                    </Link>
                  )}
                  {bookProduct.sealingPrice && bookProduct.paid && (
                    <span className="text-lg text-green-600">Paid</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyBookings;
