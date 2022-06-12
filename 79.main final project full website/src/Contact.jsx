import React, { useState } from "react";
const Contact = () => {
    const [data,setData]=useState({
        fullname:'',
        number:'',
        email:'',
        msg:'',
    })

    const inputChange =(event)=>{
const {name,value}=event.target;
setData((preVal)=>{
return(
    {
        ...preVal,
        [name]:value,
    }
)
})
    }
    const formSubmit=(e)=>{
e.preventDefault();
alert(`Your name ${data.fullname} your email ${data.email} your mobile number ${data.number}`)
    }

  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact Us </h1>
      </div>

      <div className="container contact-div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <div class="mb-3">
                <label for="name" class="form-label">
                  Enter your name:
                </label>
                <input
                  type="name"
                  class="form-control"
                  id="name" name='fullname' value={data.fullname} onChange={inputChange} 
                  placeholder="Enter your name"
                />
              </div>
              <div class="mb-3">
                <label for="number" class="form-label">
                  Enter your mobile number:
                </label>
                <input
                  type="number"
                  class="form-control"
                  id="number" name='number' value={data.number} onChange={inputChange} 
                  placeholder="Enter your mobile name"
                />
              </div>
              <div class="mb-3">
                <label for="email" class="form-label">
                  Enter your email:
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="email" name='email' value={data.email} onChange={inputChange} 
                  placeholder="Enter your email"
                />
              </div>
              <div class="mb-3">
                <label for="message" class="form-label">
                  Message:
                </label>
                <textarea class="form-control" id="message" name='msg' value={data.msg} onChange={inputChange}  rows="3"></textarea>
              </div>
              <div class="col-12">
                <button class="btn btn-outline-primary" type="submit">
                  Submit form
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
