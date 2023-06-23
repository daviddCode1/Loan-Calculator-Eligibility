import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import Axios from 'axios';

const Form = () => {
  const [data, setData] = useState({
    title: "",
    firstName: "",
    lastName: "",
    dob: 0,
    email: "",
    phone: 0,
    address1: "",
    address2: "",
    street: "",
    townCity: "",
    postcode: "",
    employmentstatus: "",
    ni: "",
    dependants: 0,
    monthlyincome: 0,
    monthlyexpenditure: 0,
  });

  // State hooks for storing form input values
  const [title, setTitle] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDob] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState(0);
  // Address
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [street, setStreet] = useState("");
  const [townCity, setTowncity] = useState("");
  const [postcode, setPostcode] = useState("");
  //
  const [employmentstatus, setEmploymentStatus] = useState("");
  const [ni, setNI] = useState("");
  const [dependants, setDependants] = useState(0);
  const [monthlyincome, setMonthlyIncome] = useState(0);
  const [monthlyexpenditure, setMonthlyExpenditure] = useState(0);

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    console.log({
      title,
      firstName,
      lastName,
      dob,
      phone,
      email,
      address1,
      address2,
      street,
      townCity,
      postcode,
      ni,
      employmentstatus,
      dependants,
      monthlyincome,
      monthlyexpenditure,
    });
  };

  ///to be continued...
  // function handleChange(e) {
  //   const newdata = { ...data };
  //   newdata[e.target.id] = e.target.value;
  //   setData(newdata);
  //   console.log(newdata);
  // }

  // convert data to json string
  // const jsonData = JSON.stringify(data);

  return (
    <>
      <div className="container">
        <h2 class="display-4">LOAN ELIGIBILITY CHECKER</h2>
        <form onSubmit={handleSubmit} class="form">
          {/* Input for first name */}
          <div className="personaldetails">
            <h4 class="display-4" id="personaldetails">
              Personal Details
            </h4>
            <label>Your Title: </label>
            <select
              id="title"
              class="form-select"
              value={data.title}
              onChange={(e) => setTitle(e.target.value)}
              required
            >
              <option value="">-- Select --</option>
              <option value="mr">Mr</option>
              <option value="mrs">Mrs</option>
              <option value="miss">Miss</option>
              <option value="dr">Dr</option>
              <option value="sir">Sir</option>
            </select>
            <br />
          </div>

          <div className="personaldetails">
            <label>
              {" "}
              Full Name
              <input
                type="text"
                id="firstname"
                class="form-control"
                placeholder="First Name"
                aria-label="First name"
                value={data.firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
              <input
                type="text"
                id="lastname"
                class="form-control"
                placeholder="Last Name"
                aria-label="Last name"
                value={data.lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </label>
            <br />
          </div>

          {/* Input for date of birth */}
          <div className="personaldetails">
            <label>
              Date of Birth:
              <input
                type="date"
                id="name"
                class="form-control"
                value={data.dob}
                onChange={(e) => setDob(e.target.value)}
                required
              />
            </label>
            <br />
          </div>

          {/* Textarea for UK address */}
          <div className="personaldetails">
            <label>
              Address Line 1:
              <input
                type="text"
                id="addressline1"
                class="form-control"
                value={data.address1}
                onChange={(e) => setAddress1(e.target.value)}
                required
              />
            </label>
            <br />
            <label>
              Address Line 2:
              <input
                type="text"
                id="addressline2"
                class="form-control"
                value={data.address2}
                onChange={(e) => setAddress2(e.target.value)}
              />
            </label>
            <br />
            <label>
              Street:
              <input
                type="text"
                id="street"
                class="form-control"
                value={data.street}
                onChange={(e) => setStreet(e.target.value)}
              />
            </label>
            <br />
            <label>
              Town/City:
              <input
                type="text"
                id="towncityclass"
                class="form-control"
                value={data.townCity}
                onChange={(e) => setTowncity(e.target.value)}
                required
              />
            </label>
            <br />
            <label>
              Postcode:
              <input
                type="text"
                id="postcode"
                class="form-control"
                value={data.postcode}
                onChange={(e) => setPostcode(e.target.value)}
                required
              />
            </label>
            <br />
          </div>

          {/* Input for email */}
          <div className="contactdetails">
            <label>
              What's you National Insurance Number
              <input
                type="text"
                id="email"
                class="form-control"
                minLength={9}
                maxLength={9}
                value={data.ni}
                onChange={(e) => setNI(e.target.value)}
                required
              />
            </label>
            <br />

            <h4 class="display-7" id="contactdetails">
              <strong>Contact Details</strong>
            </h4>
            {/* Input for email */}
            <label>
              Email:
              <input
                type="email"
                id="email"
                class="form-control"
                value={data.email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </label>
            <br />

            <label>
              Phone:
              <input
                type="Phone"
                id="phone"
                class="form-control"
                value={data.phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </label>
            <br />
          </div>

          <div className="employmentstatus">
            <label htmlFor="employment-status">
              What's Your Employment Status
            </label>
            <select
              class="form-select"
              id="employment-status"
              value={data.employmentstatus}
              onChange={(e) => setEmploymentStatus(e.target.value)}
              required
            >
              <option value="">-- Select --</option>
              <option value="employed">Employed</option>
              <option value="unemployed">Unemployed</option>
              <option value="self-employed">Self-employed</option>
            </select>
          </div>
          <br />

          <label htmlFor="dependants">How many people depend on you</label>
          <select
            class="form-select"
            id="dependants"
            value={data.dependants}
            onChange={(e) => setDependants(e.target.value)}
            required
          >
            <option value="">-- Select --</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4+">4+</option>
          </select>
          <br />

          <label>
            Your Monthly Income
            <input
              type="number"
              id="monthlyincome"
              className="form-control"
              value={data.monthlyincome}
              onChange={(e) => setMonthlyIncome(e.target.value)}
              required
            />
          </label>
          <br />
          <label>
            Your Monthly Expenditure
            <input
              type="number"
              id="monthlyexpenditure"
              className="form-control"
              value={data.monthlyexpenditure}
              onChange={(e) => setMonthlyExpenditure(e.target.value)}
              required
            />
          </label>
          <br />

          {/* Submit button */}
          <button className="btn btn-primary" type="submit" value="Submit">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Form;
