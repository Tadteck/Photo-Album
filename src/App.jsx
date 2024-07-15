import {
  AppBar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  CssBaseline,
  Grid,
  Toolbar,
  Typography,
} from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";
import tadteck from "./components/Images/tadteck.jpg";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function App() {
  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar display={"flex"} justifyContent={"space-between"}>
          <PhotoCamera />
          <Typography variant="h6">PhotoAlbum</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div
          style={{
            backgroundColor: "white",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Container maxWidth="sm" sx={{ mb: "2rem" }}>
            <Typography variant="h2" align="center" color="purple" gutterBottom>
              Photo Album
            </Typography>
            <Typography variant="h4" align="center" color="black">
              welcome to PhotoSales
              <Typography align="center" variant="h5">
                where buying and selling is welly organized and appreciated!
              </Typography>
            </Typography>
          </Container>
        </div>
        <div style={{ marginTop: "2rem" }}>
          <Grid
            container
            justifyContent="center"
            spacing={2}
            sx={{ gap: "1rem" }}
            marginBottom={4}
          >
            <Grid items>
              <Button
                variant="contained"
                color="primary"
                sx={{ borderRadius: "1rem" }}
              >
                see my photos
              </Button>
            </Grid>
            <Grid items>
              <Button
                variant="outlined"
                color="secondary"
                sx={{ borderRadius: "1rem" }}
              >
                see my photos
              </Button>
            </Grid>
          </Grid>
        </div>
        <Container maxWidth="md" sx={{ mb: "3rem" }}>
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    maxHeight: "100%",
                  }}
                >
                  <CardMedia>
                    <img
                      src={tadteck}
                      alt="tadteck"
                      style={{ height: "100%", width: "100%" }}
                    />
                  </CardMedia>
                  <CardContent display="flex" align="center">
                    <Typography sx={{fontSize:"25px"}} gutterBottom>product name</Typography>
                    <Typography sx={{ display: "flex", fontSize: "15px" }}>
                      This is a product card which describes the product on that menu
                      market card.
                    </Typography>
                  </CardContent>
                  <CardActions sx={{ flexGrow: 1 }}>
                    <Button size="small" color="primary" borderRadius="1rem">
                      View
                    </Button>
                    <Button size="small" color="primary" borderRadius="1rem">
                      Edit
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <footer style={{ backgroundColor: "grey", padding: "50px 0" }}>
        <Typography variant="h6" align="center" gutterBottom>
          @
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary">
          copyrights by TadteckInc(Ltd)
        </Typography>
      </footer>
    </>
  );
}

export default App;
