import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
export default function Popularcard({ data }) {
  const {
    img,
    name,
    comprehensiveDescription,
    date,
    fees,
    specializedServicesProvided,
    division
  } = data;
  return (
    <div>
      <Card
        sx={{
          display: "flex",
          boxShadow: "-2px -2px 8px",
          flexDirection: "column",
          justifyContent: "space-between",
          height: {md:"450px"},
        }}
      >
        <CardContent>
          <img src={img} className="w-full h-52" alt="" />
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {comprehensiveDescription}
          </Typography>
          <Typography
            fontWeight={"700"}
            sx={{ py: "10px" }}
            variant="body2"
            color="text.secondary"
          >
            {specializedServicesProvided}
          </Typography>
          <Typography
            fontWeight={"700"}
            sx={{ py: "10px" }}
            variant="body3"
            color="text.secondary"
          >
            {division}
          </Typography>
        </CardContent>
        <CardActions>
          <Button sx={{fontWeight:"700"}} color="error" size="small">
            Date:{date}
          </Button>
          <Button sx={{fontWeight:"700"}} color="success" size="small">
            fees:{fees}Tk
          </Button>
          <Button sx={{fontWeight:"700"}} size="small">Learn More</Button>
        </CardActions>
      </Card>
    </div>
  );
}
