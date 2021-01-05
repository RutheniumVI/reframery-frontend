import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import WellcomeComponent from '../components/WellcomeComponent'

export default function WellcomePage() {
    return (
        <div>
            <div className="wellcome-container">
                <WellcomeComponent/>
                <div className="right">
                    <div className="text">
                        First, let's make sure we serve your area.
                </div>
                    <div className="comunities">
                        <div className="community">
                            <Link className="logo-canada" to="/home">
                                <img
                                    src="/images/logo_canada.png"
                                    alt="logo"
                                ></img>
                            </Link>
                            <Link className="canada" to="/home">
                                <div className="country" >Canada</div>
                            </Link>
                        </div>
                        <div className="community">

                            <img
                                src="/images/logo_usa.png"
                                alt="logo"
                            ></img>


                            <div className="country">U.S.A</div>

                        </div>
                        <div className="community">
                            <img
                                src="/images/logo_brazil.png"
                                alt="logo"
                            ></img>
                            <div className="country">Brazil</div>
                        </div>
                        <div className="community">
                            <img
                                src="/images/logo_mexico.png"
                                alt="logo"
                            ></img>
                            <div className="country">Mexico</div>
                        </div>

                    </div>
                    {/* <div>
                        <button>Next</button>
                    </div> */}

                </div>
            </div >
            <Footer />
        </div>

    )
}
