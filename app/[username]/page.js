/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import PaymentPage from "@/components/PaymentPage";
import React from "react";
import { notFound } from "next/navigation";
import connectDB from "../db/connectDb";
import User from "../models/User";
const Username = async ({ params }) => {
  const checkUser = async () => {
    let u = await User.findOne({ username: params.username });
    if (!u) {
      return notFound();
    }
  };
  await checkUser();
  return (
    <>
      <PaymentPage username={params.username} />
    </>
  );
};

export default Username;
