import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from "react-router";
import {
  deleteUser, getUser, signout, updateUserName,
  updateUserCompany, updateUserPassword, updateUserPhone,
  updateUserFirstName, updateUserLastName, updateUserBirthday, updateUserImage
} from "../actions/userActions";
import Header from 'components/Header';
import SideBar from "components/SideBar";
import AdminSideBar from "components/AdminSidebar";
import Footer from 'components/Footer'

// import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input/input'
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { Link } from "react-router-dom";

export default function MyProfilePage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // get sign in user token
  const userSignin = useSelector(state => state.userSignin);
  const { userInfo } = userSignin;

  // get sign in user detail informaton
  const userGet = useSelector(state => state.userGet);
  const { loading, error, user } = userGet;

  // get sign in user detail informaton
  const userUpdate = useSelector(state => state.userUpdate);
  const { user: updatedUser } = userUpdate;

  // constant for update information
  const [username, setUsername] = useState('');
  const [company, setCompany] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthday, setBirthday] = useState('');
  const [binaryImage, setBinaryImage] = useState('');
  const [erroMessage, setErrorMessage] = useState('');

  // check if the first name and last is valid
  const isValidUserName = (str) => {
    const reLength = new RegExp('^.{1,15}$');
    return reLength.test(str)
  }

  // check if the first name and last is valid
  const isValidPhoneNumber = (str) => {
    const reLength = new RegExp('^.{11,20}$');
    return reLength.test(str)
  }

  // check if the password contains at least one upper case letter and one lowercase letter and one number
  const isValidPassword = (str) => {
    const reContainUppercase = new RegExp('^.*[A-Z].*$');
    const reContainLowercase = new RegExp('^.*[a-z].*$');
    const reContainNumer = new RegExp('^.*[0-9].*$');
    const reLength = new RegExp('^.{6,}$');
    return reContainUppercase.test(str) && reContainLowercase.test(str) && reContainNumer.test(str) && reLength.test(str)
  }

  // function for uploading the image of the user
  const uploadimageHandler = (e) => {
    e.preventDefault();
    var fileName = e.target.value;
    var idxDot = fileName.lastIndexOf(".") + 1;
    var extFile = fileName.substr(idxDot, fileName.length).toLowerCase();
    if (extFile === "jpg" || extFile === "png") {
      // console.log("file to upload:", e.target.files[0]);
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.readAsBinaryString(file);
        reader.onloadend = () => {
          setBinaryImage(reader.result);
          // console.log(reader.result);
        }
      }
    } else {
      alert("Only jpg and png files are allowed!");
    }
    const confirm = window.confirm("Are you sure to update your image?");
    if (confirm) {
      dispatch(updateUserImage(userInfo.email, binaryImage));
    }
    window.location.reload();
  };

  //update user name 
  const updateUserNameHandler = (e) => {
    e.preventDefault();
    if (username === "") {
      setErrorMessage("! Empty input");
    } else if (!isValidUserName(username)) {
      setErrorMessage("! Your user name should not exceed 15 characters");
    }
    else {
      dispatch(updateUserName(userInfo.email, username));
    }
  };

  //update user company name
  const updateCompanyNameHandler = (e) => {
    e.preventDefault();
    if (company === "") {
      setErrorMessage("! Empty input");
    } else {
      dispatch(updateUserCompany(userInfo.email, company));
    }
  };

  //update user password
  const updateUserPasswordHandler = (e) => {
    e.preventDefault();
    if (password === "") {
      setErrorMessage("! Empty input");
    } else if (!isValidPassword(password)) {
      setErrorMessage("! You new password should be at least 6 characters and contains at least one uppercase, one lowercase and a number");
    }
    else {
      dispatch(updateUserPassword(userInfo.email, password));
    }
  };

  //update user phone number
  const updateUserPhoneHandler = (e) => {
    e.preventDefault();
    if (phoneNumber === "") {
      setErrorMessage("! Empty input");
    }
    else if (!isValidPhoneNumber(phoneNumber)) {
      setErrorMessage("! Invalid phone number");
    } 
    else {
      dispatch(updateUserPhone(userInfo.email, phoneNumber));
    }
  };

  //update user first name
  const updateUserFirstNameHandler = (e) => {
    e.preventDefault();
    if (firstName === "") {
      setErrorMessage("! Empty input");
    } else {
      dispatch(updateUserFirstName(userInfo.email, firstName));
    }
  };

  //update user last name
  const updateUserLastNameHandler = (e) => {
    e.preventDefault();
    if (lastName === "") {
      setErrorMessage("! Empty input");
    } else {
      dispatch(updateUserLastName(userInfo.email, lastName));
    }
  };

  //update user birthday
  const updateUserBirthdayHandler = (e) => {
    e.preventDefault();
    if (birthday === "") {
      setErrorMessage("! Empty input");
    } else {
      dispatch(updateUserBirthday(userInfo.email, birthday));
    }
  };

  // function for remove the user from the system
  const deleteHandler = (e) => {
    e.preventDefault();
    const confirm = window.confirm("Are you sure to delete the account from the system?");
    if (confirm) {
      if (userInfo.currentCredit < 1) {
        dispatch(deleteUser(userInfo.email));
        dispatch(signout());
        navigate('/');
      }
      else {
        setErrorMessage("You can not delete this account since you have have a balance!");
      }
    }
  };

  useEffect(() => {
    dispatch(getUser(userInfo.email));
    if (updatedUser) {
      window.location.reload();
    }
  }, [dispatch, userInfo, updatedUser]);

  return (
    <div className="page-container">
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
            <div>
              <Header community={user.community} cartNum={0} />
              <div className="sidebar-content">
                {userInfo.admin ? <AdminSideBar /> : <SideBar />}
                <div className="profile-container">
                  <form className="form-profile" >
                    <div className="danger">{erroMessage}</div>
                    <div className="title-image">
                      <div className="upload-image">
                        <img
                          src="/images/blank.png"
                          alt="user"
                          width="150"
                        ></img >
                        <div class="upload-button">
                          <div class="fileinputs">
                            <input type="file" className="file" id="file" accept=".jpg,.png"
                              onChange={uploadimageHandler} onClick={e => (e.target.value = null)} />
                            <div class="fakefile">
                              <input placeholder="Upload Image" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <h1>My Profile</h1>
                    </div>


                    <div className="profile-row">
                      <div>
                        <label >Email</label>
                        <input id="email" type="email" placeholder={user.email} readOnly></input>
                      </div>
                      <div>
                        <label>User Name</label>
                        <input id="username" type="text" placeholder={user.username} onChange={(e) => setUsername(e.target.value)}></input>
                        <button onClick={updateUserNameHandler}> Update</button>
                      </div>
                      <div>
                        <label>Company Name</label>
                        <input id="username" type="text" placeholder={user.company} onChange={(e) => setCompany(e.target.value)}></input>
                        <button onClick={updateCompanyNameHandler}> Update</button>
                      </div>
                      <div>
                        <label>Password</label>
                        <input id="password" type="password" placeholder="******" onChange={(e) => setPassword(e.target.value)}></input>
                        <button onClick={updateUserPasswordHandler}>Update</button>
                      </div>
                      <div>
                        <label >Phone</label>
                        <PhoneInput placeholder={user.phoneNumber} onChange={setPhoneNumber} />
                        {user.phoneNumber === "" ? (<button onClick={updateUserPhoneHandler}>Add</button>) :
                          (<button onClick={updateUserPhoneHandler}>Update</button>)}
                      </div>
                      <div>
                        <label >Address</label>
                        <input id="address" type="text"
                          placeholder={user.address + " " + user.city + " "
                            + user.province + " " + user.postcode + ", " + user.country} >
                        </input>
                        {user.address === "" ? (<Link to="/update-user-address"><button>Add</button></Link>) :
                          (<Link to="/update-user-address"><button >Update</button></Link>)}
                      </div>
                      <div>
                        <label >First Name</label>
                        <input id="firstName" type="text" placeholder={user.firstName} onChange={(e) => setFirstName(e.target.value)}></input>
                        {user.firstName === "" ? (<button onClick={updateUserFirstNameHandler}>Add</button>) :
                          (<button onClick={updateUserFirstNameHandler}>Update</button>)}
                      </div>
                      <div>
                        <label >Last Name</label>
                        <input id="lastName" type="text" placeholder={user.lastName} onChange={(e) => setLastName(e.target.value)}></input>
                        {user.lastName === "" ? (<button onClick={updateUserLastNameHandler}>Add</button>) :
                          (<button onClick={updateUserLastNameHandler}>Update</button>)}
                      </div>
                      <div>
                        <label >Birthday</label>
                        <input id="birthday" type="text" onFocus={(e) => (e.currentTarget.type = "date")} onBlur={(e) => (e.currentTarget.type = "text")} placeholder={user.birthday} onChange={(e) => setBirthday(e.target.value)}></input>
                        {user.birthday === "" ? (<button onClick={updateUserBirthdayHandler}>Add</button>) :
                          (<button onClick={updateUserBirthdayHandler}>Update</button>)}
                      </div>
                      <div>
                        <label >Register Time</label>
                        <input id="registerTime" placeholder={user.registerTime.slice(0, 10)} readOnly></input>
                        <button onClick={deleteHandler} >Unsubscribe</button>
                      </div>
                    </div>

                  </form>
                </div>
              </div>
              <Footer />
            </div>
          )}
    </div>


  );
}
