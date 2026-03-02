/* eslint-disable react/react-in-jsx-scope */
import { useContext, useState } from "react";

import { RiDeleteBin5Line } from "react-icons/ri";
import { OrderContext } from "../ContextAPIs/OrderProvider";

const CartComponent = () => {
  const { cart, setCart, qty, setQty } = useContext(OrderContext);
  console.log(cart, "cart");
  const { photo, course_name, discount_price } = cart[0] || {};
  const handleDelete = () => {
    setCart([]);
    setQty(0);
  };

  return (
        <div className="w-full lg:w-[58%] bg-white border-2">
          <table className=" overflow-x-auto  w-full">
            <thead>
              <tr className="border-b-4 border-gray-300">
                <th className="text-[14.4px] w-6/12 font-bold p-[7px] text-black">
                  Course
                </th>
                <th className="text-[14.4px] font-bold p-[7px] text-black">
                  Price
                </th>
                <th className="text-[14.4px] font-bold p-[7px] text-black">
                  Quantity
                </th>
                <th className="text-[14.4px] font-bold p-[7px] text-black">
                  Sub Total
                </th>
              </tr>
            </thead>

            <tbody className="overflow-x-auto ">
              <tr className="border-b border-gray-300 overflow-x-auto">
                <td>
                  <div className="flex items-center justify-center ">
                    <div className="w-[20%] text-center flex items-center justify-center ">
                      <RiDeleteBin5Line
                        className="text-xl hover:text-footer_color cursor-pointer"
                        onClick={handleDelete}
                      />
                    </div>
                    <div className="flex flex-col text-center justify-center items-center py-2  w-[80%]">
                      <div className="mask">
                        <img
                          className="h-[40px] w-[70px]"
                          src={photo}
                          alt={course_name}
                        />
                      </div>
                      <p className="text-[14.4px] px-[7px] text-center flex ">
                        {course_name}
                      </p>
                    </div>
                  </div>
                </td>
                <td>
                  <p className="text-[14.4px] font-bold p-[7px] text-black text-center">
                    {discount_price}
                  </p>
                </td>
                <td>
                  <div className="flex justify-center">
                    <div className="border">
                      <button
                        className={`px-4 w-[30px] btn btn-ghost font-bold font_standard my-1.5 ${qty <= 1 ? "btn-disabled" : ""}`}
                        onClick={() => setQty(qty - 1)}
                      >
                        -
                      </button>
                    </div>
                    <div className="border-y">
                      <input
                        type="number"
                        className="font-bold w-[30px] lg:w-[60px] font_standard px-2 text-center mx-auto h-full"
                        value={qty}
                        onChange={e =>
                          setQty(parseInt(e.target.value) || 0)
                        }
                      />
                    </div>
                    <div className="border">
                      <button
                        className={`px-4 w-[30px] btn btn-ghost font-bold font_standard my-1.5 ${qty === 0 ? "btn-disabled" : ""}`}
                        onClick={() => setQty(qty + 1)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </td>
                <td>
                  <p className="text-[14.4px] font-bold p-[7px] text-black text-center">
                    {discount_price * qty || 0}
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
  );
};

export default CartComponent;
