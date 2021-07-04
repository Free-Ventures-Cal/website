// https://www.netlify.com/blog/2017/07/20/how-to-integrate-netlifys-form-handling-in-a-react-app/

import React from 'react';


import './../styles/App.css';
import './../styles/Contact.css';

const encode = (data) => {
return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

class ContactForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = { name: "", email: "", message: "", subject: "" };
    }



    handleSubmit = e => {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...this.state })
      })
        .then(() => {
            alert("Success!");
            console.log("state: ", this.state);
        })
        .catch(error => alert(error));

      e.preventDefault();
    };

    handleChange = e => this.setState({ [e.target.name]: e.target.value });

    render() {
      const { name, email, subject, message } = this.state;

      return (
         <span>
             <form data-netlify="true" onSubmit={this.handleSubmit} netlify name="contact" method="POST" className="contact">
                 <input type="hidden" name="form-name" value="contact" />
                 <div className="two-grid" >
                     <p>
                         <label>Your Name</label>
                         <input type="text" name="name" value={name} onChange={this.handleChange} />
                     </p>
                     <p>
                         <label>Your Email</label>
                         <input type="email" name="email" value={email} onChange={this.handleChange} />
                     </p>
                 </div>
               <p>
                 <label>Subject</label>
                 <input name="subject" value={subject} onChange={this.handleChange} />
               </p>
               <p>
                 <label>Message</label>
                 <textarea name="message" value={message} onChange={this.handleChange} />
               </p>
               <p className="submit" style={{textAlign: 'center'}}>
                 <button className="genericButton" type="submit">Submit!</button>
               </p>
             </form>
         </span>

      );
    }
  }

  export default ContactForm;
