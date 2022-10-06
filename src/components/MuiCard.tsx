import {
  Box,
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";

export const MuiCard = () => {
  return (
    <Box width="300px" bgcolor="primary">
      <Card>
        <CardMedia
        component='img'
        height='180'
        image='https://source.unsplash.com/random'
        alt="alt unsplash"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            React
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
            inventore consectetur? Quos architecto commodi expedita distinctio!
            Aspernatur ad at est odio culpa possimus cumque, inventore
            accusantium, illo non iste esse.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn more</Button>
        </CardActions>
      </Card>
    </Box>
  );
};
