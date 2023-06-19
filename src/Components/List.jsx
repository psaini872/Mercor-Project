import React from 'react';
import Card from './Card.jsx';
import { useDrop } from 'react-dnd';

const List = ({ name, color, plus, Tasks, setTask }) => {
  const addTaskToAnotherSection = (id) => {
    setTask((prev) => {
      const mtasks = prev.map((t) => {
        if (t.id === id) {
          return { ...t, status: name };
        }
        return t;
      });
      return mtasks;
    });
  };
  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'Card',
    drop: (item) => {
      addTaskToAnotherSection(item.id);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));
  console.log(isOver);
  return (
    <div
      ref={drop}
      className="bg-[#F5F5F5] rounded-2xl grow px-3 pb-2 lg:w-full w-[80%] mx-auto mb-5 lg:mb-0"
    >
      <div className=" pt-2 left-0 bg-[#F5F5F5]">
        <div className="flex items-center">
          <div className="flex gap-2 grow items-center">
            <svg
              width="8"
              height="8"
              viewBox="0 0 8 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="4" cy="4" r="4" fill={color} />
            </svg>
            <p className="text-[#0D062D] font-medium text-base leading-[19px] font-['Inter'] not-italic">
              {name}
            </p>
            <p className="text-[#625F6D] font-medium text-base leading-[19px] font-['Inter'] not-italic bg-[#E0E0E0] rounded-full px-1.5">
              3
            </p>
          </div>
          {plus === 't' && (
            <div className="p-1 bg-[#5030E533] rounded-md ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#5030E5"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-plus"
              >
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            </div>
          )}
        </div>
        {plus === 't' && (
          <hr className="mt-2 border-2 border-[#5030E5] rounded-2xl" />
        )}
        {plus === 'o' && (
          <hr className="mt-2 border-2 border-[#FFA500] rounded-2xl" />
        )}
        {plus === 'd' && (
          <hr className="mt-2 border-2 border-[#76A5EA] rounded-2xl" />
        )}
      </div>
      <div className="">
        {Tasks.map((item) => item.status === name && <Card task={item} />)}
      </div>
    </div>
  );
};

export default List;
