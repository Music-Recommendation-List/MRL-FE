import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function DropDown2(props) {
  const { _onChange, value, label, list1, list2, list3, list4,list5, help } = props;


  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-helper-label">{label}</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={value}
          label={label}
          onChange={_onChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={list1}>{list1}</MenuItem>
          <MenuItem value={list2}>{list2}</MenuItem>
          <MenuItem value={list3}>{list3}</MenuItem>
          <MenuItem value={list4}>{list4}</MenuItem>
          <MenuItem value={list5}>{list5}</MenuItem>
        </Select>
        <FormHelperText>{help}</FormHelperText>
      </FormControl>
    </div>
  );
}
