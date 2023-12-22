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
import { Button, Grid } from "@mui/material";

export default function Availablecard({ data }) {
  return (
    <Card>
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={data.campName}
        sx={{height: '100px', display: 'flex', alignItems:'baseline'}}
      />
      <img src={data.image} className="w-full h-44" alt="" />
      <CardContent>
        <Typography variant="h6">Services: {data.vanue}</Typography>
        <Typography>Location: {data.vanueLocation}</Typography>
        <Typography>Date: {data.date}</Typography>
        <Grid sx={{display: 'flex', justifyContent:"space-between"}}>
          <Typography>Participent Type: {data.audianceType}</Typography>
          <Typography>Fee: {data.fees}tk</Typography>
        </Grid>
        <Typography sx={{height: '40px', py:'5px', textOverflow: 'ellipsis', overflow:'hidden'}} variant="body2" color="text.secondary">
          {data.comprehensiveDescription}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        
        <NavLink to={`/campdetails/${data._id}`}>
          <Button>View Details</Button>
        </NavLink>
      </CardActions>
    </Card>
  );
}
Availablecard.propTypes = {
  data: PropTypes.object,
};
