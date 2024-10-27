import { Grid, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useSelector } from "react-redux";
import { edgedSlots, timeSlots } from "../../../data/data";
import AppointmentCard from "../../reuseable/cards/AppointmentCard";
const DateTimePicker = ({
  startDate,
  setStartDate,
  index,
  timeValue,
  setTimeValue,
  outerTimeStamps,
  setOuterTimeStamps,
}) => {
  const { user } = useSelector((state) => state.auth);

  const day = startDate.getDay() - 1;
  const filteredSlots = timeSlots.filter((time) => {
    return (
      time >= user?.shopId?.openingHours[day]?.from ||
      time <= user?.shopId?.openingHours[day]?.till
    );
  });

  const isWeekday = (date) => {
    const day = date.getDay();
    return day !== 0;
  };
  const handleTimeStamps = (time) => {
    setTimeValue(time);
    setOuterTimeStamps({
      ...outerTimeStamps,
      isAfterHours: false,
      isEarlyBird: false,
    });
  };
  const handleOuterTimeStamps = (key) => {
    if (key) {
      setOuterTimeStamps({
        ...outerTimeStamps,
        isAfterHours: true,
        isEarlyBird: false,
      });
    } else {
      setOuterTimeStamps({
        ...outerTimeStamps,
        isEarlyBird: true,
        isAfterHours: false,
      });
    }
  };
  return (
    <AppointmentCard>
      <Typography>{`${index}. Select Date and Time`}</Typography>
      <Stack direction={"row"} justifyContent={"space-between"}>
        {/* Date Piicker */}
        <Stack width={"48%"}>
          <Typography variant="body1" paddingBottom={2}>
            Select Date
          </Typography>
          <DatePicker
            selected={startDate}
            minDate={new Date()}
            onChange={(date) => setStartDate(date)}
            inline
            filterDate={isWeekday}
            fixedHeight
          />
        </Stack>

        {/* Time Picker  */}
        <Stack width={"48%"} spacing={2}>
          <Typography variant="body1" paddingBottom={2}>
            Select Time
          </Typography>
          <Grid container spacing={2} paddingBottom={2}>
            {filteredSlots.map((time, key) => {
              return (
                <Grid
                  item
                  xs={3}
                  key={key}
                  onClick={() => handleTimeStamps(time)}
                >
                  <Stack
                    borderRadius={1}
                    fontSize={"0.8em"}
                    className={timeValue === time ? "styledTime" : ""}
                    bgcolor={"#FFFFFF"}
                    border={"1px solid rgba(0, 0, 0, 0.12)"}
                    paddingX={2}
                    paddingY={2}
                    textAlign={"center"}
                  >
                    {time}
                  </Stack>
                </Grid>
              );
            })}
          </Grid>
          <Grid container spacing={2}>
            <Grid container spacing={2}>
              {edgedSlots.map((time, key) => {
                return (
                  <Grid
                    item
                    xs={6}
                    onClick={() => {
                      setTimeValue(time.time);
                      handleOuterTimeStamps(key);
                    }}
                  >
                    <Stack
                      borderRadius={1}
                      className={timeValue === time.time ? "styledTime" : ""}
                      bgcolor={"#F2F4F7"}
                      border={"1px solid #D0D5DD"}
                      paddingX={2}
                      paddingY={2}
                    >
                      <Stack direction={"row"} alignItems={"center"}>
                        <img src={time.img} alt="" />
                        <Typography variant="body2">{time.label}</Typography>
                      </Stack>
                      <Typography variant="caption" color={"#98A2B3"}>
                        {time.value}
                      </Typography>
                    </Stack>
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
        </Stack>
      </Stack>
    </AppointmentCard>
  );
};

export default DateTimePicker;
