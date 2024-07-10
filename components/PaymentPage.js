/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState, useEffect } from "react";
import Script from "next/script";
import { fetchuser, fetchpayments, initiate } from "@/app/actions/useractions";
import { useSearchParams } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Bounce } from "react-toastify";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
const PaymentPage = ({ username }) => {
  const [paymentform, setPaymentform] = useState({
    name: "",
    message: "",
    amount: "",
  });
  const [currentUser, setcurrentUser] = useState({});
  const [payments, setPayments] = useState([]);
  const searchParams = useSearchParams();
  const router = useRouter();
  const handleChange = (e) => {
    setPaymentform({ ...paymentform, [e.target.name]: e.target.value });
  };

  const getData = async () => {
    try {
      let u = await fetchuser(username);
      setcurrentUser(u);
      let dbpayments = await fetchpayments(username);
      setPayments(dbpayments);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {
    if (searchParams.get("paymentdone") == "true") {
      toast("Thanks for your donation!", {
        position: "top-right",
        autoclose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
    router.push(`/${username}`);
  }, []);
  const pay = async (amount) => {
    try {
      let a = await initiate(amount, username, paymentform);
      let orderId = a.id;
      var options = {
        key: currentUser.razorpayid,
        amount: amount * 100, // convert to subunits if necessary
        currency: "INR",
        name: "Get Me A Chai",
        description: "Test Transaction",
        image: "https://example.com/your_logo",
        order_id: orderId,
        callback_url: `${process.env.NEXT_PUBLIC_URL}/api/razorpay`,
        prefill: {
          name: paymentform.name || "Customer Name",
          email: "customer.email@example.com",
          contact: "9000090000",
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
    } catch (error) {
      console.error("Error initiating payment", error);
    }
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hidProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* <button id="rzp-button1">Pay</button> */}
      <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>
      <div className="cover w-full relative">
        <img
          className="object-cover w-full h-[300px]"
          // src="../Assets/Images/Cover.jpeg"
          src={currentUser.coverpic}
        />
        <div className="absolute -bottom-20 right-[44%] border-2 border-white overflow-hidden rounded-full size-32">
          <img
            className="rounded-full objject-cover size-32"
            width={150}
            height={150}
            src={currentUser.profilepic}
            // src="https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg"
          />
        </div>
      </div>
      <div className="info flex justify-center items-center my-24 flex-col gap-2">
        <div className="font-bold text-lg">@{username}</div>
        <div className="text-slate-400">Let help {username} get a chai!</div>
        <div className="text-slate-400">
          {payments.length} Payments . &#8377;
          {payments.reduce((a, b) => a + b.amount, 0)} raised
        </div>
        <div className="payment flex gap-3 w-[80%] mt-11">
          <div className="supporters w-1/2 bg-slate-900 rounded-lg p-10">
            <h2 className="text-2xl font-bold my-5">Supporters</h2>
            <ul className="mx-5">
              {payments.length == 0 && <li>No payments yet</li>}
              {payments.map((p, i) => (
                <li key={i} className="my-4 flex gap-2 items-center">
                  <img width={25} src="../Assets/GIFs/user.gif" />
                  <span>
                    {p.name} donated{" "}
                    <span className="font-bold">&#8377;{p.amount}</span> with a
                    message "{p.message}"
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="makepayment w-1/2 bg-slate-900 rounded-lg p-10">
            <h2 className="text-2xl font-bold my-5">Make a Payment</h2>
            <div className="flex gap-2 flex-col">
              <input
                type="text"
                className="w-full p-3 rounded-lg bg-slate-800"
                placeholder="Enter Name"
                onChange={handleChange}
                value={paymentform.name}
                name="name"
              />
              <input
                type="text"
                className="w-full p-3 rounded-lg bg-slate-800"
                placeholder="Enter Message"
                onChange={handleChange}
                value={paymentform.message}
                name="message"
              />
              <input
                type="number"
                className="w-full p-3 rounded-lg bg-slate-800"
                placeholder="Enter Amount"
                onChange={handleChange}
                value={paymentform.amount}
                name="amount"
              />
              <button
                onClick={() => pay(paymentform.amount)}
                disabled={
                  paymentform.name?.length < 3 ||
                  paymentform.message?.length < 2 ||
                  paymentform.amount < 1
                }
                className="text-white bg-gradient-to-br from-purple-700 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 me-2 mb-2 py-2.5 text-center disabled:bg-slate-600 disabled:from-purple-100"
              >
                Pay
              </button>
            </div>
            <div className="flex gap-2 mt-5">
              <button
                className="bg-slate-800 p-3 rounded-lg"
                onClick={() => pay(10)}
              >
                Pay &#8377;10
              </button>
              <button
                className="bg-slate-800 p-3 rounded-lg"
                onClick={() => pay(20)}
              >
                Pay &#8377;20
              </button>
              <button
                className="bg-slate-800 p-3 rounded-lg"
                onClick={() => pay(30)}
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
