import React from "react";

export const EmptyConversation = () => {
  return (
    <>
      <svg
        id="changeColor"
        fill="#DC7633"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="100"
        zoomAndPan="magnify"
        viewBox="0 0 375 374.999991"
        height="100"
        preserveAspectRatio="xMidYMid meet"
        version="1.0"
      >
        <defs>
          <path
            id="pathAttribute"
            d="M 43.839844 17.902344 L 321.339844 17.902344 L 321.339844 362.902344 L 43.839844 362.902344 Z M 43.839844 17.902344 "
            clipRule="nonzero"
            fill="#ff006a"
            filter="url(#bgShadow)"
          >
            <filter id="bgShadow">
              <feDropShadow
                id="bgShadowValue"
                stdDeviation=".5"
                dx="0"
                dy="0"
                floodColor="black"
              ></feDropShadow>
            </filter>
          </path>
        </defs>
        <path
          id="pathAttribute"
          d="M 321.335938 44.882812 L 43.839844 44.882812 L 43.839844 268.027344 L 321.335938 268.027344 C 321.335938 268.027344 321.335938 44.882812 321.335938 44.882812 M 182.519531 295.007812 L 294.320312 295.007812 C 309.242188 295.007812 321.335938 282.929688 321.335938 268.027344 L 43.839844 268.027344 C 43.839844 282.929688 55.933594 295.007812 70.859375 295.007812 L 156.816406 295.007812 C 155.984375 322.605469 157.300781 350 154.949219 362.902344 C 165.105469 340.960938 172.5 317.363281 182.519531 295.007812 M 294.320312 17.902344 L 70.859375 17.902344 C 55.933594 17.902344 43.839844 29.976562 43.839844 44.882812 L 321.335938 44.882812 C 321.335938 29.976562 309.242188 17.902344 294.320312 17.902344 "
          fillOpacity="1"
          fillRule="nonzero"
          fill="#ff006a"
          filter="url(#bgShadow)"
        ></path>
        <g id="inner-icon" transform="translate(85,55)">
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="199.8"
            height="199.8"
            fill="currentColor"
            className="bi bi-chat"
            viewBox="0 0 16 16"
            id="IconChangeColor"
          >
            {" "}
            <path
              d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"
              id="mainIconPathAttribute"
              fill="#ffffff"
              filter="url(#shadow)"
            ></path>{" "}
            <filter id="shadow">
              <feDropShadow
                id="shadowValue"
                stdDeviation=".5"
                dx="0"
                dy="0"
                floodColor="black"
              ></feDropShadow>
            </filter>
          </svg>{" "}
        </g>
      </svg>
    </>
  );
};

export const EmptyCode = () => {
  return (
    <svg
      viewBox="0 0 24 24"
      width="60px"
      height="60px"
      fill="#FFFF"
      xmlns="http://www.w3.org/2000/svg"
      stroke="#FF9800"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <path
          d="M15.5 9L15.6716 9.17157C17.0049 10.5049 17.6716 11.1716 17.6716 12C17.6716 12.8284 17.0049 13.4951 15.6716 14.8284L15.5 15"
          stroke="#FF9800"
          strokeWidth="1.5"
          strokeLinecap="round"
        ></path>{" "}
        <path
          d="M13.2942 7.17041L12.0001 12L10.706 16.8297"
          stroke="#FF9800"
          strokeWidth="1.5"
          strokeLinecap="round"
        ></path>{" "}
        <path
          d="M8.49994 9L8.32837 9.17157C6.99504 10.5049 6.32837 11.1716 6.32837 12C6.32837 12.8284 6.99504 13.4951 8.32837 14.8284L8.49994 15"
          stroke="#FF9800"
          strokeWidth="1.5"
          strokeLinecap="round"
        ></path>{" "}
        <path
          d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7"
          stroke="#FF9800"
          strokeWidth="1.5"
          strokeLinecap="round"
        ></path>{" "}
      </g>
    </svg>
  );
};

export const EmptyImage = () => {
  return (
    <svg
      viewBox="0 0 24 24"
      width="60px"
      height="60px"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <path
          d="M14.2639 15.9376L12.5958 14.2835C11.7909 13.4852 11.3884 13.0861 10.9266 12.9402C10.5204 12.8119 10.0838 12.8166 9.68048 12.9537C9.22188 13.1096 8.82814 13.5173 8.04068 14.3327L4.04409 18.2802M14.2639 15.9376L14.6053 15.5991C15.4112 14.7999 15.8141 14.4003 16.2765 14.2544C16.6831 14.1262 17.12 14.1312 17.5236 14.2688C17.9824 14.4252 18.3761 14.834 19.1634 15.6515L20 16.4936M14.2639 15.9376L18.275 19.9566M18.275 19.9566C17.9176 20.0001 17.4543 20.0001 16.8 20.0001H7.2C6.07989 20.0001 5.51984 20.0001 5.09202 19.7821C4.71569 19.5904 4.40973 19.2844 4.21799 18.9081C4.12796 18.7314 4.07512 18.5322 4.04409 18.2802M18.275 19.9566C18.5293 19.9257 18.7301 19.8728 18.908 19.7821C19.2843 19.5904 19.5903 19.2844 19.782 18.9081C20 18.4803 20 17.9202 20 16.8001V16.4936M12.5 4L7.2 4.00011C6.07989 4.00011 5.51984 4.00011 5.09202 4.21809C4.71569 4.40984 4.40973 4.7158 4.21799 5.09213C4 5.51995 4 6.08 4 7.20011V16.8001C4 17.4576 4 17.9222 4.04409 18.2802M20 11.5V16.4936M14 10.0002L16.0249 9.59516C16.2015 9.55984 16.2898 9.54219 16.3721 9.5099C16.4452 9.48124 16.5146 9.44407 16.579 9.39917C16.6515 9.34859 16.7152 9.28492 16.8425 9.1576L21 5.00015C21.5522 4.44787 21.5522 3.55244 21 3.00015C20.4477 2.44787 19.5522 2.44787 19 3.00015L14.8425 7.1576C14.7152 7.28492 14.6515 7.34859 14.6009 7.42112C14.556 7.4855 14.5189 7.55494 14.4902 7.62801C14.4579 7.71033 14.4403 7.79862 14.4049 7.97518L14 10.0002Z"
          stroke="#FF004D"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>{" "}
      </g>
    </svg>
  );
};

export const EmptyMusic = () => {
  return (
    <svg
      width="60px"
      height="60px"
      viewBox="-4 0 34 34"
      xmlns="http://www.w3.org/2000/svg"
      fill="#DC84F3"
      stroke="#DC84F3"
      transform="matrix(1, 0, 0, 1, 0, 0)rotate(0)"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke="#DC84F3"
        strokeWidth="1.768"
      >
        {" "}
        <g fill="none" fillRule="evenodd">
          {" "}
          <g>
            {" "}
            <g stroke="#13314e" strokeWidth="2" transform="translate(1 1)">
              {" "}
              <rect width="24" height="32" rx="1"></rect>{" "}
            </g>{" "}
            <g transform="translate(1 1) translate(5 10)" fill="#DC84F3">
              {" "}
              <ellipse
                id="Oval-54"
                transform="rotate(-30 3 11)"
                cx="3"
                cy="11"
                rx="2"
                ry="1.5"
              ></ellipse>{" "}
              <ellipse
                transform="rotate(-30 10 10)"
                cx="10"
                cy="10"
                rx="2"
                ry="1.5"
              ></ellipse>{" "}
              <path d="M4 2h1v9H4zM11 1h1v9h-1zM4 2l8-2v1L4 3V2z"></path>{" "}
            </g>{" "}
          </g>{" "}
        </g>{" "}
      </g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <g fill="none" fillRule="evenodd">
          {" "}
          <g>
            {" "}
            <g stroke="#13314e" strokeWidth="2" transform="translate(1 1)">
              {" "}
              <rect width="24" height="32" rx="1"></rect>{" "}
            </g>{" "}
            <g transform="translate(1 1) translate(5 10)" fill="#DC84F3">
              {" "}
              <ellipse
                id="Oval-54"
                transform="rotate(-30 3 11)"
                cx="3"
                cy="11"
                rx="2"
                ry="1.5"
              ></ellipse>{" "}
              <ellipse
                transform="rotate(-30 10 10)"
                cx="10"
                cy="10"
                rx="2"
                ry="1.5"
              ></ellipse>{" "}
              <path d="M4 2h1v9H4zM11 1h1v9h-1zM4 2l8-2v1L4 3V2z"></path>{" "}
            </g>{" "}
          </g>{" "}
        </g>{" "}
      </g>
    </svg>
  );
};

export const EmptyVideo = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="60px"
      height="60px"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#5659c8"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-video"
    >
      <path d="m22 8-6 4 6 4V8Z" />
      <rect width="14" height="12" x="2" y="6" rx="2" ry="2" />
    </svg>
  );
};
