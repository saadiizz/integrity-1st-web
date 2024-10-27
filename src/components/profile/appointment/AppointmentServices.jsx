import * as React from "react";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAppontmentRec } from "../../../store/appointments/actions";
import { InputLabel } from "@mui/material";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name, serviceType, theme) {
  return {
    fontWeight:
      serviceType.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const AppointmentServices = ({ serviceType, setServiceType }) => {
  const theme = useTheme();

  const { recomended } = useSelector((state) => state.appointments);

  const handleChange = (event) => {
    // const {
    //   target: { value },
    // } = event;
    setServiceType(event.target.value);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAppontmentRec());
  }, []);

  return (
    <>
      <FormControl fullWidth>
        <InputLabel id="service-reason">
          3. What are you looking to get done
        </InputLabel>
        <Select
          labelId="service-reason"
          id="service-reason-id"
          value={serviceType}
          onChange={handleChange}
          label="3. What are you looking to get done"
          sx={{ backgroundColor: "white" }}
        >
          <MenuItem disabled value="">
            <em>Services</em>
          </MenuItem>
          {recomended &&
            recomended.map((item, key) => {
              return (
                <MenuItem key={key} value={item._id}>
                  {item.title}
                </MenuItem>
              );
            })}
        </Select>
      </FormControl>
    </>
  );
};
export default AppointmentServices;
