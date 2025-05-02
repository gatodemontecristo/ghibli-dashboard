"use client";
import React, { useState } from "react";

export const Sidebar = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      <div
        className={`fixed left-0 top-0 lg:w-1/4 md:w-1/2 w-4/6 h-full md:p-4 p-2 shadow-lg bg-white border-gray-950 border-2   transform transition-transform duration-500 ease-in-out z-50
        ${isModalOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex flex-col justify-between h-full">
          <div className="flex flex-col h-3/4">
            <p className="font-light md:text-[18px] text-[14px]  mb-3 ">
              MY ORDERS
            </p>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleModal}
        ></div>
      )}
    </div>
  );
};
