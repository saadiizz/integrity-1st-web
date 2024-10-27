import { Divider, Link, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React, { useState } from "react";
import RewardMeter from "../../../assets/images/reward-meter.svg";
import ReuseableModal from "../ReuseableModal";
import Howtoearnfire from "../../../assets/images/howtoearnfire.svg";
import Howtoearn from "../../../assets/images/howtoearn.svg";
import Radeem from "../../../assets/images/radeem.svg";
import { RedLinearButton } from "../button/Buttons";
import RewardGuage from "../rewardGuage/RewardGuage";
import { useSelector } from "react-redux";

const RewardCard = () => {
  const { user } = useSelector((state) => state.auth);

  const [open, setOpen] = useState({
    hte: false,
    htr: false,
  });
  const handlehteOpen = () =>
    setOpen((prevState) => ({
      ...prevState,
      hte: true,
      // htr: false
    }));
  const handlehteClose = () =>
    setOpen((prevState) => ({
      ...prevState,
      hte: false,
      // htr: false
    }));

  //how to raeemd modal setup
  const handlehtrOpen = () =>
    setOpen((prevState) => ({
      ...prevState,
      // hte: false,
      htr: true,
    }));
  const handlehtrClose = () =>
    setOpen((prevState) => ({
      ...prevState,
      // hte: false,
      htr: false,
    }));

  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      justifyContent={"space-around"}
      sx={{
        border: "1px solid #E4E7EC",
        borderRadius: "10px",
        padding: "1em",
        backgroundColor: "#FFFFFF",
      }}
      width={{ lg: "59%", md: "auto" }}
    >
      <RewardGuage value={user?.rewardAmount} />
      <Divider sx={{ border: "1px solid #D0D5DD", height: "80%" }} />
      <Stack width={"48%"}>
        <Stack>
          <Typography variant="subtitle1">How to Earn?</Typography>
          <Typography color={"#667085"} variant="subtitle2">
            ARK Commercial Services’ buy Executive Team unique background in
            chemical stop appleformulations
          </Typography>
          <Typography
            component={Link}
            variant="subtitle2"
            underline="none"
            sx={{ cursor: "pointer" }}
            onClick={() => handlehteOpen()}
          >{`Learn More>>`}</Typography>
        </Stack>
        <ReuseableModal
          handleClose={handlehteClose}
          open={open.hte}
          width={"40%"}
        >
          <Stack
            sx={{
              backgroundImage: `url(${Howtoearnfire})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <img alt="" src={Howtoearn} width={100} />
          </Stack>
          <Typography
            color={"#667085"}
            variant={"subtitle2"}
            textAlign={"center"}
          >
            ARK Commercial Services’ buy Executive Team unique background in
            chemical stop appleformulations, facilities maintenance to product
            normal book.
          </Typography>
          <RedLinearButton
            handleClose={handlehteClose}
            text="Got it, Thanks"
            width={"80%"}
          />
        </ReuseableModal>
        <Stack>
          <Typography variant="subtitle1">How to Redeem?</Typography>
          <Typography color={"#667085"} variant="subtitle2">
            ARK Commercial Services’ buy Executive Team unique background in
            chemical stop appleformulations
          </Typography>
          <Typography
            component={Link}
            variant="subtitle2"
            underline="none"
            sx={{ cursor: "pointer" }}
            onClick={() => handlehtrOpen()}
          >{`Learn More>>`}</Typography>
        </Stack>
        <ReuseableModal
          handleClose={handlehtrClose}
          open={open.htr}
          width={"40%"}
        >
          <img alt="" src={Radeem} width={100} />
          <Typography
            color={"#667085"}
            variant={"subtitle2"}
            textAlign={"center"}
          >
            ARK Commercial Services’ buy Executive Team unique background in
            chemical stop appleformulations, facilities maintenance to product
            normal book.
          </Typography>
          <RedLinearButton
            handleClose={handlehtrClose}
            text="Reward your Points Now"
            width={"80%"}
          />
        </ReuseableModal>
      </Stack>
    </Stack>
  );
};

export default RewardCard;
