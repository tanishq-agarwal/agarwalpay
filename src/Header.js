import React from 'react';

const Header = () => {
    return (
        <>
          <header>
            <section className='container main-hero-container'>
                <div className='row'>
                    <div className='col-12 col-lg-6 header-left-side d-flex justify-content-center flex-column align-items-start order-lg-first order-last'>
                        <h1 className='display-2'>
                            Online Payment Made <br/>Easy For You.
                        </h1>
                        <p className='main-hero-para'>
                        A digital payment, sometimes called an electronic payment, is the transfer of value from one payment account to another using a digital device such as a mobile phone, POS (Point of Sales) or computer, a digital channel communications such as mobile wireless data or SWIFT (Society for the Worldwide Interbank Financial Telecommunication). 
                        </p>
                        <h3>Get early access for you</h3>
                        <div className='input-group mt-3'>
                            <input type="text" className='rounded-pill w-75 w-lg-75 me-3 p-2 form-control-text' placeholder="Enter Your Email" />
                            <div className='input-group-button'>Get it now</div>
                        </div>
                    </div>

                    <div className='col-12 col-lg-6 header-right-side d-flex justify-content-center align-items-center main-herosection-images order-md-first order-sm-first'>
                    <img src="./images/illustration3.png" alt="heroimg" className='img-fluid'/>
                    <img src="./images/illustration2.png" alt="heroimg4" className='img-fluid main-hero-img2'/>
                    </div>
                </div>
            </section>
          </header>  
        </>
    )
}

export default Header;
