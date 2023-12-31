import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useFormik } from "formik";
import '../css/step1.css';

const Step1 = ({ nextStep }) => {
  const [monthlyRepay, setMonthlyRepay] = useState(0);
  const [totalRepay, setTotalRepay] = useState(0);
  const [interestRate, setInterestRate] = useState(0);
  const [interestAmount, setInterestAmount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const calculateLoan = (array) => {
    // console.log({ array });
    setInterestRate(array.interestrate); 
    const pv = parseInt(array.amount);
    const r = array.interestrate / 1200;
    const n = parseInt(array.term);
    const p = (r * pv) / (1 - Math.pow(1 + r, -n));
    
    console.log({ pv, n, r, p });
    setMonthlyRepay(p.toFixed(2));
    setTotalRepay((p * n).toFixed(2));
    setIsVisible(true);
    setInterestAmount(((p * n) - array.amount).toFixed(2));
  };

  const formik = useFormik({
    initialValues: {
      amount: 0,
      term: "",
      interestrate: 0
    },
    onSubmit: (values, { resetForm }) => {
      console.log({ values });
      calculateLoan(values);
      // resetForm();
      // nextStep(values); // Pass the form values to the next step
    },
  });

  return (
    <div className="container ">
      <h2 className="text-center">Loan Calculator</h2>
      <div className="d-flex justify-between gap-1">
        <Form className="card p-3 w-100 m-1" onSubmit={formik.handleSubmit}>
          <Form.Group controlId="formAmount">
            <Form.Label>Amount:</Form.Label>
            <Form.Control
              type="number"
              name="amount"
              min={1000}
              max={10000000}
              required
              value={formik.values.amount}
              onChange={formik.handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formTerm">
            <Form.Label>Term:(Months)</Form.Label>
            <Form.Control
              as="select"
              name="term"
              required
              value={formik.values.term}
              onChange={formik.handleChange}
            >
              <option value="">Select terms</option>

              <option value="12">12 months</option>

              <option value="24">24 months</option>

              <option value="36">36 months</option>

              <option value="48">48 months</option>

              <option value="60">60 months</option>
            </Form.Control>
            <Form.Group controlId="forInterestrate">
            <Form.Label>Interest Rate</Form.Label>
            <Form.Control
              type="number"
              name="interestrate"
              required
              value={formik.values.interestrate}
              onChange={formik.handleChange}
            />
          </Form.Group>
          </Form.Group>

          <Button className="my-2" variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        <div className="card p-3 w-100 m-1">
          <div className="d-flex my-3 justify-content-between gap-2 align-items-center">
            <span>Monthly Repay:</span>
            <span>£{monthlyRepay}</span>
          </div>
          <div className="d-flex my-3 justify-content-between gap-2 align-items-center">
            <span>Total Repay:</span>
            <span>£{totalRepay}</span>
          </div>
          <div className="d-flex my-3 justify-content-between gap-2 align-items-center">
            <span>Interest Amount:</span>
            <span>£{interestAmount}</span>
          </div>
          <div className="d-flex my-3 justify-content-between gap-2 align-items-center">
            <span>Interest Rate:</span>
            <span>{interestRate}%</span>
          </div>
        </div>
      </div>
      {isVisible && (
        <div className="d-flex justify-content-center align-items-center my-2">
          <Button
            className=""
            type="button"
            variant="success"
            onClick={nextStep}
          >
            Loan eligibility checker
          </Button>
        </div>
      )}
    </div>
  );
};

export default Step1;
