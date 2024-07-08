"use server";
import Razorpay from "razorpay";
import Payment from "../models/Payment";
import User from "../models/User";
import connectDB from "../db/connectDb";
export const initiate = async (amount, to_username, paymentform) => {
  await connectDB();
  var instance = new Razorpay({
    key_id: process.env.NEXT_PUBLIC_KEY_ID,
    key_secret: process.env.KEY_SECRET,
  });

  let options = {
    amount: Number.parseInt(amount) * 100,
    currency: "INR",
  };
  let x = await instance.orders.create(options);
  await Payment.create({
    oid: x.id,
    amount: amount,
    to_user: to_username,
    name: paymentform.name,
    message: paymentform.message,
  });
  return x;
};
export const fetchuser = async (username) => {
  await connectDB();
  let u = await User.findOne({ username: username });
  console.log(u);
  let user = u.toObject({ flattenObjectIds: true });
  return user;
};
export const fetchpayments = async (username) => {
  await connectDB();
  let p = await Payment.find({ to_user: username }).sort({ amount: -1 }).lean();
  return p;
};

