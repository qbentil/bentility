import React, { useState } from "react";

import SectionTitle from "../SectionTitle";

interface Props {
  val: string;
  valueSetter?: any;
  errorSetter?: any;
}
const Form = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [fnameError, setFnameError] = useState(false);
  const [lnameError, setLnameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [subjectError, setSubjectError] = useState(false);
  const [formError, setFormError] = useState(true);

  const sendMessage = () => {
    if(!formError)
    {
      console.log(`First Name: ${firstName}`);
      console.log(`Last Name: ${lastName}`);
      console.log(`Email: ${email}`);
      console.log(`Message: ${message}`);
      console.log(`Phone: ${phone}`);
      console.log(`Subject: ${subject}`);
      resetForm();
      alert("Message Sent!");

    }else{
      alert("Please fill out the form correctly");
    }
  };
  const resetForm = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setMessage("");
    setPhone("");
    setSubject("");
  };
  const handleInputChange = (type: string, val: string, valueSetter?: any, errorSetter?: any, required?:boolean) => {
    let regex;
    switch(type) {
      case "normal":
        regex = /^[a-zA-Z ]*$/
        break;
      case "email":
        regex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
        break;
      case "phone":
        regex = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/
        break;
      default:
        regex = /^[a-zA-Z ]*$/
    }
    if(required){
      if(val.length > 0){
        if(regex.test(val)){
          if(valueSetter){
            valueSetter(val)
          }
          if(errorSetter){
            errorSetter(false)
          }
          setFormError(false)
        }else{
          if(errorSetter){
            errorSetter(true)
          }
          setFormError(true)
        }
      }else{
        if(errorSetter){
          errorSetter(true)
        }
        setFormError(true)
      }
    
    } else {
      if(val.length > 0){
        if(regex.test(val)){
          if(valueSetter){
            valueSetter(val)
          }
          if(errorSetter){
            errorSetter(false)
          }
          setFormError(false)
        }else{
          if(errorSetter){
            errorSetter(true)
          }
          setFormError(true)
        }
      }else{
        setFormError(false)
        if(errorSetter){
          errorSetter(false)
        }
      }
    }
  };

  return (
    <div className="w-full bg-white px-4 md:px-0">
      <div className="flex flex-col items-center justify-center">
        <SectionTitle title="Leave us a Message" tp="center" />
        <form className="w-full max-w-lg mb-4" id="form">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className={`block uppercase tracking-wide text-xs font-bold mb-2 ${ 
                  fnameError ? "text-red-500" : "text-blue-700"
                } `}
                htmlFor="grid-first-name"
              >
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white ${
                  fnameError ? "border-red-500" : "border-blue-500 focus:border-blue-500" 
                  } `}
                id="grid-first-name"
                type="text"
                onChange={(e) => {
                  setFirstName(e.target.value);
                  handleInputChange('normal', e.target.value, setFirstName, setFnameError, true);
                }}
                value={firstName}
                placeholder={"First Name"}
              />
              {fnameError && (
                <p className="mt-2 text-sm text-red-600 dark:text-red-500 italic">
                  <span className="font-medium">Please</span> enter your first
                  name!
                </p>
              )}
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className={`block uppercase tracking-wide text-xs font-bold mb-2 ${
                  lnameError ? "text-red-500" : "text-blue-700"
                } `}
                htmlFor="grid-last-name"
              >
                Last Name <span className="text-red-500">*</span>
              </label>
              <input
                className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white ${
                  lnameError ? "border-red-500" : "border-blue-500 focus:border-blue-500"
                  } `}
                id="grid-last-name"
                type="text"
                onChange={(e) => {
                  setLastName(e.target.value);
                  handleInputChange('normal', e.target.value, setLastName, setLnameError, true);
                }}
                value={lastName}
                placeholder={`Last Name`}
              />
              {lnameError && (
                <p className="mt-2 text-sm text-red-600 dark:text-red-500 italic">
                  <span className="font-medium">Please</span> enter your last
                  name!
                </p>
              )}
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className={`block uppercase tracking-wide text-xs font-bold mb-2 ${
                  emailError ? "text-red-500" : "text-blue-700"
                } `}
                htmlFor="grid-email"
              >
                Email <span className="text-red-500">*</span>
              </label>
              <input
                className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white ${
                  emailError ? "border-red-500" : "border-blue-500 focus:border-blue-500"
                  } `}
                id="grid-email"
                type="email"
                onChange={(e) => {
                  setEmail(e.target.value)
                  handleInputChange('email', e.target.value, setEmail, setEmailError, true);
                }}
                value={email}
                placeholder={`example@gmail.com`}
              />
              {emailError && (
                <p className="mt-2 text-sm text-red-600 dark:text-red-500 italic">
                  <span className="font-medium">Please</span> enter a valid email address!
                </p>
              )}

            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className={`block uppercase tracking-wide text-xs font-bold mb-2 ${
                  phoneError ? "text-red-500" : "text-blue-700"
                } `}
                htmlFor="grid-phone"
              >
                Phone
              </label>
              <input
                className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white ${
                  phoneError ? "border-red-500" : "border-blue-500 focus:border-blue-500"
                  } `}
                id="grid-phone"
                type="text"
                onChange={(e) => {
                  setPhone(e.target.value)
                  handleInputChange("phone", e.target.value, setPhone, setPhoneError, false);
                }}
                value={phone}
                placeholder={`0-556-844-331`}
              />
              {phoneError && (
                <p className="mt-2 text-sm text-red-600 dark:text-red-500 italic">
                  <span className="font-medium">Please</span> enter a valid phone number! [000-000-0000]
                </p>
              )}
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className={`block uppercase tracking-wide text-xs font-bold mb-2 ${
                  subjectError ? "text-red-500" : "text-blue-700"
                } `}

                htmlFor="grid-subject"
              >
                Subject <span className="text-red-500">*</span>
              </label>
              <input
                className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white ${
                  subjectError ? "border-red-500" : "border-blue-500 focus:border-blue-500"
                  } `}
                id="grid-subject"
                type="text"
                onChange={(e) => {
                  setSubject(e.target.value);
                  handleInputChange('normal', e.target.value, setSubject, setSubjectError, true);
                }}
                value={subject}
                placeholder={`Subject`}
              />
              {subjectError && (
                <p className="mt-2 text-sm text-red-600 dark:text-red-500 italic">
                  <span className="font-medium">Please</span> enter a message subject!
                </p>
              )}
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-2">
            <div className="w-full px-3">
              <label
                className={`block uppercase tracking-wide text-xs font-bold mb-2 ${
                  messageError ? "text-red-500" : "text-blue-700"
                } `}
                htmlFor="grid-message"
              >
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white ${
                  messageError ? "border-red-500" : "border-blue-500 focus:border-blue-500"
                  } `}
                id="grid-message"
                onChange={(e) => {
                  setMessage(e.target.value);
                  handleInputChange('normal', e.target.value, setMessage, setMessageError, true);
                }}
                value={message}
                placeholder="Message"
              />
              {messageError && (
                <p className="mt-2 text-sm text-red-600 dark:text-red-500 italic">
                  <span className="font-medium">Please</span> enter a message!
                </p>
              )}
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-2">
            <div className="w-full px-3 flex items-center justify-end">
              <button
                className="bg-blue-500 w-[40%] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  sendMessage();
                }}
              >
                Send
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
