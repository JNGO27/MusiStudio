import * as React from "react";
import Svg, {
  SvgProps,
  Defs,
  LinearGradient,
  Stop,
  G,
  Path,
  Circle,
} from "react-native-svg";

const SvgComponent = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 128 128"
    {...props}
  >
    <Defs>
      <LinearGradient
        id="linear-gradient"
        x1={63.99}
        x2={63.99}
        y1={117}
        y2={11}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0} stopColor="#ff2020" />
        <Stop offset={1} stopColor="#ff1919" />
      </LinearGradient>
      <LinearGradient
        id="linear-gradient-2"
        x1={64}
        x2={64}
        y1={106.96}
        y2={22.43}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0} stopColor="#dde1e8" />
        <Stop offset={1} stopColor="#f3f4f5" />
      </LinearGradient>
      <LinearGradient
        xlinkHref="#linear-gradient"
        id="linear-gradient-3"
        x1={64}
        x2={64}
        y1={83}
        y2={46}
      />
      <LinearGradient
        xlinkHref="#linear-gradient"
        id="linear-gradient-4"
        x1={64}
        x2={64}
        y1={100}
        y2={90}
      />
    </Defs>
    <G id="Something_Went_Wrong" data-name="Something Went Wrong">
      <Path
        d="M56.21 15.36C-2.46 110.64 1 103.92 1 107.65a9.18 9.18 0 0 0 9.16 9.35h107.68a9.3 9.3 0 0 0 7.79-14.19L71.79 15.36a9.14 9.14 0 0 0-15.58 0Z"
        style={{
          fill: "url(#linear-gradient)",
        }}
      />
      <Path
        d="M117.84 117H10.16a9.24 9.24 0 0 1-8.83-11.77 9.16 9.16 0 0 0 8.83 6.77h107.68a9.16 9.16 0 0 0 8.83-6.77 9.25 9.25 0 0 1-8.83 11.77Z"
        className="cls-2"
      />
      <Path
        d="M11.96 106.96 64 22.43l52.04 84.53H11.96z"
        style={{
          fill: "url(#linear-gradient-2)",
        }}
      />
      <Path
        d="M116.04 106.96H11.96l3.05-4.96h97.98l3.05 4.96z"
        style={{
          fill: "#c7cdd8",
        }}
      />
      <Path
        d="M69 46c-1.61 35.56-1.31 28.93-1.67 37h-6.66c-.36-8 0-.93-1.67-37Z"
        style={{
          fill: "url(#linear-gradient-3)",
        }}
      />
      <Circle
        cx={64}
        cy={95}
        r={5}
        style={{
          fill: "url(#linear-gradient-4)",
        }}
      />
      <Path
        d="M64 100a5 5 0 0 1-4.78-6.5 5 5 0 0 0 9.56 0A5 5 0 0 1 64 100ZM67.6 77l-.27 6h-6.66l-.27-6h7.2z"
        className="cls-2"
      />
      <Path
        d="M126.5 102.27 72.66 14.83a10.16 10.16 0 0 0-17.32 0L1.5 102.27C-2.64 109 2 118 10.16 118h107.68c8.22 0 12.74-9.1 8.66-15.73Zm-.5 5.53a8.17 8.17 0 0 1-8.14 8.18H10.16A8.17 8.17 0 0 1 2 107.65c0-3.33-3.78 3.81 55.06-91.75a8.11 8.11 0 0 1 13.84 0c59.1 95.9 55.1 88.39 55.1 91.9Z"
        className="cls-7"
      />
      <Path
        d="M64.87 21.89a1.07 1.07 0 0 0-1.74 0l-52 84.53A1 1 0 0 0 12 108c111.3 0 104.53.28 105-.52s3.48 4.74-52.13-85.59Zm-51.09 84.05L64 24.38l50.22 81.56Z"
        className="cls-7"
      />
      <Path
        d="M58.26 45.29c-.47.49-.41-2.06 1.39 37.76a1 1 0 0 0 1 1h6.66a1 1 0 0 0 1-1l1.67-37A1 1 0 0 0 69 45c-10.76 0-10.31-.15-10.74.29ZM67.93 47l-1.57 35h-4.72l-1.57-35ZM64 89a6 6 0 1 0 6 6 6 6 0 0 0-6-6Zm0 10a4 4 0 1 1 4-4 4 4 0 0 1-4 4Z"
        className="cls-7"
      />
    </G>
  </Svg>
);
export default SvgComponent;
