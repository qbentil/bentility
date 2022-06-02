import React, { useState } from "react";

import SectionTitle from "../SectionTitle";

const Form = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");

  const sendMessage = () => {
    console.log(`   First Name: ${firstName}`);
    console.log(`   Last Name: ${lastName}`);
    console.log(`   Email: ${email}`);
    console.log(`   Message: ${message}`);
    console.log(`   Phone: ${phone}`);
    console.log(`   Subject: ${subject}`);
    resetForm();
    
  };
  const resetForm = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setMessage("");
    setPhone("");
    setSubject("");
  };

  
  return (
    <div className="w-full bg-white px-4 md:px-0">
      <div className="flex flex-col items-center justify-center">
        <SectionTitle title="Leave us a Message" tp="center" />

        <form className="w-full max-w-lg mb-4" id="form">
                    
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-blue-700 text-xs font-bold mb-2"
                htmlFor="grid-first-name"
              >
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-blue-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-blue-600"
                id="grid-first-name"
                type="text"
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}
                placeholder={"First Name"}
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-blue-700 text-xs font-bold mb-2"
                htmlFor="grid-last-name"
              >
                Last Name <span className="text-red-500">*</span>
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-blue-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-blue-600"
                id="grid-last-name"
                type="text"
                onChange={(e) => setLastName(e.target.value)}
                value={lastName}
                placeholder={`Last Name`}
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-blue-700 text-xs font-bold mb-2"
                htmlFor="grid-email"
              >
                Email <span className="text-red-500">*</span>
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-blue-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-blue-600"
                id="grid-email"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                placeholder={`example@gmail.com`}
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-blue-700 text-xs font-bold mb-2"
                htmlFor="grid-phone"
              >
                Phone
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-blue-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-blue-600"
                id="grid-phone"
                type="text"
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
                placeholder={`+233 556 844 331`}
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-blue-700 text-xs font-bold mb-2"
                htmlFor="grid-subject"
              >
                Subject <span className="text-red-500">*</span>
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-blue-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-blue-600"
                id="grid-subject"
                type="text"
                onChange={(e) => setSubject(e.target.value)}
                value={subject}
                placeholder={`Subject`}
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-2">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-blue-700 text-xs font-bold mb-2"
                htmlFor="grid-city"
              >
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                className="appearance-none block w-full h-36 bg-gray-200 text-blue-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-blue-600"
                id="grid-city"
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                placeholder="Message"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-2">
            <div className="w-full px-3 flex items-center justify-end">
              <button className="bg-blue-500 w-[40%] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
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
