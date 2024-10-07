import React from 'react';

const RocketIcon = ({ width = 24, height = 24, color = '#1e65ff' }) => {
  return (
    <svg
      viewBox="0 0 512 512"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      fill={color}
      width={width}
      height={height}
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
      <g id="SVGRepo_iconCarrier">
        <title>rocket-filled</title>
        <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g id="icon" fill={color} transform="translate(42.666667, 64.000000)">
            <path
              d="M405.333333,1.42108547e-14 C396.316305,122.794806 364.316305,211.683695 309.333333,266.666667 C299.582265,276.417735 288.905446,285.33185 277.302879,293.409011 L277.302464,341.234872 L213.302464,405.234872 L174.248,336.891 L68.525,231.157 L7.10542736e-15,192 L64,128 L112.079613,128.000404 C120.083859,116.387258 128.94621,105.720457 138.666667,96 C193.649638,41.0170286 282.538527,9.01702859 405.333333,1.42108547e-14 Z M136.329915,329.707793 L166.499804,359.877683 L121.24497,405.132517 L91.0750809,374.962627 L136.329915,329.707793 Z M91.0750809,284.452959 L121.24497,314.622849 L45.8202469,390.047572 L15.6503576,359.877683 L91.0750809,284.452959 Z M45.8202469,239.198125 L75.9901363,269.368015 L30.7353023,314.622849 L0.565412939,284.452959 L45.8202469,239.198125 Z M245.333333,128 C227.660221,128 213.333333,142.326888 213.333333,160 C213.333333,177.673112 227.660221,192 245.333333,192 C263.006445,192 277.333333,177.673112 277.333333,160 C277.333333,142.326888 263.006445,128 245.333333,128 Z"
              id="Combined-Shape"
            ></path>
          </g>
        </g>
      </g>
    </svg>
  );
};

export default RocketIcon;
