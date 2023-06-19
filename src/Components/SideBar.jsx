import React from 'react';
import svg2 from '../images/Ellipse.svg';

const SideBar = () => {
  return (
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
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="12" y1="8" x2="12" y2="16"></line>
                <line x1="8" y1="12" x2="16" y2="12"></line>
              </svg>
            </div>
            <div className="flex items-center gap-4 hover:bg-[#5030e514] py-2 rounded-md  ps-2">
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
            <div className="flex items-center gap-4 hover:bg-[#5030e514] py-2 rounded-md  ps-2">
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
            <div className="flex items-center gap-4 hover:bg-[#5030e514] py-2 rounded-md  ps-2">
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
            <div className="flex items-center gap-4 hover:bg-[#5030e514] py-2 rounded-md  ps-2">
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
            <p className="py-2 px-4 bg-white rounded-[4px]">Write a message</p>
          </div>
        </div>
      </div>

      {/*  */}
    </div>
  );
};

export default SideBar;
