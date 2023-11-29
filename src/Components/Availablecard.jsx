// import * as React from "react";
// import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import PropTypes from "prop-types";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";

import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";

export default function Availablecard({ data }) {
  return (
    <Card>
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={data.name}
        subheader={data.date}
      />
      <img src={data.img} className="w-full h-44" alt="" />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {data.comprehensiveDescription}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <NavLink to="/details">
          <Button>View Details</Button>
        </NavLink>
      </CardActions>
    </Card>
  );
}
Availablecard.propTypes = {
  data: PropTypes.object,
};
