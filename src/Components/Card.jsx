import React from 'react';
import p11 from '../images/p1.svg';
import p12 from '../images/p2.svg';
import p13 from '../images/p3.svg';
import mobile from '../images/cardimg.png';
import flower from '../images/unsplash_MicqqGyDQ6w.png';
import { useDrag } from 'react-dnd';

const Card = ({ task }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'Card',
    item: { id: task.id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  return (
    <div
      className={`transition-all rounded-2xl  ${
        isDragging ? 'bg-[#cfc6f7] border-dotted border-[#715dcc] border-2' : ''
      }`}
    >
      <div
        ref={drag}
        className={`px-2 py-2 bg-[#FFFFFF] rounded-2xl my-2 flex flex-col gap-2 transition-all cursor-pointer ${
          isDragging ? 'opacity-0' : ''
        }`}
      >
        <div className={`flex items-center justify-between`}>
          <div className="">
            <p className="bg-[#DFA87433] px-2 py-1 rounded text-[#D58D49] font-medium text-xs leading-[15px] font-['Inter'] not-italic">
              {task.priorty}
            </p>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#0D062D"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-more-horizontal"
            >
              <circle cx="12" cy="12" r="1"></circle>
              <circle cx="19" cy="12" r="1"></circle>
              <circle cx="5" cy="12" r="1"></circle>
            </svg>
          </div>
        </div>
        <p className="text-[#0D062D] font-semibold text-xl leading-[22px] font-['Inter'] not-italic">
          {task.name}
        </p>
        {/* <p className="text-[#787486] font-medium text-xs leading-[15px] font-['Inter'] not-italic">
          {task.des}
        </p> */}

        {task.ing === '' && (
          <p className="text-[#787486] font-medium text-xs leading-[15px] font-['Inter'] not-italic">
            {task.des}
          </p>
        )}

        {task.ing === 'flower' && <img src={flower} alt="card"></img>}
        {task.ing === 'mobile' && <img src={mobile} alt="card"></img>}

        <div className="flex lg:block xl:flex mt-3 ">
          <div className="flex grow lg:pb-2 xl:pb-0">
            <img
              src={p12}
              alt="p1"
              className="border rounded-full border-white"
            />
            <img
              src={p11}
              alt="p1"
              className="border -ms-2 rounded-full border-white"
            />
            <img
              src={p13}
              alt="p1"
              className="border -ms-2 rounded-full border-white"
            />
          </div>
          <div className="flex gap-1">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="15"
                height="15"
              >
                <path
                  d="M2 8.99374C2 5.68349 4.67654 3 8.00066 3H15.9993C19.3134 3 22 5.69478 22 8.99374V21H8.00066C4.68659 21 2 18.3052 2 15.0063V8.99374ZM20 19V8.99374C20 6.79539 18.2049 5 15.9993 5H8.00066C5.78458 5 4 6.78458 4 8.99374V15.0063C4 17.2046 5.79512 19 8.00066 19H20ZM14 11H16V13H14V11ZM8 11H10V13H8V11Z"
                  fill="rgba(120,116,134,1)"
                ></path>
              </svg>
              <p className="text-[#787486] font-medium text-xs leading-[15px] font-['Inter'] not-italic">
                {task.comments} Comments
              </p>
            </div>
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="15"
                height="15"
              >
                <path
                  d="M12.4142 5H21C21.5523 5 22 5.44772 22 6V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H10.4142L12.4142 5ZM4 5V19H20V7H11.5858L9.58579 5H4ZM8 12H16V14H8V12Z"
                  fill="rgba(120,116,134,1)"
                ></path>
              </svg>
              <p className="text-[#787486] font-medium text-xs leading-[15px] font-['Inter'] not-italic">
                {task.files} Files
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
