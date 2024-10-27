import {
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAppontment } from "../../../store/appointments/actions";
import { getCars } from "../../../store/garage/actions";

const AllAppointmentsComponent = () => {
  const dispatch = useDispatch();
  const { appointments } = useSelector((state) => state.appointments);

  useEffect(() => {
    dispatch(getCars());
    dispatch(getAppontment());
  }, []);

  return (
    <>
      <Stack padding={"3em 2em"} spacing={4}>
        <Typography variant="h4" color={"#344054"}>
          All Appointments
        </Typography>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Appointment Reason</TableCell>
                <TableCell align="right">Car Name</TableCell>
                <TableCell align="right">Total Milage</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {appointments &&
                appointments.appointments.map((appointment) => (
                  <TableRow
                    key={appointment._id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {appointment.appointmentReason.title}
                    </TableCell>
                    <TableCell align="right">
                      {appointment?.vehicle?.name}
                    </TableCell>
                    <TableCell align="right">
                      {appointment?.vehicle?.mileage}
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Stack>
    </>
  );
};

export default AllAppointmentsComponent;
