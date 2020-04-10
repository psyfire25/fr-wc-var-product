import React, { useEffect } from "react";
import { connect } from "frontity";
import ProductArchive from "../product-archive/";
import TSPicker from "./tsPicker";

const Product = ({ state, actions, libraries }) => {
  const data = state.source.get(state.router.link);

  useEffect(() => {
    actions.source.fetch("/");
    ProductArchive.preload();
  }, []);

  return data.isReady ? <TSPicker /> : null;
};
export default connect(Product);
