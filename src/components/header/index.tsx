"use client";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";
import styled from "styled-components";

export const Header: FC = () => {
  return (
    <header>
      <div className="grid grid-cols-12 items-center">
        <div className="md:order-1 col-start-1 col-span-2">
          <a href="/" className="text-black">
            <img src="./google.svg" alt="google" width={40} height={40} />
          </a>
        </div>
        <div className="md:col-start-3 md:col-span-8 md:order-2 md:mt-0 relative col-start-1 col-span-12 order-3 mt-4">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-8 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="input"
            type="text"
            placeholder="Search"
          />
          <span className="absolute left-2 top-1/2 transform -translate-y-1/2">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="fa-thin fa-magnifying-glass"
            />
          </span>
        </div>
        <div className="md:order-3 col-start-11 col-span-2">
          <nav className="flex items-center justify-end">
            <a href="/login">
              <StyleLogin>Login</StyleLogin>
            </a>
          </nav>
        </div>
      </div>
    </header>
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
