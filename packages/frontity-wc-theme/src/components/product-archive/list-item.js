import React from "react";
import { Box, Text, Image } from "@chakra-ui/core";
import FeaturedMedia from "../featured-media";
import { styled } from "frontity";
import Design from "../design/Design";

const Item = ({ item }) => {
  return (
    <Picker>
      <Design className="design" />
      <ImageWrapper>
        <FeaturedMedia id={item.featured_media} />
      </ImageWrapper>
    </Picker>
  );
};

export default Item;

const Picker = styled.div`
  position: relative;
  padding: 10vw;
`;
const ImageWrapper = styled.div`
  width: 50vw;
`;
