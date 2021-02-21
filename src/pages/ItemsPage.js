import React, { useEffect } from "react";
import ListItem from "../components/ListItem";
import homeImage from "../img/home_img.jpg"
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Header from 'components/Header';
import SideBar from "components/SideBar";
import Footer from 'components/Footer'
import { getNewestItems } from "actions/itemActions";
import LoadingBox from "components/LoadingBox";
import MessageBox from "components/MessageBox";


export default function Itemspage() {
  const { community, category } = useParams();
  console.log(community);

  const userSignin = useSelector(state => state.userSignin);
  const { userInfo } = userSignin;

  const dispatch = useDispatch();
  const newestItemsGet = useSelector((state) => state.newestItemsGet);
  const { loading, error, items } = newestItemsGet;

  // send the request to the backend
  useEffect(() => {
    dispatch(getNewestItems(20, 1, category, community));
  }, [category]);

  return (
    <div>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
            <div className="home-container">
              <div className="header">
                <Header community={community}/>
              </div>
              {userInfo ? null :
                (
                  <div className="background" style={{ backgroundImage: `url(${homeImage})` }}>
                    <div className="text">
                      <h1 className="slogan-container">
                        One of the best community marketplaces to support your new business
               </h1>
                      {/* <button className="button is-primary is-rounded">
                        <span className="icon">
                          <i className="fas fa-sign-in-alt"></i>
                        </span>
                        <Link to="/signin"> <span>Sign In</span></Link>
                      </button> */}
                    </div>
                  </div>
                )
              }
              <div className="sidebar-content">
                {userInfo ? (userInfo.user.admin ? null : <SideBar />) : null}

                <section className="container">
                  <div className="category" >
                    {/* <Link to={"/" + community}><span> Overview</span></Link>             */}
                     <Link to={"/" + community + "/products"} className="link products">Products</Link>
                    <Link to={"/" + community + "/services"} className="link services">Services</Link>
                     <Link to={"/" + community + "/expertises"} className="link expertises"> Expertises</Link>
                  </div>

                  <div className={"list-" + category} >
                    <ListItem community={community} mainCategory={category} itemList={items}/>
                    <div className="more"><Link to={"/" + community +"/" + category +"/1/50"} className="link">More Items &gt;&gt;</Link></div>
                  </div>
                </section>
              </div>
              <Footer />
            </div>
          )}
    </div>
  );
}
