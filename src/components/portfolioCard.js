import React, { useState } from "react";
import {
  Button,
  ButtonGroup,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  createTheme,
  Grid,
  Link,
  ThemeProvider,
  Typography,
} from "@material-ui/core";

export default function PortfolioCard() {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
    background: {
      default: "#121212",
      paper: "#1c1c1c",
    },
    primary: {
      main: "#BB86FC",
      color: "#ffffff",
    },
    secondary: {
      main: "#3700B3",
    },
    info: {
      main: "#191919",
    },
  });

  const sites = [
    {
      url: "https://www.droomsocial.com",
      image:
        "https://res.cloudinary.com/droomsocial/image/upload/v1643188789/serve.php_usw21z.png",
      desc: "Free Dream Journal app, with a social aspect to it, also free data to learn more about your dreams",
      program: "NextJS, Material UI, MongoDB",
      when: "01/01/2022 to Now",
      finished: "Alpha Version",
    },
    {
      url: "https://www.nightsmurf.com",
      image:
        "https://res.cloudinary.com/droomsocial/image/upload/v1643188790/nightsmurf_obkpkx.png",
      desc: "Webshop, selling smurf accounts for League Of Legends and choose your skin with a home made API",
      program: "React, ExpressJS, Redux, MongoDB",
      when: "12/08/2021 to 24/10/2021",
      finished: "Finished",
    },
    {
      url: "https://www.floraldreams.nl",
      image:
        "https://res.cloudinary.com/droomsocial/image/upload/v1643188790/floral_hzaily.png",
      desc: "Wordpress Website for a friend of my family.",
      program: "WordPress",
      when: "17/05/2018 to 03/06/2018",
      finished: "Finished",
    },
    {
      url: "https://www.proyect.nl",
      image:
        "https://res.cloudinary.com/droomsocial/image/upload/v1643188790/proyect-nl-1024x768desktop-7644d5_bxsk9x.png",
      desc: "Internship project, made with html, css and had to import it in a old CMS platform",
      program: "HTML, CSS, JavaScript",
      when: "23/10/2017 to 22/01/2018",
      finished: "Finished",
    },
    {
      url: "https://www.pixelplanets.io",
      image:
        "https://res.cloudinary.com/droomsocial/image/upload/v1643188789/pixelplanets-io-1024x768desktop-dd1ab5_znxrem.png",
      desc: "Fun little joke project, NFT project",
      program: "React",
      when: "23/09/2021 to 26/09/2021",
      finished: "Finished",
    },
    {
      url: "https://weather-app-jelle-toonen.herokuapp.com/",
      image:
        "https://res.cloudinary.com/droomsocial/image/upload/v1643189394/weather-app-jelle-toonen-herokuapp-com-1024x768desktop-7577d3_vpui94.png",
      desc: "PHP School Assignment, Weather app with Weather API",
      program: "PHP, JavaScript, Postgres",
      when: "15/11/2021 to 28/11/2021",
      finished: "Finished",
    },
  ];
  const apps = [
    {
      url: "https://github.com/Nightfly-student/DreamHub",
      image:
        "https://res.cloudinary.com/droomsocial/image/upload/v1643195986/Untitled_design_7_f9ssxj.jpg",
      desc: "Basic Dream Journal app, with a social aspect to it, first mobile project",
      program: "Xamarin, Firebase",
      when: "13/03/2022 to 28/04/2022",
      finished: "Dropped",
    },
  ];
  const games = [
    {
      url: "https://www.dropbox.com/s/h0zzd07rsz3zzkt/Endlessrunner.zip?dl=0",
      image:
        "https://res.cloudinary.com/droomsocial/image/upload/v1643196188/Untitled_design_8_hgzmlg.jpg",
      desc: "Endless Runner, Unity project, its an old project without any github, only a download link",
      program: "Unity, C#",
      when: "~2018",
      finished: "Finished",
    },
    {
      url: "https://www.dropbox.com/s/8xm6ibhwca1x9rv/com.nightfly.gangsters.apk?dl=0",
      image:
        "https://res.cloudinary.com/droomsocial/image/upload/v1643196338/Untitled_design_9_y7eegs.jpg",
      desc: "Basic Mobile Platformer, Made with Unity Assests",
      program: "Unity, C# & Java",
      when: "~2017",
      finished: "Finished",
    },
    {
      url: "undefined",
      image:
        "https://res.cloudinary.com/droomsocial/image/upload/v1643196798/Untitled_design_10_fdds9l.jpg",
      desc: "Agar.io rocketlike mobile game, file is lost",
      program: "Unity, C#",
      when: "~2019-2020",
      finished: "Finished",
    },
  ];
  const trash = [
      {
        url: "undefined",
        image:
          "https://res.cloudinary.com/droomsocial/image/upload/v1643197560/Untitled_design_12_wzhpqm.jpg",
        desc: "Coaching For League Of Legends, Github is private due to connected databases.",
        program: "React, ExpressJS, MongoDB, Redux",
        when: "~2021",
        finished: "Dropped",
      },
      {
        url: "https://github.com/Nightfly-student/NightDesk-Project",
        image:
          "https://res.cloudinary.com/droomsocial/image/upload/v1643197561/Untitled_design_11_xt6b1m.jpg",
        desc: "Desk to operate own League of Legends sites",
        program: "Electron, React",
        when: "~2021",
        finished: "Dropped",
      },
  ]
  const [selectedBtn, setSelectedBtn] = React.useState(1);
  return (
    <div style={{ padding: 20 }}>
      <Grid spacing={2} container justifyContent="center">
        <Grid item md={12} sm={12} xs={12}>
          <ButtonGroup
            style={{}}
            variant="outlined"
            aria-label="text button group"
          >
            <Button
              color={selectedBtn === 1 ? "inherit" : "primary"}
              onClick={() => setSelectedBtn(1)}
              style={{ fontSize: 15, border: "white" }}
            >
              Websites
            </Button>
            <Button
              color={selectedBtn === 2 ? "inherit" : "primary"}
              onClick={() => setSelectedBtn(2)}
              style={{ fontSize: 15, border: "white" }}
            >
              Apps
            </Button>
            <Button
              color={selectedBtn === 3 ? "inherit" : "primary"}
              onClick={() => setSelectedBtn(3)}
              style={{ fontSize: 15, border: "white" }}
            >
              Games
            </Button>
            <Button
              color={selectedBtn === 4 ? "inherit" : "primary"}
              onClick={() => setSelectedBtn(4)}
              style={{ fontSize: 15, border: "white" }}
            >
              Unfinished
            </Button>
          </ButtonGroup>
        </Grid>
        {selectedBtn === 1 &&
          sites.map((site) => (
            <Grid item md={4} lg={4} sm={12} xs={12}>
              <Card style={{ background: "#1c1c1c", height: "100%" }}>
                <CardMedia component="img" image={site.image}></CardMedia>
                <CardContent style={{ color: "white" }}>
                  {site.desc}
                  <Typography
                    style={{ color: "white", paddingTop: 20 }}
                    component="h5"
                    variant="h5"
                  >
                    Made: {site.when}
                  </Typography>
                  <Typography
                    style={{ color: "white" }}
                    component="h5"
                    variant="h5"
                  >
                    {site.finished}
                  </Typography>
                </CardContent>
                <CardActions style={{ bottom: "0" }}>
                  <Link
                    target="_blank"
                    style={{ color: "rgb(88, 202, 240)" }}
                    href={site.url}
                  >
                    Go To Site
                  </Link>
                  <Typography
                    style={{
                      display: "block",
                      marginLeft: "auto",
                      color: "white",
                      fontSize: "14px",
                    }}
                  >
                    {site.program}
                  </Typography>
                </CardActions>
              </Card>
            </Grid>
          ))}
        {selectedBtn === 2 &&
          apps.map((site) => (
            <Grid item md={4} lg={4} sm={12} xs={12}>
              <Card style={{ background: "#1c1c1c", height: "100%" }}>
                <CardMedia component="img" image={site.image}></CardMedia>
                <CardContent style={{ color: "white" }}>
                  {site.desc}
                  <Typography
                    style={{ color: "white", paddingTop: 20 }}
                    component="h5"
                    variant="h5"
                  >
                    Made: {site.when}
                  </Typography>
                  <Typography
                    style={{ color: "white" }}
                    component="h5"
                    variant="h5"
                  >
                    {site.finished}
                  </Typography>
                </CardContent>
                <CardActions style={{ bottom: "0" }}>
                  <Link
                    target="_blank"
                    style={{ color: "rgb(88, 202, 240)" }}
                    href={site.url}
                  >
                    Go To Github
                  </Link>
                  <Typography
                    style={{
                      display: "block",
                      marginLeft: "auto",
                      color: "white",
                      fontSize: "14px",
                    }}
                  >
                    {site.program}
                  </Typography>
                </CardActions>
              </Card>
            </Grid>
          ))}
        {selectedBtn === 3 &&
          games.map((site) => (
            <Grid item md={4} lg={4} sm={12} xs={12}>
              <Card style={{ background: "#1c1c1c", height: "100%" }}>
                <CardMedia component="img" image={site.image}></CardMedia>
                <CardContent style={{ color: "white" }}>
                  {site.desc}
                  <Typography
                    style={{ color: "white", paddingTop: 20 }}
                    component="h5"
                    variant="h5"
                  >
                    Made: {site.when}
                  </Typography>
                  <Typography
                    style={{ color: "white" }}
                    component="h5"
                    variant="h5"
                  >
                    {site.finished}
                  </Typography>
                </CardContent>
                <CardActions style={{ bottom: "0" }}>
                  {site.url !== "undefined" && (
                    <Link
                      target="_blank"
                      style={{ color: "rgb(88, 202, 240)" }}
                      href={site.url}
                    >
                      Go To Dropbox
                    </Link>
                  )}
                  <Typography
                    style={{
                      display: "block",
                      marginLeft: "auto",
                      color: "white",
                      fontSize: "14px",
                    }}
                  >
                    {site.program}
                  </Typography>
                </CardActions>
              </Card>
            </Grid>
          ))}
          {selectedBtn === 4 &&
          trash.map((site) => (
            <Grid item md={4} lg={4} sm={12} xs={12}>
              <Card style={{ background: "#1c1c1c", height: "100%" }}>
                <CardMedia component="img" image={site.image}></CardMedia>
                <CardContent style={{ color: "white" }}>
                  {site.desc}
                  <Typography
                    style={{ color: "white", paddingTop: 20 }}
                    component="h5"
                    variant="h5"
                  >
                    Made: {site.when}
                  </Typography>
                  <Typography
                    style={{ color: "white" }}
                    component="h5"
                    variant="h5"
                  >
                    {site.finished}
                  </Typography>
                </CardContent>
                <CardActions style={{ bottom: "0" }}>
                  {site.url !== "undefined" && (
                    <Link
                      target="_blank"
                      style={{ color: "rgb(88, 202, 240)" }}
                      href={site.url}
                    >
                      Go To Github
                    </Link>
                  )}
                  <Typography
                    style={{
                      display: "block",
                      marginLeft: "auto",
                      color: "white",
                      fontSize: "14px",
                    }}
                  >
                    {site.program}
                  </Typography>
                </CardActions>
              </Card>
            </Grid>
          ))}
      </Grid>
    </div>
  );
}
