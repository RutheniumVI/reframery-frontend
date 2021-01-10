import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from "react-router";
import { deleteUser, detailsUser, getUser, signout, updateUser } from "../actions/userActions";

// import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input/input'
import { Link } from "react-router-dom";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";

export default function UserPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // get sign in user token
  const userSignin = useSelector(state => state.userSignin);
  const { userInfo } = userSignin;
  console.log(userInfo);
  // get sign in user detail informaton
  const userGet = useSelector(state => state.userGet);
  const { loading, error, user } = userGet;

  // constant for update information
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthday, setBirthday] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [province, setProvince] = useState('');
  const [country, setCountry] = useState('');
  const [postcode, setPostcode] = useState('');
  const [addressEdited, setAddressEdited] = useState(false);

  // function for updating user information
  const updateHandler = (e) => {
    e.preventDefault();
    setAddressEdited(false);
    const confirm = window.confirm("Are you sure to update your personal information?");
    if (confirm) {
      //if the input value for the field is empty, keep the original value of the field
      dispatch(updateUser(userInfo.email,
        username === "" ? user.username : username,
        password === "" ? user.password : password,
        phoneNumber === "" ? user.phoneNumber : phoneNumber,
        firstName === "" ? user.firstName : firstName,
        lastName === "" ? user.lastName : lastName,
        birthday === "" ? user.birthday : birthday,
        address === "" ? user.address : address,
        city === "" ? user.city : city,
        province === "" ? user.province : province,
        country === "" ? user.country : country,
        postcode === "" ? user.postcode : postcode,
        user.admin, user.manager, user.communityName
      ));      
    }
    window.location.reload();

  };

  // function for remove the user from the system
  const deleteHandler = (e) => {
    e.preventDefault();
    const confirm = window.confirm("Are you sure to delete the account from the system?");
    if (confirm) {
      dispatch(deleteUser(userInfo.email));
      dispatch(signout());
      navigate('/home');
    }
  };

  useEffect(() => {
    dispatch(getUser(userInfo.user.email));
  }, [dispatch, userInfo]);

  return (
    <div className="profile-container">
      <form className="form-profile" >
        <div>
          <h1>User Profile</h1>
        </div>
        {loading ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
              <div className="profile-row">
                <div>
                  <label>User Name</label>
                  <input id="name" type="text" placeholder={user.username} onChange={(e) => setUsername(e.target.value)}></input>
                  <button onClick={updateHandler}> Update</button>
                </div>
                <div>
                  <label >Email</label>
                  <input id="email" type="text" placeholder={user.email} readOnly></input>
                  <> </>
                </div>
                <div>
                  <label>Password</label>
                  <input id="password" type="password" placeholder="******" onChange={(e) => setPassword(e.target.value)}></input>
                  <button onClick={updateHandler}>Update</button>
                </div>
                <div>
                  <label >Phone</label>
                  <PhoneInput placeholder={user.phoneNumber} onChange={setPhoneNumber} />
                  {user.phoneNumber === "" ? (<button onClick={updateHandler}>Add</button>) :
                    (<button onClick={updateHandler}>Update</button>)}
                </div>

                {/* if the address is editable, show the input form for taking the address, else show the address inforamtion*/}
                {!addressEdited ?
                  (
                    <div>
                      <label >Address</label>
                      <input id="address" type="text"
                        placeholder={user.address + " " + user.city + " "
                          + user.province + " " + user.country + " " + user.postcode} >
                      </input>
                      {user.address === "" ? (<button onClick={(e) => setAddressEdited(true)}>Add</button>) :
                        (<button onClick={(e) => setAddressEdited(true)}>Update</button>)}
                    </div>
                  ) : (
                    <div>
                      <div>
                        <label>Address</label>
                        <input type="text" placeholder={user.address} onChange={(e) => setAddress(e.target.value)} ></input>
                      </div>
                      <div>
                        <label>City</label>
                        <input type="text" placeholder={user.city} onChange={(e) => setCity(e.target.value)}></input>
                      </div>
                      <div>
                        <label>Province</label>
                        <input type="text" placeholder={user.province} onChange={(e) => setProvince(e.target.value)}></input>
                      </div>
                      <div>
                        <label>Country</label>
                        <input type="text" placeholder={user.country} onChange={(e) => setCountry(e.target.value)}></input>
                      </div>
                      <div>
                        <label>Postcode</label>
                        <input type="text" placeholder={user.postcode} onChange={(e) => setPostcode(e.target.value)}></input>

                      </div>
                      <button onClick={updateHandler}>Submit</button>
                    </div>
                  )
                }

                <div>
                  <label >First Name</label>
                  <input id="firstName" type="text" placeholder={user.firstName} onChange={(e) => setFirstName(e.target.value)}></input>
                  {user.firstName === "" ? (<button onClick={updateHandler}>Add</button>) :
                    (<button onClick={updateHandler}>Update</button>)}
                </div>
                <div>
                  <label >Last Name</label>
                  <input id="lastName" type="text" placeholder={user.lastName} onChange={(e) => setLastName(e.target.value)}></input>
                  {user.lastName === "" ? (<button onClick={updateHandler}>Add</button>) :
                    (<button onClick={updateHandler}>Update</button>)}
                </div>
                <div>
                  <label >Birthday</label>
                  <input id="birthday" type="text" onFocus={(e) => (e.currentTarget.type = "date")} onBlur={(e) => (e.currentTarget.type = "text")} placeholder={user.birthday} onChange={(e) => setBirthday(e.target.value)}></input>
                  {user.birthday === "" ? (<button onClick={updateHandler}>Add</button>) :
                    (<button onClick={updateHandler}>Update</button>)}
                </div>
                <div>
                  <label >Register Time</label>
                  <input id="registerTime" placeholder={user.registerTime.slice(0, 10)} readOnly></input>
                  <button onClick={deleteHandler} >Unsubscribe</button>
                </div>
              </div>
            )}
      </form>
    </div>
  );
}
