"use client";

import React from "react";
import { useSelector } from "react-redux";

import { useRouter } from "next/navigation";
import CheckoutComp from "./(checkoutComponents)/Checkout";

const page = () => {
  return <CheckoutComp />;
};

export default page;
