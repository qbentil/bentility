import React, { useState } from "react";

import { ImSpinner9 } from "react-icons/im";
import { SEND_EMAIL } from "../../util";
import SectionTitle from "../SectionTitle";
import { ValidateInput as ValidateOnInputChange } from "../Validations";
import { toast } from "react-toastify";

const Form = () => {
  // FormData state
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");

  // Error states
  const [fnameError, setFnameError] = useState("");
  const [lnameError, setLnameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [subjectError, setSubjectError] = useState("");
  const [loading, setLoading] = useState(false);

  const HandleSubmit = (e: any) => {
    e.preventDefault();
    if (!firstName || !lastName || !email || !message || !phone || !subject)
      return toast.error("Please fill all the fields");
    if (
      fnameError ||
      lnameError ||
      emailError ||
      messageError ||
      phoneError ||
      subjectError
    )
      return toast.error("Please fill all the fields correctly");

    const data = {
      first_name: firstName,
      last_name: lastName,
      email,
      message,
      phone,
      subject,
    };
    setLoading(true);
    SEND_EMAIL(data, (data: any) => {
      toast.success(data?.message || "Email sent!");
      console.log("Data", data);
      setLoading(false);
      resetForm();;
    });
    
  };

  const resetForm = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setMessage("");
    setPhone("");
    setSubject("");
    setFnameError("");
    setLnameError("");
    setEmailError("");
    setMessageError("");
    setPhoneError("");
    setSubjectError("");
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
                  fnameError.length > 0 ? "text-red-500" : "text-blue-700"
                } `}
                htmlFor="grid-first-name"
              >
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white ${
                  fnameError.length > 0
                    ? "border-red-500"
                    : "border-blue-500 focus:border-blue-500"
                } `}
                id="grid-first-name"
                type="text"
                onChange={(e) => {
                  setFirstName(e.target.value);
                  ValidateOnInputChange(
                    "normal",
                    e.target.value,
                    setFirstName,
                    setFnameError
                  );
                }}
                value={firstName}
                placeholder={"First Name"}
              />
              {fnameError.length > 0 && (
                <p className="mt-2 text-sm text-red-600 dark:text-red-500 italic">
                  <span className="font-medium">Error</span> - {fnameError}
                </p>
              )}
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className={`block uppercase tracking-wide text-xs font-bold mb-2 ${
                  lnameError.length > 0 ? "text-red-500" : "text-blue-700"
                } `}
                htmlFor="grid-last-name"
              >
                Last Name <span className="text-red-500">*</span>
              </label>
              <input
                className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white ${
                  lnameError.length > 0
                    ? "border-red-500"
                    : "border-blue-500 focus:border-blue-500"
                } `}
                id="grid-last-name"
                type="text"
                onChange={(e) => {
                  setLastName(e.target.value);
                  ValidateOnInputChange(
                    "normal",
                    e.target.value,
                    setLastName,
                    setLnameError
                  );
                }}
                value={lastName}
                placeholder={`Last Name`}
              />
              {lnameError.length > 0 && (
                <p className="mt-2 text-sm text-red-600 dark:text-red-500 italic">
                  <span className="font-medium">Oops!</span> {lnameError}
                </p>
              )}
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className={`block uppercase tracking-wide text-xs font-bold mb-2 ${
                  emailError.length > 0 ? "text-red-500" : "text-blue-700"
                } `}
                htmlFor="grid-email"
              >
                Email <span className="text-red-500">*</span>
              </label>
              <input
                className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white ${
                  emailError.length > 0
                    ? "border-red-500"
                    : "border-blue-500 focus:border-blue-500"
                } `}
                id="grid-email"
                type="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                  ValidateOnInputChange(
                    "email",
                    e.target.value,
                    setEmail,
                    setEmailError
                  );
                }}
                value={email}
                placeholder={`example@gmail.com`}
              />
              {emailError.length > 0 && (
                <p className="mt-2 text-sm text-red-600 dark:text-red-500 italic">
                  <span className="font-medium">Oops!</span> {emailError}
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
                  phoneError
                    ? "border-red-500"
                    : "border-blue-500 focus:border-blue-500"
                } `}
                id="grid-phone"
                type="text"
                onChange={(e) => {
                  setPhone(e.target.value);
                  ValidateOnInputChange(
                    "phone",
                    e.target.value,
                    setPhone,
                    setPhoneError
                  );
                }}
                value={phone}
                placeholder={`0-556-844-331`}
              />
              {phoneError.length > 0 && (
                <p className="mt-2 text-sm text-red-600 dark:text-red-500 italic">
                  <span className="font-medium"> Oops! </span> {phoneError}
                </p>
              )}
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className={`block uppercase tracking-wide text-xs font-bold mb-2 ${
                  subjectError.length > 0 ? "text-red-500" : "text-blue-700"
                } `}
                htmlFor="grid-subject"
              >
                Subject <span className="text-red-500">*</span>
              </label>
              <input
                className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white ${
                  subjectError.length > 0
                    ? "border-red-500"
                    : "border-blue-500 focus:border-blue-500"
                } `}
                id="grid-subject"
                type="text"
                onChange={(e) => {
                  setSubject(e.target.value);
                  ValidateOnInputChange(
                    "text",
                    e.target.value,
                    setSubject,
                    setSubjectError
                  );
                }}
                value={subject}
                placeholder={`Subject`}
              />
              {subjectError.length > 0 && (
                <p className="mt-2 text-sm text-red-600 dark:text-red-500 italic">
                  <span className="font-medium">Oops!</span> {subjectError}
                </p>
              )}
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-2">
            <div className="w-full px-3">
              <label
                className={`block uppercase tracking-wide text-xs font-bold mb-2 ${
                  messageError.length > 0 ? "text-red-500" : "text-blue-700"
                } `}
                htmlFor="grid-message"
              >
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white ${
                  messageError.length > 0
                    ? "border-red-500"
                    : "border-blue-500 focus:border-blue-500"
                } `}
                id="grid-message"
                onChange={(e) => {
                  setMessage(e.target.value);
                  ValidateOnInputChange(
                    "text",
                    e.target.value,
                    setMessage,
                    setMessageError
                  );
                }}
                value={message}
                placeholder="Message"
              />
              {messageError.length > 0 && (
                <p className="mt-2 text-sm text-red-600 dark:text-red-500 italic">
                  <span className="font-medium">Oops!</span> {messageError}
                </p>
              )}
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-2">
            <div className="w-full px-3 flex items-center justify-end">
              <button
                className="flex items-center justify-center gap-x-3 bg-blue-500 w-[40%] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
                disabled={loading}
                onClick={HandleSubmit}
              >
                {loading && <ImSpinner9 className="animate-spin text-2xl" />}
                <span>
                  {loading ? "Sending..." : "Send Message"}
                </span>
                
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
