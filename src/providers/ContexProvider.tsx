"use client";

import React from "react";
import { Provider } from "react-redux";
import store from "../store/store";
import StateInitializer from "@/entities/users/providers/StateInitializer";

const ContexProvider = ({ children }: any) => {
  return (
    <Provider store={store}>
      <StateInitializer>{children}</StateInitializer>
    </Provider>
  );
};

export default ContexProvider;
