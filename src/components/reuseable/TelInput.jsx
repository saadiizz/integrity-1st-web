import React from "react";
import { MuiTelInput } from "mui-tel-input";
import "../../utils/css/styles.css";
import { OutlinedInput, Stack, TextField } from "@mui/material";
import { IMaskInput } from "react-imask";
import { useController } from "react-hook-form";

const TextMaskCustom = React.forwardRef(function TextMaskCustom(props, ref) {
  const { onChange, ...other } = props;
  return (
    <IMaskInput
      {...other}
      mask="(#00) 000-0000"
      definitions={{
        "#": /[1-9]/,
      }}
      inputRef={ref}
      onAccept={(value) => onChange({ target: { name: props.name, value } })}
      overwrite
    />
  );
});
const TelInput = ({ control, name, type, rules }) => {
  const { field } = useController({
    name /**This is the unique identifier used by React Hook Form**/,
    rules,
    control,
  });
  return (
    <Stack direction={"row"} width={"100%"} spacing={2} my={"0.5em"}>
      <MuiTelInput
        defaultCountry="US"
        onlyCountries={["US"]}
        disableDropdown
        className="TextField-without-border-radius"
        sx={{ width: 180 }}
        inputProps={{ readOnly: true }}
      />

      <OutlinedInput
        className="TextField-without-border-radius"
        {...field}
        type={type}
        // value={phoneValue}
        // onChange={(e) => handleChange(e)}
        // id="formatted-text-mask-input"
        placeholder="(XXX) XXX-XXXX"
        fullWidth
        inputComponent={TextMaskCustom}
      />
    </Stack>
  );
};

export default TelInput;
