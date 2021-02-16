import React from 'react'
import { Link } from 'react-router-dom'
import Footer from 'components/Footer'
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
                            <Link className="logo-canada" to="/canada/products">
                                <img
                                    src="/images/logo_canada.png"
                                    alt="logo"
                                ></img>
                            </Link>
                            <Link className="canada" to="/canada/products">
                                <div className="country" >Canada</div>
                            </Link>
                        </div>
                        <div className="community">
                        <Link className="logo-usa" to="/usa/products">
                            <img
                                src="/images/logo_usa.png"
                                alt="logo"
                            ></img>
                            </Link>
                            <Link className="usa" to="/usa/products">
                            <div className="country">U.S.A</div>
                            </Link>
                        </div>
                        <div className="community">
                        <Link className="logo-brazil" to="/brazil/products">
                            <img
                                src="/images/logo_brazil.png"
                                alt="logo"
                            ></img>
                            </Link>
                            <Link className="brazil" to="/brazil/products">
                            <div className="country">Brazil</div>
                            </Link>
                        </div>
                        <div className="community">
                        <Link className="logo-mexico" to="/mexico/products">
                            <img
                                src="/images/logo_mexico.png"
                                alt="logo"
                            ></img>
                            </Link>
                            <Link className="mexico" to="/mexico/products">
                            <div className="country">Mexico</div>
                            </Link>
                        </div>

                    </div>
                </div>
            </div >
            <Footer />
        </div>

    )
}
