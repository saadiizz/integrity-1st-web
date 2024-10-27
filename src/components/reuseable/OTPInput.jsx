import { MuiOtpInput } from "mui-one-time-password-input";
import React from "react";
import { useController } from "react-hook-form";

const OTPInput = ({ control, name }) => {
  const { field, fieldState } = useController({
    name,
    rule: { validate: (value) => value.length === 6 },
    control,
  });

  const matchIsNumeric = (text) => {
    const isNumber = Number(text);
    return isNumber && !isNaN(Number(text));
  };
  const validateChar = (value, index) => {
    return matchIsNumeric(value);
  };
  return (
    <>
      <MuiOtpInput length={6} validateChar={validateChar} {...field} />
    </>
  );
};

export default OTPInput;
