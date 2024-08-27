import React from "react";
import { TailSpin } from "react-loader-spinner";

export const LoadingSpinner = () => {
  return (
    <TailSpin
      visible={true}
      height="500"
      width="80"
      color="#ADD8E6"
      ariaLabel="tail-spin-loading"
      radius="1"
      wrapperStyle={{}}
      wrapperClass=""
    />
  );
};
