import React from 'react';
 
const ContactUs = () => {
    return (
        <>
            <div id="contactUsPage">
                <div className="showCase_contactUs"></div>

                <div className="feedback">
                    <form action="#" method='post'>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" name="name" id="name" placeholder="Enter Name" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" email="email" id="email" placeholder="Enter Email" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">message</label>
                            <textarea name="message" id="message" cols="30" rows="10" placeholder="Enter your message"></textarea>
                        </div>
                        <input type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </>
    );
}

export default ContactUs;