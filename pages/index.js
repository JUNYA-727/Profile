/** @format */

import Image from "next/image";
import styles from "../styles/Home.module.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import WebAssetIcon from "@mui/icons-material/WebAsset";
import { IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";
import Switch from "@mui/material/Switch";

import { useState } from "react";
export default function Home() {
  /*      <Image
        src={"https://junya-727.github.io/blog/_A6A5059.jpg"}
        width={100}
        height={100}
        alt=""
      ></Image>*/
  const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    width: 62,
    height: 34,
    padding: 7,
    "& .MuiSwitch-switchBase": {
      margin: 1,
      padding: 0,
      transform: "translateX(6px)",
      "&.Mui-checked": {
        color: "#fff",
        transform: "translateX(22px)",
        "& .MuiSwitch-thumb:before": {
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
            "#fff"
          )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
        },
        "& + .MuiSwitch-track": {
          opacity: 1,
          backgroundColor:
            theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
        },
      },
    },
    "& .MuiSwitch-thumb": {
      backgroundColor: theme.palette.mode === "dark" ? "#003892" : "#001e3c",
      width: 32,
      height: 32,
      "&:before": {
        content: "''",
        position: "absolute",
        width: "100%",
        height: "100%",
        left: 0,
        top: 0,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          "#fff"
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
    },
    "& .MuiSwitch-track": {
      opacity: 1,
      backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
      borderRadius: 20 / 2,
    },
  }));
  const [checked, setChecked] = useState(false);

  return (
    <div
      style={{
        height: "100svh",
        width: "100svw",
        alignItems: "center",
        display: "flex",
        backgroundColor: `${checked ? "#fff" : "#222222"}`,
      }}
    >
      <div
        style={{
          color: "white",
          textAlign: "center",
          width: "100%",
        }}
      >
        <div style={{ top: "3%", right: "3%", position: "absolute" }}>
          <MaterialUISwitch
            checked={checked}
            onChange={() => setChecked(!checked)}
          ></MaterialUISwitch>
        </div>
        <h3
          className="fadeup-name"
          style={{ color: `${checked ? "#000" : "#fff"}` }}
        >
          JUNYA KURAMOCHI
        </h3>
        <div className="fadeup-logo">
          <IconButton
            variant="outlined"
            href="https://www.instagram.com/junyq_/"
          >
            <InstagramIcon
              fontSize="large"
              style={{ color: "eb34d5" }}
            ></InstagramIcon>
          </IconButton>
          <IconButton variant="outlined" href="https://github.com/JUNYA-727">
            <GitHubIcon
              fontSize="large"
              style={{ color: `${checked ? "black" : "white"}` }}
            ></GitHubIcon>
          </IconButton>

          <IconButton variant="outlined" href="https://twitter.com/JUNY4_">
            <TwitterIcon
              fontSize="large"
              style={{ color: "0099FF" }}
            ></TwitterIcon>
          </IconButton>

          <IconButton variant="outlined" href="/career">
            <WebAssetIcon
              fontSize="large"
              style={{ color: "#33FF00" }}
            ></WebAssetIcon>
          </IconButton>
        </div>
      </div>
    </div>
  );
}
