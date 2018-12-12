import React from "react";

import ImageWrapper from "./ImageWrapper";
import Image from "./Image";

const Display = props => {
  return (
    <ImageWrapper>
      <Image src={props.src} />
    </ImageWrapper>
  );
};

export default Display;
