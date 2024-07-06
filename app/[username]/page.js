/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import PaymentPage from "@/components/PaymentPage";
import React from "react";

const Username = ({ params }) => {
  return (
    <>
    <PaymentPage username={params.username}/>
    </>
  );
};

export default Username;
