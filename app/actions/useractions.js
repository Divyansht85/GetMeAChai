"use server";
import Razorpay from "razorpay";
import Payment from "../models/Payment";
import User from "../models/User";
import connectDB from "../db/connectDb";
export const initiate = async (amount, to_username, paymentform) => {
  await connectDB();
  let user = await User.findOne({ username: to_username });
  const secret = user.razorpaysecret;
  var instance = new Razorpay({
    key_id: user.razorpayid,
    key_secret: secret,
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
  let user = u.toObject({ flattenObjectIds: true });
  return user;
};
export const fetchuserUsingMail = async (email) => {
  await connectDB();
  let u = await User.findOne({ email: email });
  let user = u.toObject({ flattenObjectIds: true });
  return user;
};

export const fetchpayments = async (username) => {
  await connectDB();
  let p = await Payment.find({ to_user: username, done: true })
    .sort({ amount: -1 })
    .limit(7)
    .lean();
  return p;
};
export const updateProfile = async (data, oldusername) => {
  await connectDB();
  let ndata = Object.fromEntries(data);
  if (oldusername !== ndata.username) {
    let u = await User.findOne({ username: ndata.username });
    if (u) {
      return { error: "Username already exists", success: false };
    }
    await User.updateOne({ email: ndata.email }, ndata);
    await Payment.updateMany(
      { to_user: oldusername },
      { to_user: ndata.username }
    );
    return { success: true };
  } else {
    await User.updateOne({ email: ndata.email }, ndata);
    return { sucess: true };
  }
};
