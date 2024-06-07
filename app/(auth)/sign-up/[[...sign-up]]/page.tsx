import { SignUp } from "@clerk/nextjs";
import React from "react";

const page = () => {
  return (
    <div className="flex justify-center items-center h-screen w-full py-[20px]">
      <SignUp />
    </div>
  );
};

export default page;
