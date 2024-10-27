import {
  Button,
  createTheme,
  IconButton,
  TextField,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { Stack } from "@mui/system";
import React, { useState } from "react";
import Reffer from "../../../assets/images/refferer.svg";
import {
  RedLinearButton,
  RedSolidButton,
} from "../../reuseable/button/Buttons";
import ReuseableModal from "../ReuseableModal";
import Phone from "../../../assets/images/phone.svg";
import Mail from "../../../assets/images/mail.svg";
import "../../../utils/css/styles.css";
import { useNavigate } from "react-router";
import copy from "copy-to-clipboard";
import Copy from "../../../assets/images/copy.svg";
import RefferFriendCarousel from "../carousel/RefferFriendCarousel";
import { useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import AuthCarousel from "../carousel/AuthCarousel";
import RefferModal from "../RefferModal";

const RefferCard = () => {
  const { user } = useSelector((state) => state.auth);

  const nav = useNavigate();
  const handleNav = () => {};

  const { palette } = createTheme();
  const { augmentColor } = palette;
  const createColor = (mainColor) =>
    augmentColor({ color: { main: mainColor } });
  const theme = createTheme({
    palette: {
      anger: createColor("#F83D4B"),
    },
  });

  const [state, setState] = useState(false);
  const handleOpen = () => setState(true);
  const handleClose = () => setState(false);

  const [reference, setReference] = useState({
    refByPhone: false,
    refByMail: false,
  });

  const handleCloseByPhone = () =>
    setReference((prevState) => ({
      ...prevState,
      refByPhone: false,
    }));

  const handleCopyText = (text) => {
    copy(text);
    toast.success("Referral Code Copied Successfully");
  };
  const referralMessage = `Hey! I wanted to refer you to Integrity 1st Automotive at (address) they are my trusted shop
  for everything from oil changes to repairs. By booking an appointment with my referral
  link, you get $25.00 at the end of your first service app.integrity1auto.com/reff/${user?.referralCode}`;
  const refferalCode = () => {
    return (
      <Stack
        direction={"row"}
        width={"100%"}
        color={"#D13753"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Typography
          color={"#D13753"}
          variant={"body2"}
        >{`MY REFERRAL CODE: ${user?.referralCode}`}</Typography>
        <IconButton
          aria-label="copy_text"
          onClick={() => handleCopyText(referralMessage)}
        >
          <img src={Copy} alt="" />
        </IconButton>
      </Stack>
    );
  };

  return (
    <Stack
      justifyContent={"center"}
      alignItems={"center"}
      width={{ lg: "39%", md: "auto" }}
      sx={{
        backgroundColor: "#F2F2F2",
        border: "1px solid #E4E7EC",
        borderRadius: "10px",
        padding: "1em 2em",
      }}
    >
      <img src={Reffer} alt="" />
      <Typography variant="h6" color={"#344054"}>
        Reffer a Friend
      </Typography>
      {refferalCode()}
      <Typography textAlign={"center"} variant="subtitle2">
        ARK Commercial Services’ buy Executive Team unique maintenance to
        product normal book.
      </Typography>
      <Button
        variant="contained"
        type="submit"
        size="large"
        sx={{
          borderRadius: "54.6591px",
          bgcolor: "#F83D4B",
          fontSize: "small",
          p: 2,
          width: "100%",
        }}
        onClick={() => handleOpen()}
      >
        Get Reward of $25
      </Button>

      <RefferModal
        handleClose={handleClose}
        open={state}
        referralMessage={referralMessage}
      />
    </Stack>
  );
};

export default RefferCard;
