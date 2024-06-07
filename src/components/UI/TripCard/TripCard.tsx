import { ITrip } from "@/types/trip";
import { capitalizeFirstLetter } from "@/utils/CapitalizeFirstLetter";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import SendIcon from "@mui/icons-material/Send";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import dayjs from "dayjs";

const TripCard = ({ trip }: { trip: ITrip }) => {
  const { destination, thumbnail, type, budget, startDate, endDate } = trip;
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={thumbnail}
          alt={destination}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {destination}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Type: {capitalizeFirstLetter(type)}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Date: {dayjs(startDate).format("DD-MM-YYYY")} to{" "}
            {dayjs(endDate).format("DD-MM-YYYY")}
          </Typography>
          <Typography
            sx={{
              textAlign: "center",
              color: "primary.main",
              fontWeight: 600,
              mt: "8px",
            }}
          >
            BDT {budget}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Stack direction="column" width="100%" spacing={1}>
          <Button
            size="small"
            color="primary"
            fullWidth
            variant="outlined"
            startIcon={<RemoveRedEyeIcon />}
          >
            View Details
          </Button>
          <Button size="small" color="primary" fullWidth endIcon={<SendIcon />}>
            Request Trip
          </Button>
        </Stack>
      </CardActions>
    </Card>
  );
};

export default TripCard;
