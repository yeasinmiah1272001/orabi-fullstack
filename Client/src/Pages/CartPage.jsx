import React, { useEffect, useState } from "react";
import Container from "../Componets/Container";
import SectionTitle from "../Componets/SectionTitle";
import { useSelector } from "react-redux";
import CartItem from "../Componets/CartItem";
import { Link } from "react-router-dom";

const CartPage = () => {
  const { cart } = useSelector((state) => state.orabi);
  const [subTotal, setSubTotal] = useState(0);
  const [discount, setDiscount] = useState(0);

  useEffect(() => {
    // Calculate subtotal and total discount
    let calculatedSubtotal = 0;
    let calculatedDiscount = 0;

    cart.forEach((item) => {
      const originalPrice = item?.price * item?.quantity;
      const discountAmount =
        (item?.discountedPersentage / 100) * item?.price * item?.quantity;

      calculatedSubtotal += originalPrice - discountAmount;
      calculatedDiscount += discountAmount;
    });

    setSubTotal(calculatedSubtotal.toFixed(2)); // Rounded to 2 decimal places
    setDiscount(calculatedDiscount.toFixed(2));
  }, [cart]);

  if (cart.length === 0) {
    return (
      <Container>
        <SectionTitle title={"Cart Page"} />
        <div className="flex flex-col items-center justify-center h-80 bg-gray-100 shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gray-700">
            Your cart is empty.
          </h2>
          <p className="text-gray-600 mt-2">
            Looks like you haven't added anything to your cart yet.
          </p>
          <Link
            to="/shop"
            className="mt-4 py-2 px-6 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-all"
          >
            Continue Shopping
          </Link>
        </div>
      </Container>
    );
  }

  return (
    <Container>
      <SectionTitle title={"Cart Page"} />
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Responsive Table */}
        <div className="w-full lg:w-2/3 overflow-x-auto">
          <table className="w-full text-left border-collapse bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-gray-200 text-gray-700">
              <tr>
                <th className="p-4">Product</th>
                <th className="p-4">Price</th>
                <th className="p-4">Quantity</th>
                <th className="p-4">Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <CartItem key={item._id} item={item} />
              ))}
            </tbody>
          </table>
        </div>

        {/* Price Summary Section */}
        <div className="w-full h-80 lg:w-1/3 bg-gray-100 shadow-md rounded-lg p-6">
          <h1 className="text-2xl font-bold text-gray-700 border-b border-gray-300 pb-2">
            Price Summary
          </h1>
          <div className="space-y-4 mt-4">
            <div className="flex justify-between text-lg">
              <span>Subtotal:</span>
              <span className="font-medium">$ {subTotal}</span>
            </div>
            <div className="flex justify-between text-lg">
              <span>Discount:</span>
              <span className="font-medium">$ {discount}</span>
            </div>
            <div className="flex justify-between text-lg font-bold border-t pt-2">
              <span>Total:</span>
              <span>$ {(subTotal - discount).toFixed(2)}</span>
            </div>
          </div>
          <button className="mt-6 w-full py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-all">
            Proceed to Payment
          </button>
        </div>
      </div>
    </Container>
  );
};

export default CartPage;
