import React from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export default function LoadingIndicator() {
  return <Loader type="Hearts" color="#00BFFF" height={200} width={200} />;
}
