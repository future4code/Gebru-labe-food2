import * as React from "react";
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import { StyledBox, StyledToolbar, StyledTitle } from "./HeaderStyle";
import { goToSearch } from "../../routes/Coordinator";

export default function Header({ title, goBack }) {
  const navigate = useNavigate();

  return (
    <StyledBox>
      <AppBar
        sx={{
          borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
          boxShadow: "none",
        }}
        position="static"
        color="bar"
      >
        {!goBack ? (
          <StyledToolbar>
            <div>
              <IconButton
                onClick={() => navigate(-1)}
                size="large"
                edge="start"
                aria-label="voltar"
                sx={{ mr: 2 }}
              >
                <ArrowBackRoundedIcon />
              </IconButton>
            </div>

            {title}
          </StyledToolbar>
        ) : (
          <StyledTitle>{title}</StyledTitle>
        )}
      </AppBar>
    </StyledBox>
  );
}