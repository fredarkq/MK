import React, { useState } from "react";
import "./index.scss";
type BoxProps = {
  image: string;
};

const Box: React.FC<BoxProps> = ({ image }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="codeBox">
      <img src={image} alt="Box" />
    </div>
  );
};

export default Box;
