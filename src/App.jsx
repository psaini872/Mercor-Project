import p1 from './images/p1.svg';
import p2 from './images/p2.svg';
import p3 from './images/p3.svg';
import p4 from './images/p4.svg';
import Button from './Components/Button';
import List from './Components/List';
import SideBar from './Components/SideBar';
import NavBar from './Components/NavBar';
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
        <SideBar />
        {/* Main */}
        <div className="grow-[8]  border-s border-[#DBDBDB]">
          <NavBar />
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
