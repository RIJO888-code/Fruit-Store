import React, { useState } from "react";

const OrderSection = () => {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    address: "",
    pincode: "",
    phone: "",
    fruit: "",
    quantity: "0.5",
    payment: "",
  });

  const [cart, setCart] = useState([]);

  const fruitOptions = [
    "Fresh RED Apples",
    "Fresh Oranges",
    "Fresh Avocado",
    "Fresh Cherries",
    "Fresh Mangoes",
    "Fresh Bananas",
    "Fresh Strawberries",
    "Fresh Grapes",
    "Fresh Watermelon",
    "Fresh Pineapple",
    "Fresh Papaya",
    "Fresh Green Grapes",
    "Fresh Pomegranate",
    "Fresh Guava",
    "Fresh Moozambie",
    "Fresh Green Apple",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Order placed successfully!");
    setFormData({
      fname: "",
      lname: "",
      address: "",
      pincode: "",
      phone: "",
      fruit: "",
      quantity: "0.5",
      payment: "",
    });
    setCart([]);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleAddToCart = () => {
    if (formData.fruit && formData.quantity) {
      const newItem = {
        fruit: formData.fruit,
        quantity: formData.quantity,
      };
      setCart([...cart, newItem]);
    }
  };

  const handleRemoveFromCart = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
  };

  return (
    <section className="bg-gradient-to-r from-pink-100 to-orange-100 py-20 px-6">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-700">
          Place Your Order
        </h2>
        <p className="text-center text-lg mb-8 text-gray-600">
          Delivery will be within 5 hours.
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <input
              type="text"
              name="fname"
              placeholder="First Name"
              value={formData.fname}
              onChange={handleChange}
              required
              className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="text"
              name="lname"
              placeholder="Last Name"
              value={formData.lname}
              onChange={handleChange}
              required
              className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            required
            className="border rounded-lg w-full p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <input
              type="text"
              name="pincode"
              placeholder="Pincode"
              value={formData.pincode}
              onChange={handleChange}
              required
              className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
              className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <select
              name="fruit"
              value={formData.fruit}
              onChange={handleChange}
              required
              className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="" disabled>
                Select a Fruit
              </option>
              {fruitOptions.map((fruit, index) => (
                <option key={index} value={fruit}>
                  {fruit}
                </option>
              ))}
            </select>
            <input
              type="number"
              name="quantity"
              placeholder="Quantity (kg)"
              min="0.5"
              step="0.5"
              value={formData.quantity}
              onChange={handleChange}
              required
              className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              type="button"
              onClick={handleAddToCart}
              className="bg-green-500 text-white py-2 px-4 rounded-lg shadow hover:bg-green-600 transition"
            >
              Add to Cart
            </button>
          </div>

          {cart.length > 0 && (
            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-4">Your Cart</h3>
              <ul className="space-y-4">
                {cart.map((item, index) => (
                  <li key={index} className="flex justify-between items-center">
                    <span>{`${item.fruit} - ${item.quantity} kg`}</span>
                    <button
                      type="button"
                      onClick={() => handleRemoveFromCart(index)}
                      className="text-red-500 hover:text-red-700"
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div>
            <label className="block mb-2 font-semibold">Payment Method</label>
            <div className="flex items-center gap-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="payment"
                  value="GPay"
                  onChange={handleChange}
                  required
                  className="mr-2"
                />
                GPay
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="payment"
                  value="Cash on Delivery"
                  onChange={handleChange}
                  required
                  className="mr-2"
                />
                Cash on Delivery
              </label>
            </div>
          </div>

          {formData.payment === "GPay" && (
            <p className="mt-2 text-lg font-semibold">
              Please send the payment to: <strong>+91 1234567890</strong>
            </p>
          )}

          <button
            type="submit"
            className="bg-blue-500 text-white py-3 px-6 rounded-lg shadow hover:bg-blue-600 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default OrderSection;
