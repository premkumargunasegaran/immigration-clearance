import React from "react";
import { useLocation } from "react-router";

export const Hide = (props) => {
  const location = useLocation();

  const path = location.pathname;
  const hide = props.hide;
  return hide.indexOf(path) != -1 ? null : props.children;
};
