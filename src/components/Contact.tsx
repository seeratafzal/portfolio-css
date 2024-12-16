import React from 'react'
import { MdMailOutline } from "react-icons/md";
import { FaFacebookSquare } from "react-icons/fa";
import "../app/styles/contact.css";

const Contact = () => {
  return (
    <div id='contact' className="contact-container">
        <div className="contact-grid md:grid-cols-2">
            <div className="contact-space">
                <h2 className="contact-heading" data-aos="zoom-out-left">
                    Get In Touch
                    </h2>
                <p className="contact-text" data-aos="zoom-out-left">
                Drop me a note, give me a call, or sent me a message by submitting the form.
                </p>

                <div className="contact-flex" data-aos="zoom-out-left">
                <MdMailOutline  size={30}/> seeratafzal731@gmail.com
                </div>

                <div className="contact-flex" data-aos="zoom-out-left">
                <FaFacebookSquare size={30}/> SAweb
                </div>
          </div>

                <div className="contact-space">
                    <div className="form" data-aos="zoom-out-left">
                        <label htmlFor="name">Name</label>
                        <input type="text"
                        className="input-field" id="name" />
                    </div>

                    <div className="form" data-aos="zoom-out-left">
                        <label htmlFor="email">Email</label>
                        <input type="text"
                        className="input-field" id="email" />
                    </div>

                    <div className="form" data-aos="zoom-out-left">
                        <label htmlFor="msg">Message</label>
                        <textarea
                        className="textarea-field" id="msg" rows={8}>
                            </textarea>                
                </div>
                <button className="button" data-aos="zoom-out-left">
                    send
                    </button>
        </div>
       </div>
    </div>
   );
  };

export default Contact;