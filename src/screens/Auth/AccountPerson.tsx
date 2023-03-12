import * as React from "react";
import Svg, {
  SvgProps,
  Defs,
  LinearGradient,
  Stop,
  G,
  Path,
  Circle,
  Rect,
} from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: style, title */

const SvgComponent = (props: SvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" {...props}>
    <Defs>
      <LinearGradient
        id="linear-gradient"
        x1={32}
        y1={63}
        x2={32}
        y2={1}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0} stopColor="#474f72" />
        <Stop offset={1} stopColor="#878c9f" />
      </LinearGradient>
      <LinearGradient
        id="linear-gradient-2"
        x1={32}
        y1={51}
        x2={32}
        y2={13}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0} stopColor="#7aa8d7" />
        <Stop offset={1} stopColor="#c3d2e7" />
      </LinearGradient>
      <LinearGradient
        id="linear-gradient-3"
        x1={32}
        y1={35.45}
        x2={32}
        y2={19.91}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0} stopColor="#d1a788" />
        <Stop offset={1} stopColor="#f2d3b8" />
      </LinearGradient>
      <LinearGradient
        id="linear-gradient-4"
        x1={32}
        y1={50.99}
        x2={32}
        y2={35.48}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0} stopColor="#d4d8e1" />
        <Stop offset={1} stopColor="#f3f4f5" />
      </LinearGradient>
    </Defs>
    <G id="Manager">
      <Path
        d="m57.19 25.54 5.16-3-7-12.12-5.17 3A26 26 0 0 0 39 7V1H25v6a26 26 0 0 0-11.18 6.46l-5.17-3-7 12.12 5.16 3a26 26 0 0 0 0 12.92l-5.16 3 7 12.12 5.17-3A26 26 0 0 0 25 57v6h14v-6a26 26 0 0 0 11.18-6.46l5.17 3 7-12.12-5.16-3a26 26 0 0 0 0-12.88Z"
        style={{
          fill: "url(#linear-gradient)",
        }}
      />
      <Circle
        cx={32}
        cy={32}
        r={19}
        style={{
          fill: "url(#linear-gradient-2)",
        }}
      />
      <Path
        d="M50.94 33.5a19 19 0 0 0-37.88 0 19 19 0 1 1 37.88 0Z"
        style={{
          fill: "#86b8e0",
        }}
      />
      <Rect
        x={25.09}
        y={19.91}
        width={13.82}
        height={15.55}
        rx={6.59}
        style={{
          fill: "url(#linear-gradient-3)",
        }}
      />
      <Path
        d="M38.91 28.87a6.58 6.58 0 0 1-6.59 6.58h-.64a6.58 6.58 0 0 1-6.59-6.58v-2.68a6.58 6.58 0 0 0 6.58 6.26h.64a6.58 6.58 0 0 0 6.58-6.26c.03.17.02.29.02 2.68Z"
        style={{
          fill: "#cba07a",
        }}
      />
      <Path
        d="M44.31 46.46a19 19 0 0 1-24.62 0c.91-2.71.73-2.19.95-2.81 3.63-10.9 19.09-10.9 22.72 0 .21.59.03.08.95 2.81Z"
        style={{
          fill: "url(#linear-gradient-4)",
        }}
      />
      <Path
        d="m57.19 38.46 5.16 3-7 12.12-5.17-3A26 26 0 0 1 39 57v6H25v-6a26 26 0 0 1-11.18-6.46l-5.17 3-7-12.12 5.16-3a26.45 26.45 0 0 1-.77-8A26 26 0 0 0 58 30.5a26.19 26.19 0 0 1-.81 7.96Z"
        style={{
          fill: "#42455e",
        }}
      />
      <Path
        className="cls-8"
        d="M30.27 47.92c-.31 3.36-.27 2.86-.27 3a16.22 16.22 0 0 1-1.67-.25 19 19 0 0 1-8.64-4.18l.79-2.35a18.9 18.9 0 0 0 9.79 3.78ZM44.31 46.46C41 49.33 36.21 50.89 34 50.89c0-.11.06.59-.27-3a18.9 18.9 0 0 0 9.79-3.81Z"
      />
      <Path d="M62.85 40.57 58.34 38a27.33 27.33 0 0 0 0-11.94l4.51-2.6a1 1 0 0 0 .36-1.37c-7.59-13.15-7-12.44-7.6-12.59s-.4-.11-5.28 2.71a27.16 27.16 0 0 0-10.33-6V1a1 1 0 0 0-1-1H25a1 1 0 0 0-1 1v5.21a27.16 27.16 0 0 0-10.33 6L9.15 9.57a1 1 0 0 0-1.36.37C.19 23.09.53 22.25.69 22.82s0 .36 5 3.21A27.33 27.33 0 0 0 5.66 38C.74 40.81.83 40.64.69 41.18s-.5-.27 7.1 12.88a1 1 0 0 0 1.36.37l4.52-2.61a27.16 27.16 0 0 0 10.33 6V63a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-5.21a27.16 27.16 0 0 0 10.33-6c4.92 2.84 4.73 2.85 5.28 2.71s0 .56 7.6-12.59a1 1 0 0 0-.36-1.34ZM55 52.2l-4.3-2.49a1 1 0 0 0-1.2.15 25.08 25.08 0 0 1-10.75 6.22A1 1 0 0 0 38 57v5H26v-5a1 1 0 0 0-.73-1 25.08 25.08 0 0 1-10.75-6.22 1 1 0 0 0-1.2-.15L9 52.2 3 41.8l4.29-2.47a1 1 0 0 0 .47-1.12 25.11 25.11 0 0 1 0-12.42 1 1 0 0 0-.47-1.12L3 22.2l6-10.4 4.3 2.49a1 1 0 0 0 1.2-.15 25.08 25.08 0 0 1 10.77-6.22A1 1 0 0 0 26 7V2h12v5a1 1 0 0 0 .73 1 25.08 25.08 0 0 1 10.75 6.22 1 1 0 0 0 1.2.15L55 11.8l6 10.4c-7.43 4.29-4 1.09-4 9.8s-3.45 5.52 4 9.8Z" />
      <Path d="M32 12C13.34 12 5 35.29 19 47.23a20 20 0 0 0 25.94 0C59 35.29 50.66 12 32 12Zm1.91 37.9-.84-9.15c2.18-1 1.73-3.75-.3-3.75-1.68 0-2.44-.14-3 .84a2.07 2.07 0 0 0 1.2 2.91l-.84 9.15a18 18 0 0 1-9.24-3.78l.69-2.12a11 11 0 0 1 15.94-6c3.84 2.21 4.69 5.37 5.63 8.17a17.91 17.91 0 0 1-9.24 3.73ZM32 34.45a5.91 5.91 0 0 1-5.94-5.9v-1.73a5.91 5.91 0 1 1 11.82 0v1.73a5.91 5.91 0 0 1-5.88 5.9Zm12.77 10.22c-1.5-4.48-3.57-7.75-8.48-9.49a7.91 7.91 0 0 0 3.62-6.63v-1.73a7.91 7.91 0 1 0-15.82 0v1.73a7.91 7.91 0 0 0 3.62 6.63c-4.91 1.74-7 5-8.48 9.49C8.05 33.41 16 14 32 14s24 19.41 12.77 30.67Z" />
    </G>
  </Svg>
);

export default SvgComponent;
