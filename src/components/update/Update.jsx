import React, { useContext } from 'react'
import Warning from '../warning/Warning'
import './update.css'
import { update, remove, addHello } from '../../redux/userSlice'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { updateUser2 } from '../../redux/userSlice'

export default function Update() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const user = useSelector((state) => state.user)
  const dispatch = useDispatch()

  const handleUpdate = (e) => {
    e.preventDefault()

    dispatch(update({ name, email }))

    // without API
    // dispatch(update({ name, email }));
    // with API
    // dispatch(updateUser2({ name, email }))
  }

  const handleDelete = (e) => {
    e.preventDefault()
    dispatch(remove())
  }

  return (
    <div className="update">
      <div className="updateWrapper">
        <h3 className="updateTitle">Update Your Account</h3>
        <Warning />
        <button className="delete" onClick={handleDelete}>
          Delete Account
        </button>
        <div className="updateContainer">
          <form>
            <div className="formItem">
              <label>Profile Picture</label>
              <div className="profilePic">
                <img
                  className="avatar"
                  src="https://lh3.googleusercontent.com/a-/AOh14Ggq196WBku8-AfIZhH59p1DTcxWRRPfJ6_VT8a8gA=s96-c"
                  alt=""
                />
                <span className="change">Change</span>
              </div>
            </div>
            <div className="formItem">
              <label>Username</label>
              <input
                className="formInput"
                type="text"
                placeholder={user.name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="formItem">
              <label>Email</label>
              <input
                className="formInput"
                type="text"
                placeholder={user.email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="formItem">
              <label>Password</label>
              <input className="formInput" type="password" />
            </div>
            <button
              disabled={user.pending}
              className="updateButton"
              onClick={handleUpdate}
            >
              Update
            </button>
            {user.error && <span className="error">Something went wrong!</span>}
            {user.pending === false && (
              <span className="success">Account has been updated!</span>
            )}
          </form>
        </div>
      </div>
    </div>
  )
}
