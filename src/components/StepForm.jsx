import React, { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";

const LoanEligibilityChecker = () => {
  const [step, setStep] = useState(1);
  const [loanDetails, setLoanDetails] = useState({});
  const [eligibility, setEligibility] = useState(false);
  const [message, setMessage] = useState({ isSuccess: false, text: "" });

  const nextStep = (values) => {
    setLoanDetails(values);
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  function calculateAge(dateString) {
    var today = new Date();

    var birthDate = new Date(dateString);

    var age = today.getFullYear() - birthDate.getFullYear();

    // Adjust age if the current month is before the birth month

    var currentMonth = today.getMonth();

    var birthMonth = birthDate.getMonth();

    if (
      currentMonth < birthMonth ||
      (currentMonth === birthMonth && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }

    return age;
  }
  console.log(calculateAge("2000-11-05"));

  const checkEligibility = (items) => {
    // Perform eligibility check based on loanDetails and set eligibility, monthlyRepayable, totalInterest, and totalRepayable
    // Example calculation (replace with your own logic):
    console.log({ items });
    const { dob, isUK, eStatus, mIncome, mExpenditure, job } = items;
    console.log({ dob, isUK, eStatus, mIncome, mExpenditure, job });
    const ageVerification = calculateAge(dob) > 18;
    const incomeVerification =
      parseInt(mIncome) * 0.55 > parseInt(mExpenditure);
    const jobVerification = parseInt(job) < 2;
    console.log({ ageVerification, incomeVerification, jobVerification });

    // setStep(step + 1);
    setEligibility(true);
    if (
      !ageVerification ||
      !isUK ||
      eStatus === "unemployed" ||
      !incomeVerification ||
      !jobVerification
    ) {
      setStep(step + 1);
      setMessage({
        isSuccess: false,
        text: "You are not eligible for the loan",
      });
    } else {
      setStep(step + 1);
      setMessage({ isSuccess: true, text: "You are eligible for the loan" });
    }
  };

  return (
    <div className="container">
      {step === 1 && <Step1 nextStep={nextStep} />}
      {step === 2 && (
        <Step2
          prevStep={prevStep}
          allvalues={loanDetails}
          eligibility={checkEligibility}
        />
      )}
      {step === 3 && eligibility && (
        <div className="card p-3 m-3">
          <h2
            className={`text-center my-3 ${
              message.isSuccess ? "text-success" : "text-danger"
            }`}
          >
            {message.text}
          </h2>
        </div>
      )}
    </div>
  );
};

export default LoanEligibilityChecker;
