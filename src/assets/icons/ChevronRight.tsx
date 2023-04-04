import React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

const SvgComponent = (props: SvgProps) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/Svg"
      fill="currentColor"
      stroke="black"
      strokeWidth={1.5}
      className="w-5 h-5"
      viewBox="0 0 20 20"
      {...props}
    >
      <Path
        fillRule="evenodd"
        d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
        clipRule="evenodd"
      />
    </Svg>
  );
};

export default SvgComponent;
