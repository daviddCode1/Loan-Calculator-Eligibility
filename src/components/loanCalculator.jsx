import React, { useState } from "react";

const LoanCalculator = () => {
  const [amount, setAmount] = useState(0);
  const [validation, setValidation] = useState({});
  const [term, setTerm] = useState(0);

  const amountValidation = (e) => {
    let value = e.target.value;
    if (value >= 1000 && value <= 10000) {
      setValidation({ ...validation, amount: true });
    } else {
      setValidation({ ...validation, amount: false });
    }
    setAmount(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ amount, term });
  };

  return (
    <>
      <h2 className="display-4">LOAN CALCULATOR</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Amount:
          <input
            type="number"
            min="1000"
            max="10000"
            class="form-control"
            id="amount"
            minclassName={validation.amount === true ? "success" : "failure"}
            value={amount}
            onChange={(e) => amountValidation(e)}
            required
          />
        </label>
        <br />
        {/*
        <label>
        Term:
        <input type="text" id="term" className={validation.term == true ? "success" : "failure"} value={term} onChange={(e) => termValidation(e)} />
        </label>
        <br />

        <select id="term" value={term}  className={validation.term == true ? "success" : "failure"} onChange={(e) => termValidation(e.target.value)} required>
        */}

        <label htmlFor="loanTerm">Term (Months): </label>
        <select
          id="term"
          class="form-control"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          required
        >
          <option value="">-- Select --</option>
          <option value="12">12</option>
          <option value="24">24</option>
          <option value="36">36</option>
          <option value="48">48</option>
          <option value="60">60</option>
        </select>
        <br />

        <button type="submit" class="btn btn-primary" value="Submit">
          Submit
        </button>
      </form>
    </>
  );
};

export default LoanCalculator;
