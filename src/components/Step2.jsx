import React from "react";
import { Form, Button } from "react-bootstrap";
import { useFormik } from "formik";

const Step2 = ({ prevStep, allvalues, eligibility }) => {
  const formik = useFormik({
    initialValues: {
      title: "",
      email: "",
      fName: "",
      lName: "",
      dob: "",
      aLine1: "",
      aLine2: "",
      street: "",
      town: "",
      pCode: "",
      insuranceNumber: "",
      phone: "",
      eStatus: "",
      job: "",
      mIncome: 0,
      mExpenditure: 0,
      isUK: false,
    },
    onSubmit: () => {
      const items = { ...formik.values }; // Combine Step 1 and Step 2 values
      // allvalues(...formik.values);
      eligibility(items);
      // formik.resetForm();
    },
  });

  return (
    <div className="container">
      <h2 className="text-center mb-4">Loan Eligibility Checker</h2>
      <Form onSubmit={formik.handleSubmit}>
        <div className="d-flex justify-content-between">
          <div className="w-100 card p-3 m-1 d-flex flex-column gap-2">
            <h3 className="text-center mb-4">Personal details</h3>
            <Form.Group controlId="formTitle">
              <Form.Label>Title:</Form.Label>
              <Form.Control
                as="select"
                name="title"
                value={formik.values.title}
                onChange={formik.handleChange}
                required
              >
                <option value="">--Select title--</option>

                <option value="mr">Mr</option>

                <option value="mrs">Mrs</option>

                <option value="miss">Miss</option>

                <option value="dr">Dr</option>

                <option value="sir">Sir</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="formfName">
              <Form.Label>First Name:</Form.Label>
              <Form.Control
                type="text"
                name="fName"
                required
                value={formik.values.fName}
                onChange={formik.handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formlName">
              <Form.Label>Last Name:</Form.Label>
              <Form.Control
                type="text"
                name="lName"
                required
                value={formik.values.lName}
                onChange={formik.handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formDob">
              <Form.Label>Date of Birth:</Form.Label>
              <Form.Control
                type="date"
                name="dob"
                required
                value={formik.values.dob}
                onChange={formik.handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formIsUK">
              <Form.Label>UK residence or not:</Form.Label>
              <Form.Control
                as="select"
                required
                name="isUK"
                value={formik.values.isUK}
                onChange={formik.handleChange}
              >
                <option value={true}>UK</option>
                <option value={false}>Non-UK</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="formaLine1">
              <Form.Label>Address Line 1:</Form.Label>
              <Form.Control
                type="text"
                required
                name="aLine1"
                value={formik.values.aLine1}
                onChange={formik.handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formaLine2">
              <Form.Label>Address Line 2:</Form.Label>
              <Form.Control
                type="text"
                name="aLine2"
                value={formik.values.aLine2}
                onChange={formik.handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formStreet">
              <Form.Label>Street:</Form.Label>
              <Form.Control
                type="text"
                name="street"
                required
                value={formik.values.street}
                onChange={formik.handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formTown">
              <Form.Label>Town/City:</Form.Label>
              <Form.Control
                type="text"
                required
                name="town"
                value={formik.values.town}
                onChange={formik.handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formpCode">
              <Form.Label>Postcode:</Form.Label>
              <Form.Control
                type="text"
                required
                name="pCode"
                value={formik.values.pCode}
                onChange={formik.handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formiNumber">
              <Form.Label>What's Your Insurance number:</Form.Label>
              <Form.Control
                type="text"
                required
                name="insuranceNumber"
                value={formik.values.insuranceNumber}
                onChange={formik.handleChange}
              />
            </Form.Group>
          </div>
          <div className="w-100 card p-3 m-1 d-flex flex-column gap-2">
            <h3 className="text-center mb-4">Contact details</h3>
            <Form.Group controlId="formEmail">
              <Form.Label>Email:</Form.Label>
              <Form.Control
                type="email"
                name="email"
                required
                value={formik.values.email}
                onChange={formik.handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formPhone">
              <Form.Label>Phone:</Form.Label>
              <Form.Control
                type="text"
                name="phone"
                required
                value={formik.values.phone}
                onChange={formik.handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formeStatus">
              <Form.Label>What's your employment status:</Form.Label>
              <Form.Control
                as="select"
                required
                name="eStatus"
                value={formik.values.eStatus}
                onChange={formik.handleChange}
              >
                <option value="">--Select--</option>
                <option value="employed">Employed</option>
                <option value="unemployed">Unemployed</option>
                <option value="self-employed">Self-employed</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="formJob">
              <Form.Label>How many people depend on you:</Form.Label>
              <Form.Control
                required
                as="select"
                name="job"
                value={formik.values.job}
                onChange={formik.handleChange}
              >
                <option value="">--Select--</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4+">4+</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="formIncome">
              <Form.Label>Your monthly income</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="0"
                name="mIncome"
                value={formik.values.mIncome}
                onChange={formik.handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formIexpenditure">
              <Form.Label>Your monthly expenditure</Form.Label>
              <Form.Control
                type="text"
                required
                placeholder="0"
                name="mExpenditure"
                value={formik.values.mExpenditure}
                onChange={formik.handleChange}
              />
            </Form.Group>
          </div>
        </div>
        <div className="d-flex mt-3 justify-content-center align-items-center">
          <Button variant="primary" type="submit">
            Check eligibility
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default Step2;
