import { TextField } from "@mui/material";
import React from "react";
import { useState } from "react";

// forked from https://github.com/andria-dev/mui-phone-input/blob/master/src/PhoneInput.js
export default function PhoneInput({ ...props }) {
  const [state, setState] = useState({
    value: "",
  });
  return (
    <TextField
      inputProps={{ pattern: "[0-9]{3}-[0-9]{3}-[0-9]{4}" }}
      type="tel"
      {...props}
      value={state.value}
      onChange={(event) => {
        const el = event.target;
        let selectionStart = el.selectionStart;

        const newInput = event.target.value.replace(/\D/g, "");

        const oldValueArr = state.value.split("-");
        const newValueArr = [
          newInput.slice(0, 3),
          newInput.slice(3, 6),
          newInput.slice(6, 10),
        ].filter((x) => x);

        const newValue = newValueArr.join("-");

        if (props.onChange) {
          props.onChange(newValue);
        }

        setState({ value: newValue });
        if (selectionStart === null) {
          selectionStart = 0;
        }
        selectionStart += Math.max(newValueArr.length - oldValueArr.length, 0);
        el.selectionStart = el.selectionEnd = selectionStart;
      }}
    />
  );
}
