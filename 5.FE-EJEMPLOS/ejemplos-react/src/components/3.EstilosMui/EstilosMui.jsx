import { Button, Card, CardContent, Box, Typography } from "@mui/material";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
const estilos = {
  display: "inline-block",
  m: 2,
  transform: "scale(0.5)",
};

const bull = (
  <Box component="span" sx={estilos}>
    *
  </Box>
);

const card = (
  <Card>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        <AccessibilityNewIcon color="primary" sx={{ fontSize: 30 }} /> Word of
        the Day
      </Typography>
      <Typography variant="h6" component="div">
        be {bull} nev {bull} o {bull} lent
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        adjective
      </Typography>
      <Typography variant="body2">
        well meaning and kindly.
        <br />
        {'"a benevolent smile"'}
      </Typography>
    </CardContent>
  </Card>
);

function EstilosMui() {
  return (
    <>
      <Box sx={{ minWidth: 200 }}>
        <Card variant="outlined">{card}</Card>
      </Box>
      <Button variant="contained">Contained</Button>
    </>
  );
}

export default EstilosMui;
