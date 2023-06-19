import svg from './images/profileimg.png';
import svg2 from './images/Ellipse.svg';
import p1 from './images/p1.svg';
import p2 from './images/p2.svg';
import p3 from './images/p3.svg';
import p4 from './images/p4.svg';
import Button from './Components/Button';
import List from './Components/List';

import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { useState } from 'react';

function App() {
  const Tasks = [
    {
      id: 1,
      status: 'To Do',
      priorty: 'Low',
      name: 'Brainstorming',
      des: "Brainstorming brings team members' diverse experience into play.",
      ing: '',
      comments: 12,
      files: 10,
    },
    {
      id: 2,
      status: 'To Do',
      priorty: 'High',
      name: 'Research',
      des: 'User research helps you to create an optimal product for users.',
      ing: '',
      comments: 10,
      files: 3,
    },
    {
      id: 3,
      status: 'To Do',
      priorty: 'High',
      name: 'Wireframes',
      des: 'Low fidelity wireframes include the most basic content and visuals.',
      ing: '',
      comments: 6,
      files: 8,
    },
    {
      id: 4,
      status: 'On Progress',
      priorty: 'High',
      name: 'Onboarding Illustrations ',
      des: '',
      ing: 'flower',
      comments: 14,
      files: 15,
    },
    {
      id: 5,
      status: 'Done',
      priorty: 'Completed',
      name: 'Mobile App Design',
      des: '',
      ing: 'mobile',
      comments: 14,
      files: 15,
    },
    {
      id: 6,
      status: 'Done',
      priorty: 'Completed',
      name: 'Design System',
      des: 'It just needs to adapt the UI from what you did before ',
      ing: '',
      comments: 14,
      files: 15,
    },
  ];
  const [tasks, setTasks] = useState(Tasks);

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="flex">
        {/* Slide Bar */}
        <div className=" max-w-[250px] min-h-[100vh] ">
          <div className="sticky top-0">
            {/* LOGO */}
            <div className=" border-b border-[#DBDBDB] md:h-20 h-16 items-center flex px-3 md:gap-7 ">
              <div className="flex md:gap-3 gap-1 grow">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.6"
                    d="M14 16C14 17.77 13.23 19.37 12 20.46C10.94 21.42 9.54 22 8 22C4.69 22 2 19.31 2 16C2 13.24 3.88 10.9 6.42 10.21C7.11 11.95 8.59 13.29 10.42 13.79C10.92 13.93 11.45 14 12 14C12.55 14 13.08 13.93 13.58 13.79C13.85 14.47 14 15.22 14 16Z"
                    fill="#5030E5"
                  />
                  <path
                    d="M18 8C18 8.78 17.85 9.53 17.58 10.21C16.89 11.95 15.41 13.29 13.58 13.79C13.08 13.93 12.55 14 12 14C11.45 14 10.92 13.93 10.42 13.79C8.59 13.29 7.11 11.95 6.42 10.21C6.15 9.53 6 8.78 6 8C6 4.69 8.69 2 12 2C15.31 2 18 4.69 18 8Z"
                    fill="#5030E5"
                  />
                  <path
                    opacity="0.4"
                    d="M22 16C22 19.31 19.31 22 16 22C14.46 22 13.06 21.42 12 20.46C13.23 19.37 14 17.77 14 16C14 15.22 13.85 14.47 13.58 13.79C15.41 13.29 16.89 11.95 17.58 10.21C20.12 10.9 22 13.24 22 16Z"
                    fill="#5030E5"
                  />
                </svg>
                <p className="text-[#0D062D] hidden md:block font-bold text-xl leading-[24px] font-['Inter'] text-right not-italic">
                  Project M.
                </p>
              </div>
              <div className="hidden md:block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#787486"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-chevrons-left"
                >
                  <polyline points="11 17 6 12 11 7"></polyline>
                  <polyline points="18 17 13 12 18 7"></polyline>
                </svg>
              </div>
            </div>
            {/* Slidebar Content */}
            <div className="py-2 px-2 ">
              <div className="flex gap-3 items-center py-3 px-2 hover:bg-[#F5F5F5] rounded-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#787486"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-home"
                >
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
                <p className="text-[#787486] hidden  md:block font-medium text-base leading-[19px] font-['Inter']  not-italic">
                  Home
                </p>
              </div>

              <div className="flex gap-3 items-center py-2 px-2 hover:bg-[#F5F5F5] rounded-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path
                    d="M2 8.99374C2 5.68349 4.67654 3 8.00066 3H15.9993C19.3134 3 22 5.69478 22 8.99374V21H8.00066C4.68659 21 2 18.3052 2 15.0063V8.99374ZM20 19V8.99374C20 6.79539 18.2049 5 15.9993 5H8.00066C5.78458 5 4 6.78458 4 8.99374V15.0063C4 17.2046 5.79512 19 8.00066 19H20ZM14 11H16V13H14V11ZM8 11H10V13H8V11Z"
                    fill="rgba(120,116,134,1)"
                  ></path>
                </svg>
                <p className="text-[#787486] hidden md:block font-medium text-base leading-[19px] font-['Inter']  not-italic">
                  Messages
                </p>
              </div>
              <div className="flex gap-3 items-center py-2 px-2 hover:bg-[#F5F5F5] rounded-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path
                    d="M8.00008 6V9H5.00008V6H8.00008ZM3.00008 4V11H10.0001V4H3.00008ZM13.0001 4H21.0001V6H13.0001V4ZM13.0001 11H21.0001V13H13.0001V11ZM13.0001 18H21.0001V20H13.0001V18ZM10.7072 16.2071L9.29297 14.7929L6.00008 18.0858L4.20718 16.2929L2.79297 17.7071L6.00008 20.9142L10.7072 16.2071Z"
                    fill="rgba(120,116,134,1)"
                  ></path>
                </svg>
                <p className="text-[#787486] hidden md:block font-medium text-base leading-[19px] font-['Inter']  not-italic">
                  Task
                </p>
              </div>
              <div className="flex gap-3 items-center py-2 px-2 hover:bg-[#F5F5F5] rounded-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#787486"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-users"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
                <p className="text-[#787486] hidden md:block font-medium text-base leading-[19px] font-['Inter']  not-italic">
                  Members
                </p>
              </div>
              <div className="flex gap-3 items-center py-2 px-2 hover:bg-[#F5F5F5] rounded-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#787486"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-settings"
                >
                  <circle cx="12" cy="12" r="3"></circle>
                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                </svg>
                <p className="text-[#787486] hidden md:block font-medium text-base leading-[19px] font-['Inter']  not-italic">
                  Setting
                </p>
              </div>
              <div className="border-b border-[#DBDBDB] mt-3 "></div>
              <div className="my-2 flex-col md:flex gap-4 mx-2 hidden ">
                <div className="flex">
                  <p className="text-[#787486] font-bold text-xs leading-[15px] font-['Inter']  not-italic grow-[30] ">
                    MY PROJECTS
                  </p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#787486"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-plus-square grow-[5]"
                  >
                    <rect
                      x="3"
                      y="3"
                      width="18"
                      height="18"
                      rx="2"
                      ry="2"
                    ></rect>
                    <line x1="12" y1="8" x2="12" y2="16"></line>
                    <line x1="8" y1="12" x2="16" y2="12"></line>
                  </svg>
                </div>
                <div className="flex items-center gap-4 hover:bg-[#5030e514] py-2 px-1">
                  <svg
                    width="8"
                    height="8"
                    viewBox="0 0 8 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="4" cy="4" r="4" fill="#7AC555" />
                  </svg>
                  <p className="text-[#787486] font-medium text-base leading-[19px] font-['Inter']  not-italic grow ">
                    Mobile App
                  </p>
                </div>
                <div className="flex items-center gap-4 hover:bg-[#5030e514] py-2 px-1">
                  <svg
                    width="8"
                    height="8"
                    viewBox="0 0 8 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="4" cy="4" r="4" fill="#FFA500" />
                  </svg>
                  <p className="text-[#787486] font-medium text-base leading-[19px] font-['Inter']  not-italic grow ">
                    Website Redesign
                  </p>
                </div>
                <div className="flex items-center gap-4 hover:bg-[#5030e514] py-2 px-1">
                  <svg
                    width="8"
                    height="8"
                    viewBox="0 0 8 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="4" cy="4" r="4" fill="#E4CCFD" />
                  </svg>
                  <p className="text-[#787486] font-medium text-base leading-[19px] font-['Inter']  not-italic grow ">
                    Design System
                  </p>
                </div>
                <div className="flex items-center gap-4 hover:bg-[#5030e514] py-2 px-1">
                  <svg
                    width="8"
                    height="8"
                    viewBox="0 0 8 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="4" cy="4" r="4" fill="#76A5EA" />
                  </svg>
                  <p className="text-[#787486] font-medium text-base leading-[19px] font-['Inter']  not-italic grow ">
                    Wireframes
                  </p>
                </div>
              </div>
            </div>

            {/* Thoght Time */}
            <div className="mt-2 hidden md:block">
              <div class=" flex justify-center relative -mb-6">
                <div className="bg-[#e9e6e6] rounded-t-full">
                  <img
                    class="w-full rounded-full"
                    src={svg2}
                    alt="Light bulb"
                    className="h-16 w-16"
                  />
                  <div className="absolute top-5 m-auto left-[45%] ">
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.21 4.36C15.17 2.26 13.16 0.709996 10.83 0.199996C8.38997 -0.340004 5.88997 0.239996 3.97997 1.78C2.05997 3.31 0.969971 5.6 0.969971 8.05C0.969971 10.64 2.51997 13.35 4.85997 14.92V15.75C4.84997 16.03 4.83997 16.46 5.17997 16.81C5.52997 17.17 6.04997 17.21 6.45997 17.21H11.59C12.13 17.21 12.54 17.06 12.82 16.78C13.2 16.39 13.19 15.89 13.18 15.62V14.92C16.28 12.83 18.23 8.42 16.21 4.36Z"
                        fill="#FBCB18"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="bg-[#e9e6e6] flex flex-col justify-center w-[75%] items-center mx-auto pt-5 pb-3 gap-3 py-2  rounded-2xl">
                <p>Thoughts Time</p>
                <p className="px-1 text-xs text-[#787486] text-center">
                  We don’t have any notice for you, till then you can share your
                  thoughts with your peers.
                </p>
                <p className="py-2 px-4 bg-white rounded-[4px]">
                  Write a message
                </p>
              </div>
            </div>
          </div>

          {/*  */}
        </div>
        {/* Main */}
        <div className="grow-[8]  border-s border-[#DBDBDB]">
          {/* NavBar */}
          <div className="border-b border-[#DBDBDB] flex bg-white  items-center md:h-20 h-16  md:px-10 sm:px-5  px-3 justify-between sticky top-0">
            {/* Search */}
            <div className="grow-[50]">
              <div className="flex  bg-[#F5F5F5] rounded-md md:py-3 py-1 items-center px-1 gap-1 w-[90%] max-w-[400px]">
                <svg
                  width="20"
                  height="19"
                  viewBox="0 0 20 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="20" height="19" fill="#F5F5F5" />
                  <g filter="url(#filter0_d_0_1)">
                    <rect
                      x="-316"
                      y="-33"
                      width="1440"
                      height="932"
                      rx="30"
                      fill="white"
                    />
                  </g>
                  <rect
                    x="-17"
                    y="-11"
                    width="417"
                    height="44"
                    rx="6"
                    fill="#F5F5F5"
                  />
                  <path
                    d="M10.3417 18.25C15.1512 18.25 19.0501 14.3512 19.0501 9.54168C19.0501 4.7322 15.1512 0.833344 10.3417 0.833344C5.53225 0.833344 1.63339 4.7322 1.63339 9.54168C1.63339 14.3512 5.53225 18.25 10.3417 18.25Z"
                    stroke="#787486"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M19.9667 19.1667L18.1334 17.3333"
                    stroke="#787486"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <defs>
                    <filter
                      id="filter0_d_0_1"
                      x="-406"
                      y="-79"
                      width="1620"
                      height="1112"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feMorphology
                        radius="6"
                        operator="dilate"
                        in="SourceAlpha"
                        result="effect1_dropShadow_0_1"
                      />
                      <feOffset dy="44" />
                      <feGaussianBlur stdDeviation="42" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0.847059 0 0 0 0 0.85098 0 0 0 0 0.858824 0 0 0 1 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_0_1"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_0_1"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
                <input
                  type="text"
                  placeholder="Search for anything..."
                  className="bg-[#F5F5F5] focus:border-0 focus:outline-none "
                />
              </div>
            </div>
            {/* Three Icons */}
            <div className=" md:gap-3 gap-2 grow-[5] hidden sm:flex">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 2V5"
                  stroke="#787486"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M16 2V5"
                  stroke="#787486"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M3.5 9.09H20.5"
                  stroke="#787486"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z"
                  stroke="#787486"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M11.9955 13.7H12.0045"
                  stroke="#787486"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8.29431 13.7H8.30329"
                  stroke="#787486"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8.29431 16.7H8.30329"
                  stroke="#787486"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17 18.4301H13L8.54999 21.39C7.88999 21.83 7 21.3601 7 20.5601V18.4301C4 18.4301 2 16.4301 2 13.4301V7.42999C2 4.42999 4 2.42999 7 2.42999H17C20 2.42999 22 4.42999 22 7.42999V13.4301C22 16.4301 20 18.4301 17 18.4301Z"
                  stroke="#787486"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12 11.36V11.15C12 10.47 12.42 10.11 12.84 9.82001C13.25 9.54001 13.66 9.18002 13.66 8.52002C13.66 7.60002 12.92 6.85999 12 6.85999C11.08 6.85999 10.34 7.60002 10.34 8.52002"
                  stroke="#787486"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M11.9955 13.75H12.0045"
                  stroke="#787486"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.02 2.91C8.71 2.91 6.02 5.6 6.02 8.91V11.8C6.02 12.41 5.76 13.34 5.45 13.86L4.3 15.77C3.59 16.95 4.08 18.26 5.38 18.7C9.69 20.14 14.34 20.14 18.65 18.7C19.86 18.3 20.39 16.87 19.73 15.77L18.58 13.86C18.28 13.34 18.02 12.41 18.02 11.8V8.91C18.02 5.61 15.32 2.91 12.02 2.91Z"
                  stroke="#787486"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                />
                <path
                  d="M13.87 3.2C13.56 3.11 13.24 3.04 12.91 3C11.95 2.88 11.03 2.95 10.17 3.2C10.46 2.46 11.18 1.94 12.02 1.94C12.86 1.94 13.58 2.46 13.87 3.2Z"
                  stroke="#787486"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M15.02 19.06C15.02 20.71 13.67 22.06 12.02 22.06C11.2 22.06 10.44 21.72 9.89999 21.18C9.35999 20.64 9.01999 19.88 9.01999 19.06"
                  stroke="#787486"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                />
                <circle cx="18" cy="4" r="3" fill="#D8727D" />
              </svg>
            </div>

            <div className="flex gap-3 items-center ">
              <div className="hidden md:block">
                <p className="text-[#0D062D] font-normal text-base leading-[19px] font-['Inter'] text-right not-italic ">
                  Pranshu Saini
                </p>
                <p className="text-[#787486] font-normal text-xs leading-[17px] font-['Inter'] text-right not-italic">
                  Haryana, India
                </p>
              </div>
              <div className="rounded-full">
                <img src={svg} alt="" className="rounded-full" />
              </div>
            </div>
          </div>
          {/* Invit */}
          <div className="mt-8 md:mt-10 laptop:flex-row flex-col flex  px-8 gap-2">
            <div className="flex items-center gap-3 laptop:grow">
              <p className="text-[#0D062D] font-normal text-5xl leading-[56px] font-['Inter'] not-italic">
                Mobile App
              </p>
              <div className="p-2 bg-[#5030E533] rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#5030E5"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-edit-2"
                >
                  <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
                </svg>
              </div>
              <div className="p-2 bg-[#5030E533] rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke=" #5030E5"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-link"
                >
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                </svg>
              </div>
            </div>
            <div className="flex items-center group-last gap-2 self-end">
              <div className="p-1 bg-[#5030E533] rounded-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="10"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke=" #5030E5"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-plus-square"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="12" y1="8" x2="12" y2="16"></line>
                  <line x1="8" y1="12" x2="16" y2="12"></line>
                </svg>
              </div>
              <p className="text-[#5030E5] font-medium text-base leading-[19px] font-['Inter'] not-italic">
                Invite
              </p>
              <div className="flex">
                <img
                  src={p2}
                  alt="p1"
                  className="border rounded-full border-white"
                />
                <img
                  src={p1}
                  alt="p1"
                  className="border -ms-2 rounded-full border-white"
                />
                <img
                  src={p3}
                  alt="p1"
                  className="border -ms-2 rounded-full border-white"
                />
                <img
                  src={p4}
                  alt="p1"
                  className="border -ms-2 rounded-full border-white"
                />
                <div className="border -ms-2 rounded-full border-white bg-[#e7d1d4] w-[38px] flex items-center justify-center">
                  <p className=" text-white">+2</p>
                </div>
              </div>
            </div>
          </div>
          {/* Share */}
          <div className="flex gap-5 px-8 mt-6">
            <div className="flex gap-2 grow">
              <Button type="Filter"></Button>
              <Button type="Calendar"></Button>
            </div>
            <div className="flex gap-5 items-center">
              <Button type="Profile"></Button>
              <div className="border-s h-[80%] border-[#787486]"></div>
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="40" height="40" fill="#F5F5F5" />
                <g filter="url(#filter0_d_0_1)">
                  <rect
                    x="-1309"
                    y="-225"
                    width="1440"
                    height="932"
                    rx="30"
                    fill="white"
                  />
                </g>
                <rect width="40" height="40" rx="6" fill="#5030E5" />
                <path
                  d="M25.925 21.125L14.075 21.125C12.95 21.125 12.5 21.6 12.5 22.8L12.5 25.825C12.5 27.025 12.95 27.5 14.075 27.5L25.925 27.5C27.05 27.5 27.5 27.025 27.5 25.825L27.5 22.8C27.5 21.6 27.05 21.125 25.925 21.125Z"
                  fill="white"
                />
                <path
                  d="M25.925 12.5L14.075 12.5C12.95 12.5 12.5 12.975 12.5 14.175L12.5 17.2C12.5 18.3917 12.95 18.875 14.075 18.875L25.925 18.875C27.05 18.875 27.5 18.4 27.5 17.2L27.5 14.175C27.5 12.975 27.05 12.5 25.925 12.5Z"
                  fill="white"
                />
                <defs>
                  <filter
                    id="filter0_d_0_1"
                    x="-1399"
                    y="-271"
                    width="1620"
                    height="1112"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feMorphology
                      radius="6"
                      operator="dilate"
                      in="SourceAlpha"
                      result="effect1_dropShadow_0_1"
                    />
                    <feOffset dy="44" />
                    <feGaussianBlur stdDeviation="42" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.847059 0 0 0 0 0.85098 0 0 0 0 0.858824 0 0 0 1 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_0_1"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_0_1"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path
                  d="M7.5 11.5C5.01472 11.5 3 9.48528 3 7C3 4.51472 5.01472 2.5 7.5 2.5C9.98528 2.5 12 4.51472 12 7C12 9.48528 9.98528 11.5 7.5 11.5ZM7.5 21.5C5.01472 21.5 3 19.4853 3 17C3 14.5147 5.01472 12.5 7.5 12.5C9.98528 12.5 12 14.5147 12 17C12 19.4853 9.98528 21.5 7.5 21.5ZM17.5 11.5C15.0147 11.5 13 9.48528 13 7C13 4.51472 15.0147 2.5 17.5 2.5C19.9853 2.5 22 4.51472 22 7C22 9.48528 19.9853 11.5 17.5 11.5ZM17.5 21.5C15.0147 21.5 13 19.4853 13 17C13 14.5147 15.0147 12.5 17.5 12.5C19.9853 12.5 22 14.5147 22 17C22 19.4853 19.9853 21.5 17.5 21.5ZM7.5 9.5C8.88071 9.5 10 8.38071 10 7C10 5.61929 8.88071 4.5 7.5 4.5C6.11929 4.5 5 5.61929 5 7C5 8.38071 6.11929 9.5 7.5 9.5ZM7.5 19.5C8.88071 19.5 10 18.3807 10 17C10 15.6193 8.88071 14.5 7.5 14.5C6.11929 14.5 5 15.6193 5 17C5 18.3807 6.11929 19.5 7.5 19.5ZM17.5 9.5C18.8807 9.5 20 8.38071 20 7C20 5.61929 18.8807 4.5 17.5 4.5C16.1193 4.5 15 5.61929 15 7C15 8.38071 16.1193 9.5 17.5 9.5ZM17.5 19.5C18.8807 19.5 20 18.3807 20 17C20 15.6193 18.8807 14.5 17.5 14.5C16.1193 14.5 15 15.6193 15 17C15 18.3807 16.1193 19.5 17.5 19.5Z"
                  fill="rgba(120,116,134,1)"
                ></path>
              </svg>
            </div>
          </div>
          {/* To do Lists */}
          <div className="lg:flex px-8 gap-5 mt-5">
            <List
              name="To Do"
              color="#5030E5"
              plus="t"
              Tasks={tasks}
              setTask={setTasks}
            />
            <List
              name="On Progress"
              color="#FFA500"
              plus="o"
              Tasks={tasks}
              setTask={setTasks}
            />
            <List
              name="Done"
              color="#76A5EA"
              plus="d"
              Tasks={tasks}
              setTask={setTasks}
            />
          </div>
        </div>
      </div>
    </DndProvider>
  );
}

export default App;
