/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import Script from "next/script";
import { initiate } from "@/app/actions/useractions";
import { useSession } from "next-auth/react";
const PaymentPage = ({ username }) => {
  const [paymentform, setPaymentform] = useState({});
  const handleChange = (e) => {
    setPaymentform({ ...paymentform, [e.target.name]: e.target.value });
  };
  const pay = async (amount) => {
    //Get the order Id
    let a = await initiate(amount, username, paymentform);
    let orderId = a.id;
    var options = {
      key: process.env.NEXT_PUBLIC_KEY_ID, // Enter the Key ID generated from the Dashboard
      amount: amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "INR",
      name: "Get Me A Chai", //your business name
      description: "Test Transaction",
      image: "https://example.com/your_logo",
      order_id: orderId, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      callback_url: `${process.env.NEXT_PUBLIC_URL}/api/razorpay`,
      prefill: {
        //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
        name: "Gaurav Kumar", //your customer's name
        email: "gaurav.kumar@example.com",
        contact: "9000090000", //Provide the customer's phone number for better conversion rates
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };
    var rzp1 = new Razorpay(options);
    rzp1.open();
  };
  return (
    <>
      <button id="rzp-button1">Pay</button>
      <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>
      <div className="cover w-full relative">
        <img
          className="object-cover w-full h-[300px]"
          src="../Assets/Images/Cover.jpeg"
        />
        <div className="absolute -bottom-20 right-[44%] border-2 border-white rounded-full">
          <img
            className="rounded-full"
            width={150}
            height={150}
            src="https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg"
          />
        </div>
      </div>
      <div className="info flex justify-center items-center my-24 flex-col gap-2">
        <div className="font-bold text-lg">@{username}</div>
        <div className="text-slate-400">Creating Animated art for VTT's</div>
        <div className="text-slate-400">
          9,719 members. 82 posts. $15,450/release.
        </div>
        <div className="payment flex gap-3 w-[80%] mt-11">
          <div className="supporters w-1/2 bg-slate-900 rounded-lg p-10">
            <h2 className="text-2xl font-bold my-5">Supporters</h2>
            <ul className="mx-5">
              <li className="my-4 flex gap-2 items-center">
                <img width={25} src="../Assets/GIFs/user.gif" />
                <span>
                  {" "}
                  Shubham donated <span className="font-bold">$30</span> with a
                  message ""
                </span>
              </li>
              <li className="my-4 flex gap-2 items-center">
                <img width={25} src="../Assets/GIFs/user.gif" />
                <span>
                  {" "}
                  Shubham donated <span className="font-bold">$30</span> with a
                  message ""
                </span>
              </li>
              <li className="my-4 flex gap-2 items-center">
                <img width={25} src="../Assets/GIFs/user.gif" />
                <span>
                  {" "}
                  Shubham donated <span className="font-bold">$30</span> with a
                  message ""
                </span>
              </li>
              <li className="my-4 flex gap-2 items-center">
                <img width={25} src="../Assets/GIFs/user.gif" />
                <span>
                  {" "}
                  Shubham donated <span className="font-bold">$30</span> with a
                  message ""
                </span>
              </li>
            </ul>
          </div>
          <div className="makepayment w-1/2 bg-slate-900 rounded-lg p-10">
            <h2 className="text-2xl font-bold my-5">Make a Payment</h2>
            <div className="flex gap-2 flex-col">
              <div>
                <input
                  type="text"
                  className="w-full p-3 rounded-lg bg-slate-800"
                  placeholder="Enter Name"
                  onChange={handleChange}
                  value={paymentform.name}
                  name="name"
                />
              </div>
              <input
                type="text"
                className="w-full p-3 rounded-lg bg-slate-800"
                placeholder="Enter Message"
                onChange={handleChange}
                value={paymentform.message}
                name="message"
              />
              <input
                type="text"
                className="w-full p-3 rounded-lg bg-slate-800"
                placeholder="Enter Amount"
                onChange={handleChange}
                value={paymentform.amount}
                name="amount"
              />
              <button
                onClick={() => pay(paymentform.amount)}
                className="text-white bg-gradient-to-br from-purple-700 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 me-2 mb-2 py-2.5 text-center"
              >
                Pay
              </button>
            </div>
            <div className="flex gap-2 mt-5">
              <button
                className="bg-slate-800 p-3 rounded-lg"
                onClick={() => pay(1000)}
              >
                Pay &#8377;10
              </button>
              <button
                className="bg-slate-800 p-3 rounded-lg"
                onClick={() => pay(2000)}
              >
                Pay &#8377;20
              </button>
              <button
                className="bg-slate-800 p-3 rounded-lg"
                onClick={() => pay(3000)}
              >
                Pay &#8377;30
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentPage;
