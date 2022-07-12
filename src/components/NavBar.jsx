import React from 'react'

import { HiOutlineFilm } from "react-icons/hi";
import { RiMovieLine } from "react-icons/ri";
import { BsBookmarkHeart } from "react-icons/bs";
import { BiMessageSquareDetail } from "react-icons/bi";
import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

import {
    home,
    likedList,
    watchedList,
    contact,
  } from "../redux/changeActive";

const NavBar = () => {

    const change = useSelector((state) => state.change.value);
    const dispatch = useDispatch();

  return (
    <>
    <nav className="navBar__container">
      <Link
        to="/home"
        onClick={() => {
          dispatch(home());
        }}
        className={change === "home" ? "active" : ""}
      >
        <HiOutlineFilm />
      </Link>
      <Link
        to="/liked-list"
        onClick={() => {
          dispatch(likedList());
        }}
        className={change === "liked-list" ? "active" : ""}
      >
        <BsBookmarkHeart />
      </Link>
      <Link
        to="/watched-list"
        onClick={() => {
          dispatch(watchedList());
        }}
        className={change === "watched-list" ? "active" : ""}
      >
        <RiMovieLine />
      </Link>
      <Link
        to="/contact"
        onClick={() => {
          dispatch(contact());
        }}
        className={change === "contact" ? "active" : ""}
      >
        <BiMessageSquareDetail />
      </Link>
    </nav>
    </>
  )
}

export default NavBar