import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Link,
  Typography,
} from "@mui/material";
import React from "react";

const AccountCard = ({ image, text, title, handler }) => {
  return (
    <>
      <Card
        sx={{
          maxWidth: 300,
          minWidth: 200,
          marginRight: 2,
          marginTop: 2,
          borderRadius: "10px",
          boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
        }}
      >
        <CardHeader
          avatar={<img src={image} alt="" width={20} />}
          title={title}
          titleTypographyProps={{ variant: "body1" }}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {text}
          </Typography>
        </CardContent>
        <CardActions sx={{ padding: "16px" }}>
          <Typography
            component={Link}
            variant={"caption"}
            color="#F83D4B"
            underline="none"
            sx={{ cursor: "pointer" }}
            onClick={() => handler()}
          >{`Select Slot>>`}</Typography>
        </CardActions>
      </Card>
    </>
  );
};

export default AccountCard;
