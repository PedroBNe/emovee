import React from 'react';

interface OutProps extends React.SVGProps<SVGSVGElement> {
  fill?: string;
  width?: number;
  height?: number;
  style?: React.CSSProperties;
}

const Out: React.FC<OutProps> = ({
  fill = '#000000',
  width = 50,
  height = 50,
  style = {},
  ...props
}) => (
  <svg
    version="1.1"
    id="_x32_"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 512 512"
    fill={fill}
    width={width}
    height={height}
    style={style}
    {...props}
  >
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></g>
    <g id="SVGRepo_iconCarrier">
      <g>
        <path
          className="st0"
          d="M512,0H0v40h16v296h480V40h16V0z M464,304H48V40h416V304z"
        ></path>
        <rect x="240" y="352" className="st0" width="32" height="160"></rect>
        <polygon
          className="st0"
          points="113.273,512 145.273,512 212.179,352 180.179,352"
        ></polygon>
        <polygon
          className="st0"
          points="299.82,352 366.726,512 398.726,512 331.82,352"
        ></polygon>
        <path
          className="st0"
          d="M149.797,214.883c12.969,0,23.469-10.508,23.469-23.469c0-1.805-0.25-3.547-0.633-5.242l53.726-34.774
            c3.938,2.985,8.781,4.821,14.094,4.821c0.664,0,1.289-0.141,1.938-0.195l13.57,29.398c-4.297,4.25-6.961,10.14-6.961,16.664
            c0,12.961,10.5,23.469,23.453,23.469c12.969,0,23.469-10.508,23.469-23.469c0-1.594-0.164-3.149-0.469-4.649l71.766-43.758
            c4.016,3.211,9.039,5.211,14.578,5.211c12.969,0,23.469-10.508,23.469-23.469c0-12.962-10.5-23.462-23.469-23.462
            c-12.961,0-23.461,10.5-23.461,23.462c0,1.594,0.164,3.148,0.468,4.648l-71.773,43.758c-4.016-3.202-9.039-5.202-14.578-5.202
            c-0.656,0-1.274,0.14-1.922,0.195l-13.57-29.406c4.297-4.25,6.961-10.141,6.961-16.664c0-12.961-10.5-23.461-23.469-23.461
            C227.5,109.29,217,119.79,217,132.75c0,1.812,0.25,3.554,0.633,5.242l-53.734,34.774c-3.93-2.976-8.782-4.812-14.102-4.812
            c-12.969,0-23.469,10.5-23.469,23.461S136.828,214.883,149.797,214.883z"
        ></path>
      </g>
    </g>
  </svg>
);

export default Out;
