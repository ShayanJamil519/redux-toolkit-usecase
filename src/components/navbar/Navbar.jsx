import { ArrowDropDown } from '@material-ui/icons'
import React from 'react'
import { useSelector } from 'react-redux'
import './navbar.css'

const Navbar = () => {
  const name = useSelector((state) => state.user.name)
  console.log('navbar rendered!')
  return (
    <div className="navbar">
      <div className="navbarWrapper">
        <div className="navbarLeft">
          <span className="logo">ReduxToolKitUseCase</span>
          <span className="navbarLink">Home</span>
          <span className="navbarLink">About</span>
          <span className="navbarLink">Contact</span>
        </div>
        <div className="navbarCenter">
          <div className="search">
            <input
              type="text"
              placeholder="search for something..."
              className="searchInput"
            />
          </div>
        </div>
        <div className="navbarRight">
          <img
            className="avatar"
            src="https://lh3.googleusercontent.com/a-/AOh14Ggq196WBku8-AfIZhH59p1DTcxWRRPfJ6_VT8a8gA=s96-c"
            alt=""
          />
          <span className="navbarName">{name}</span>
          <ArrowDropDown />
        </div>
      </div>
    </div>
  )
}

export default Navbar
