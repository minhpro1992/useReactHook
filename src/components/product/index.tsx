"use client";
import { FC } from "react";
import { ImageSlider } from "../imageSlider";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faClock } from "@fortawesome/free-solid-svg-icons";

export const Product: FC = () => {
  return (
    <section>
      <div className="grid grid-cols-12 md:gap-8 my-6">
        <div className="md:col-start-1 md:col-span-5 col-span-12">
          <ImageSlider />
        </div>
        <div className="md:col-start-6 md:col-span-7 col-span-12">
          <div className="flex flex-col justify-between h-full">
            <div className="md:mt-0">
              <div className="font-bold">Title</div>
              <div className="my-4">Description</div>
              <div className="border-t-2 py-4">
                <div>
                  Price:{" "}
                  <span className="line-through tracking-wide">100.000</span>{" "}
                  <span className="align-super">đ</span>
                </div>
                <div className="font-bold text-red-600 text-2xl tracking-wide">
                  80.000
                  <span className="align-super"> đ </span>
                  <span className="inline-block p-0.5 bg-red-600 text-white rounded text-xs">
                    -20%
                  </span>
                </div>
              </div>
              <div className="my-4">
                <a href="/login">
                  <StyleLogin>Sign in to buy deal</StyleLogin>
                </a>
              </div>
            </div>
            <div className="border-t-2 border-b-2 flex items-center p-2">
              <div className="flex border-r-2 items-center flex-grow md:ml-4 ml-0">
                <div className="w-8 h-8 border-2 rounded-full flex items-center">
                  <FontAwesomeIcon
                    icon={faUser}
                    className="fa-solid fa-user w-full"
                  />
                </div>
                <span className="text-sm ml-2 flex-wrap">999 bought</span>
              </div>
              <div className="flex items-center flex-grow ml-4">
                <div className="w-8 h-8 flex items-center">
                  <FontAwesomeIcon
                    icon={faClock}
                    className="fa-regular fa-clock w-full"
                  />
                </div>
                <span className="text-sm ml-2 inline-block w-full">
                  End date: 23:59:59
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const StyleLogin = styled.div`
  width: 12.5rem;
  height: 2.5rem;
  font-weight: 700;
  background-image: linear-gradient(70deg, #f46f20 42%, #fed92b 130%);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2rem;
  color: #ffffff;
  font-size: 0.75rem;
  text-transform: uppercase;
`;
