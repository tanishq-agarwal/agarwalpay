import React, { useState } from 'react';

const Contact = () => {
    const [userData, setUserData] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        address: "",
        message: "",
        checked: false
    });
    let name, value;
    const postUserData = (event) => {
        name = event.target.name;
        value = event.target.value;

        setUserData({ ...userData, [name]: value })
    };

    //connect with firebase
    const submitData = async (event) => {
        event.preventDefault();

        const { firstName, lastName, phone, email, address, message, checked } = userData;

        if (firstName && lastName && phone && email && address && message && checked) {
            const res = await fetch('https://agarwalpay-1a231-default-rtdb.firebaseio.com/userDataRecords.json',
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        firstName,
                        lastName,
                        phone,
                        email,
                        address,
                        message
                    }),
                }
            );

            if (res) {
                setUserData({
                    firstName: "",
                    lastName: "",
                    phone: "",
                    email: "",
                    address: "",
                    message: ""
                });
                alert("Data Stored");
            } else {
                alert("Please fill the data");
            }
        }
        else {
            alert("Please fill all the fields");
        }
    }

    return (
        <>
            <section className='contactus-section' data-aos="fade-right"
                data-aos-easing="ease-in-sine">
                <div className='container'>
                    <div className='row'>
                        <div className='col-12 col-lg-10 mx-auto'>
                            <div className='row'>
                                <div className='contact-leftside col-12 col-lg-5'>
                                    <h1 className='main-heading fw-bold'>Connect With Our <br /> Sales Team.</h1>
                                    <p className='main-hero-para'>
                                        Create a guideline of expectations, including what kind of personal items are good to display (such as books, trophies, or other conversation starters).
                                    </p>
                                    <figure>
                                        <img src="./images/hero1.jpg" alt="contactusImg" className='img-fluid' />
                                    </figure>
                                </div>

                                {/* right side contact form */}
                                <div className='contact-rightside col-12 col-lg-7'>
                                    <form method="POST">
                                        <div className='container'>
                                            <div className='row'>
                                                <div className='col-12 col-lg-6 contact-input-field'>
                                                    <input type="text" name="firstName" id="" className="form-control" placeholder='First Name' value={userData.firstName}
                                                        onChange={postUserData}
                                                    />
                                                </div>
                                                <div className='col-12 col-lg-6 contact-input-field'>
                                                    <input type="text" name="lastName" id="" className="form-control" placeholder='Last Name' value={userData.lastName}
                                                        onChange={postUserData} />
                                                </div>
                                            </div>

                                            <div className='row'>
                                                <div className='col-12 col-lg-6 contact-input-field'>
                                                    <input type="text" name="phone" id="" className="form-control" placeholder='Phone Number' value={userData.phone}
                                                        onChange={postUserData} r />
                                                </div>
                                                <div className='col-12 col-lg-6 contact-input-field'>
                                                    <input type="text" name="email" id="" className="form-control" placeholder='Email ID' value={userData.email}
                                                        onChange={postUserData} />
                                                </div>
                                            </div>

                                            <div className='row'>
                                                <div className='col-12 contact-input-field'>
                                                    <input type="text" name="address" id="" className="form-control" placeholder='Add Address' value={userData.address}
                                                        onChange={postUserData} />
                                                </div>
                                            </div>

                                            <div className='row'>
                                                <div className='col-12'>
                                                    <input type="text" name="message" id="" className="form-control" placeholder='Enter Your message' value={userData.message}
                                                        onChange={postUserData} />
                                                </div>
                                            </div>

                                            <div className='form-check  form-checkbox-style'>
                                                <input className='form-check-input' type="checkbox" name="checked" value={userData.checked} onChange={postUserData} id="flexCheckChecked" />
                                                <label className='form-check-label main-hero-para' htmlFor="flexCheckChecked">
                                                    I agree that the agarwalPay may contact me at the email address or phone number above.
                                                </label>
                                            </div>
                                            <button type="submit" className="btn btn-style w-100" onClick={submitData}>
                                                Submit
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact;
