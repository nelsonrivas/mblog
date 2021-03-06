import React, { useState } from "react";
import {
  Button,
  ListItemIcon,
  ListItemText,
  Popover,
  MenuItem,
  Typography,
} from "@material-ui/core";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { useTheme } from "@material-ui/styles";
import * as Actions from "app/store/actions";
import { Link } from "react-router-dom";

const languages = [
  {
    id: "en",
    title: "English",
    flag: "us",
  },
  {
    id: "es",
    title: "Español",
    flag: "sa",
  }
];

function LanguageSwitcher(props) {
  const dispatch = useDispatch();

  const theme = useTheme();
  const { i18n } = useTranslation();
  const [menu, setMenu] = useState(null);

  const currentLng = languages.find((lng) => lng.id === i18n.language);

  const userMenuClick = (event) => {
    setMenu(event.currentTarget);
  };

  const userMenuClose = () => {
    setMenu(null);
  };

  function handleLanguageChange(lng) {
    const newLangDir = i18n.dir(lng.id);

    /*
        Change Language
         */
    i18n.changeLanguage(lng.id);

    /*
        If necessary, change theme direction
         */
    if (newLangDir !== theme.direction) {
      dispatch(Actions.setDefaultSettings({ direction: newLangDir }));
    }

    userMenuClose();
  }

  return (
    <React.Fragment>
      <Button className="h-64 w-64" onClick={userMenuClick}>
        <img
          className="mx-4 min-w-20"
          src={`assets/images/flags/${currentLng.flag}.png`}
          alt={currentLng.title}
        />

        <Typography className="mx-4 font-600">{currentLng.id}</Typography>
      </Button>

      <Popover
        open={Boolean(menu)}
        anchorEl={menu}
        onClose={userMenuClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        classes={{
          paper: "py-8",
        }}
      >
        {languages.map((lng) => (
          <MenuItem key={lng.id} onClick={() => handleLanguageChange(lng)}>
            <ListItemIcon className="min-w-40">
              <img
                className="min-w-20"
                src={`assets/images/flags/${lng.flag}.png`}
                alt={lng.title}
              />
            </ListItemIcon>
            <ListItemText primary={lng.title} />
          </MenuItem>
        ))}
      </Popover>
    </React.Fragment>
  );
}

export default LanguageSwitcher;
