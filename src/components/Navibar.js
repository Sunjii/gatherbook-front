import {
  Button,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Navbar,
  Typography,
} from "@material-tailwind/react";
import React from "react";
import { Link } from "react-router-dom";

const Navibar = () => {
  return (
    <Navbar
      color="blue"
      className="max-w-full h-14 mx-auto lg:bg-blue-500 rounded-none"
    >
      <div className="container max-w-full flex justify-between items-center ">
        <Link
          className="mx-4 flex items-center font-bold hover:text-amber-400"
          to="/"
        >
          Gather Book
        </Link>
        <div className="flex items-center gap-6">
          <Link
            className="mx-4 flex items-center font-bold hover:text-amber-400 invisible lg:visible"
            to="/about"
          >
            About Us
          </Link>
          <Link
            className="mx-4 flex items-center font-bold hover:text-amber-400 invisible lg:visible"
            to="/write"
          >
            글쓰기
          </Link>
          <Link
            className="mx-4 flex items-center font-bold hover:text-amber-400 invisible lg:visible"
            to="/tales"
          >
            구경하기
          </Link>
          <a
            className="mx-4 flex items-center font-bold hover:text-amber-400 invisible lg:visible"
            href="https://github.com/boostcampaitech3/final-project-level3-nlp-06"
          >
            Github
          </a>
          <Menu className="visible lg:invisible">
            <MenuHandler>
              <Button className="visible lg:invisible">OPEN</Button>
            </MenuHandler>
            <MenuList>
              <MenuItem>
                <Link
                  className="mx-4 flex items-center font-bold hover:text-amber-400"
                  to="/about"
                >
                  About Us
                </Link>
              </MenuItem>
              <MenuItem>
                <Link
                  className="mx-4 flex items-center font-bold hover:text-amber-400 "
                  to="/write"
                >
                  글쓰기
                </Link>
              </MenuItem>
              <MenuItem>
                <Link
                  className="mx-4 flex items-center font-bold hover:text-amber-400 "
                  to="/tales"
                >
                  구경하기
                </Link>
              </MenuItem>
              <MenuItem>
                <a
                  className="mx-4 flex items-center font-bold hover:text-amber-400 "
                  href="https://github.com/boostcampaitech3/final-project-level3-nlp-06"
                >
                  Github
                </a>
              </MenuItem>
            </MenuList>
          </Menu>
        </div>
      </div>
    </Navbar>
  );
};

export default Navibar;
