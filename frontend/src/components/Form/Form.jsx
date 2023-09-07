import React, { useState, useEffect } from "react";
import data from "../../assets/data/Data";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Form = () => {
  const [certificate, setCertificate] = useState("");
  const [university, setUniversity] = useState("");
  const [name, setName] = useState("");
  const [mothername, setMothername] = useState("");
  const [fathername, setFathername] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [alternate, setAlternate] = useState("");
  const [dob, setDob] = useState("");
  const [course, setCourse] = useState([]);
  const [subcourse, setSubcourse] = useState([]);
  const [enrollment, setEnrollment] = useState("");
  const [passingyear, setPassingyear] = useState("");
  const [house, setHouse] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [postoffice, setPostoffice] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const handleChange = (e) => {
    if (e.target.name === "name") {
      setName(e.target.value);
    } else if (e.target.name === "email") {
      setEmail(e.target.value);
    } else if (e.target.name === "mobile") {
      setMobile(e.target.value);
    } else if (e.target.name === "university") {
      setUniversity(e.target.value);
    } else if (e.target.name === "certificate") {
      setCertificate(e.target.value);
    } else if (e.target.name === "fathername") {
      setFathername(e.target.value);
    } else if (e.target.name === "mothername") {
      setMothername(e.target.value);
    } else if (e.target.name === "alternate") {
      setAlternate(e.target.value);
    } else if (e.target.name === "dob") {
      setDob(e.target.value);
    } else if (e.target.name === "enrollment") {
      setEnrollment(e.target.value);
    } else if (e.target.name === "passingyear") {
      setPassingyear(e.target.value);
    } else if (e.target.name === "house") {
      setHouse(e.target.value);
    } else if (e.target.name === "state") {
      setState(e.target.value);
    } else if (e.target.name === "city") {
      setCity(e.target.value);
    } else if (e.target.name === "zipcode") {
      setZipcode(e.target.value);
    } else if (e.target.name === "postoffice") {
      setPostoffice(e.target.value);
    } else if (e.target.name === "country") {
      setCountry(e.target.value);
    }
  };

  const handleSubmit = async (e) => {
    const data = {
      name,
      email,
      mobile,
      certificate,
      university,
      country,
      fathername,
      mothername,
      alternate,
      dob,
      passingyear,
      enrollment,
      city,
      state,
      zipcode,
      postoffice,
      house,
      course,
      subcourse,
    };
    e.preventDefault();
    setFormErrors(validate(data));
    setIsSubmit(true);

    await Promise.all([
      fetch(`${process.env.REACT_APP_PORT}/form`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }),
      fetch(`${process.env.REACT_APP_PORT}/sheet`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }),
      fetch(`${process.env.REACT_APP_PORT}/email`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }),
    ]);

    setUniversity("");
    setCertificate("");
    setCity("");
    setAlternate("");
    setCity("");
    setCountry("");
    setCourse("");
    setDob("");
    setEnrollment("");
    setFathername("");
    setHouse("");
    setMothername("");
    setPassingyear("");
    setPostoffice("");
    setState("");
    setSubcourse("");
    setUniversity("");
    setZipcode("");
    setEmail("");
    setName("");
    setMobile("");
    toast.success("🦄 Your data sent was successfully !", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.warn();
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.name) {
      errors.name = "!Name is required";
    }

    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.mobile) {
      errors.mobile = "Mobile is required!";
    } else if (values.mobile.length < 10) {
      errors.mobile = "More than 10 digits";
    } else if (values.mobile.length > 15) {
      errors.mobile = "less than 15";
    }
    return errors;
  };

  const changeUniversity = (event) => {
    setUniversity(event.target.value);
    setCourse(data.find((ctr) => ctr.name === event.target.value).course)
  }

  const changeCourse = (event) => {
    setCourse(event.target.value);
    setSubcourse(course.find(course => course.name === event.target.value).subcourse)
  }

  return (
    <section className="md:w-full min-w-full">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
      <div className="md:mx-auto rounded-lg bg-[#ffffff] shadow-2xl drop-shadow-xl mt-4 md:w-[70%]">
        <div className="mt-6 ml-4 mr-10 md:ml-20">
          <div className="text-center">
            <h3 className="text-gray-800 font-[600] text-lg leading-5 tracking-wide">
              <span>Application Form for Degree Delivery</span>
              <hr className="md:w-[60vw] mt-1" />
            </h3>
          </div>
        </div>
        {Object.keys(formErrors).length === 0 && isSubmit ? (
          <div></div>
        ) : (
          <pre>{undefined}</pre>
        )}
        <form className="w-full form" onSubmit={handleSubmit} method="POST">
          {/* ==========section-1=========== */}

          <div className="">
            <div className="mt-6 ml-9 md:ml-12">
              <div className="">
                <h3 className="text-gray-800 font-[600] text-lg leading-5 tracking-wider">
                  <span>Certificate & University select</span>
                  <hr className="md:w-[29%] w-1/5" />
                </h3>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap mx-10 mb-2 mt-4">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="university"
              >
                University
              </label>
              <div className="relative">
                <select
                  name="university"
                  value={university}
                  onChange={changeUniversity}
                  className="block appearance-none w-full border border-gray-400 text-gray-700 py-1.5 px-3 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="university"
                >
                  <option>--Select Option--</option>

                  {data.map((ctr) => (
                    <option value={ctr.name}>{ctr.name}</option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="certificate"
              >
                Certificate
              </label>
              <div className="relative">
                <select
                  name="certificate"
                  value={certificate}
                  onChange={handleChange}
                  className="block appearance-none w-full border border-gray-400 text-gray-700 py-1.5 px-3 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="university"
                >
                  <option>--Select Option--</option>
                  <option>Online/Distance degree</option>
                  <option>Migration Certificate</option>
                  <option>Other</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* ===============Section-2=================== */}

          <div className="mt-6 ml-9 md:ml-12">
            <div className="">
              <h3 className="text-gray-800 font-[600] text-lg leading-5 tracking-wider">
                <span>Personal Information</span>
                <hr className="w-1/5" />
              </h3>
            </div>
          </div>
          <div className="flex flex-wrap mx-10 mb-2 mt-4">
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <p className="text-red-600 absolute ml-48  text-sm">
                {formErrors.name}
              </p>
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>

              <input
                name="name"
                value={name}
                onChange={handleChange}
                className="appearance-none block w-full text-gray-700 border border-gray-400 rounded py-1.5 px-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="name"
                type="text"
                placeholder="Name"
              />
            </div>

            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="mothername"
              >
                Mother Name
              </label>
              <input
                name="mothername"
                value={mothername}
                onChange={handleChange}
                className="appearance-none block w-full  text-gray-700 border border-gray-400 rounded py-1.5 px-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="mothername"
                type="text"
                placeholder="Mother-Name"
              />
            </div>
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="fathername"
              >
                Father Name
              </label>
              <input
                name="fathername"
                value={fathername}
                onChange={handleChange}
                className="appearance-none block w-full  text-gray-700 border border-gray-400 rounded py-1.5  px-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="fathername"
                type="text"
                placeholder="FatherName"
              />
            </div>
            <div className="w-full md:w-1/3 px-3 mt-4">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="email"
              >
                Mobile Number
              </label>
              <PhoneInput
                className="appearance-none block  text-gray-700 border border-gray-400 rounded py-1.5 px-3 "
                defaultCountry="IN"
                international
                value={mobile}
                onChange={setMobile}
              />
            </div>

            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0 mt-4">
              <p className="text-red-600 absolute ml-48 text-sm">
                {formErrors.email}
              </p>
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="email"
              >
                Email-id
              </label>
              <input
                name="email"
                value={email}
                onChange={handleChange}
                className="appearance-none block w-full  text-gray-700 border border-gray-400 rounded py-1.5  px-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="email"
                type="email"
                placeholder="Enter your email"
              />
            </div>

            <div className="w-full md:w-1/3 px-3 mt-4">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="email"
              >
                Alternate Number
              </label>
              <PhoneInput
                defaultCountry="IN"
                className="appearance-none block  text-gray-700 border border-gray-400 rounded py-1.5 px-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                international
                value={alternate}
                onChange={setAlternate}
              />
            </div>
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0 mt-4">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="dob"
              >
                Date of Birth
              </label>
              <input
                name="dob"
                value={dob}
                onChange={handleChange}
                className="appearance-none block w-full  text-gray-700 border border-gray-400 rounded py-1.5  px-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="dob"
                type="date"
                placeholder="Enter your DOB"
              />
            </div>
          </div>

          {/* =========Section-3=========== */}
          <div className="">
            <div className="mt-6 ml-9 md:ml-12">
              <div className="">
                <h3 className="text-gray-800 font-[600] text-lg leading-5 tracking-wider">
                  <span>Academic Details</span>
                  <hr className="w-1/6" />
                </h3>
              </div>
            </div>
            <div className="flex flex-wrap mx-10 mb-2 mt-4">


              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="course"
                >
                  Course
                </label>
                <div className="relative">
                  <select
                    name="certificate"
                    value={course}
                    className="appearance-none block w-full text-gray-700 border border-gray-400 rounded py-1.5 px-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="course"
                  >
                    <option>--Select Option--</option>
                    <option>b.cs.</option>
                    <option>b.cs.</option>
                    <option>b.cs.</option>

                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="course"
                >
                  Subcourse
                </label>
                <div className="relative">
                  <select
                    name="certificate"
                    value={subcourse}
                    className="appearance-none block w-full text-gray-700 border border-gray-400 rounded py-1.5 px-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="course"
                  >
                    <option>--Select Option--</option>

                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="enrollment"
                >
                  Enrollment number
                </label>
                <input
                  name="enrollment"
                  value={enrollment}
                  onChange={handleChange}
                  className="appearance-none block w-full  text-gray-700 border border-gray-400 rounded py-1.5  px-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="enrollment"
                  type="number"
                  placeholder="Enter your alternate-number"
                />
              </div>
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0 mt-4">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="passingyear"
                >
                  Passing year
                </label>
                <input
                  name="passingyear"
                  value={passingyear}
                  onChange={handleChange}
                  className="appearance-none block w-full  text-gray-700 border border-gray-400 rounded py-1.5  px-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="passingyear"
                  type="date"
                  placeholder="Enter your Passing year"
                />
              </div>
            </div>
          </div>
          {/* =============section-4 =============== */}

          <div className="w-full">
            <div className="mt-6 ml-9 md:ml-12">
              <div className="">
                <h3 className="text-gray-800 font-[600] text-lg leading-5 tracking-wider">
                  <span>Delivery Address</span>
                  <hr className="w-1/6" />
                </h3>
              </div>
            </div>
            <div className="flex flex-wrap mx-10 mb-2 mt-4">
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="house"
                >
                  House No./apartment/street
                </label>
                <input
                  name="house"
                  value={house}
                  onChange={handleChange}
                  className="appearance-none block w-full text-gray-700 border border-gray-400 rounded py-1.5 px-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="house"
                  type="text"
                  placeholder="Enter your house."
                />
              </div>
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="state"
                >
                  State
                </label>
                <div className="relative">
                  <select
                    name="state"
                    value={state}
                    onChange={handleChange}
                    className="block appearance-none w-full border border-gray-400 text-gray-700 py-1.5 px-3 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="state"
                  >
                    <option>New Mexico</option>
                    <option>Missouri</option>
                    <option>Texas</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="city"
                >
                  City
                </label>
                <div className="relative">
                  <select
                    name="city"
                    value={city}
                    onChange={handleChange}
                    className="block appearance-none w-full border border-gray-400 text-gray-700 py-1.5 px-3 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="city"
                  >
                    <option>New Mexico</option>
                    <option>Missouri</option>
                    <option>Texas</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0 mt-4">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="zipcode"
                >
                  Zipcode
                </label>
                <input
                  name="zipcode"
                  value={zipcode}
                  onChange={handleChange}
                  className="appearance-none block w-full text-gray-700 border border-gray-400 rounded py-1.5 px-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="zipcode"
                  type="text"
                  placeholder="Enter your zipcode"
                />
              </div>
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0 mt-4">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="postoffice"
                >
                  post-office
                </label>
                <input
                  name="postoffice"
                  value={postoffice}
                  onChange={handleChange}
                  className="appearance-none block w-full text-gray-700 border border-gray-400 rounded py-1.5 px-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="postoffice"
                  type="text"
                  placeholder="Enter your postoffice"
                />
              </div>
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0 mt-4">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="country"
                >
                  Country
                </label>
                <input
                  name="country"
                  value={country}
                  onChange={handleChange}
                  className="appearance-none block w-full text-gray-700 border border-gray-400 rounded py-1.5 px-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="country"
                  type="text"
                  placeholder="Enter your country "
                />
              </div>
            </div>
          </div>

          {/* =============section-5========== */}
          <div className="mt-8">
            <div className="text-[#f85] text-justify tracking-tight leading-5 mb-2 md:mb-0 font-[500] text-base relative md:left-12 md:mt-2 space-x-2">
              <span>Note:</span>
              <span className="text-black text-sm md:text-[1em] leading-3">
                The online application fee for degree delivery is ₹1000, which
                includes tax and delivery charges.
              </span>
            </div>
            <div className="relative md:left-24 pl-3.5 md:pl-2 mt-6">
              <label>
                <input
                  type="checkbox"
                  className="absolute top-1.5 -left-1 md:-left-2 cu"
                />
                <span className="text-xs tracking-tight md:text-sm font-[400] ">
                  I hereby declare that the information provided is true and
                  correct.
                </span>
              </label>
            </div>
            <div className="relative md:mt-2 md:ml-10 py-6">
              <button className="cursor-pointer bg-[#009933] hover:bg-green-700 py-2 md:w-1/6 w-1/2 rounded text-white">
                Proceed to pay
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Form;
