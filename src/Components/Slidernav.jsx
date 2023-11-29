// import { AccountCircle } from '@mui/icons-material';
import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import PropTypes from "prop-types"

import { NavLink } from 'react-router-dom';

const Slidernav = ({link,icon, name}) => {
    return (
        <ListItem disablePadding sx={{ display: "block", color:'white' }}>
            <NavLink to={link}>
            <ListItemButton>
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                  display: "flex",
                  flexDirection: "column",
                  color:'white'
                }}
              >
                {icon}
              </ListItemIcon>

              <ListItemText
                primary={name}
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
            </NavLink>
          </ListItem>
    );
};

Slidernav.propTypes ={
    link: PropTypes.string,
    name: PropTypes.string,
    icon: PropTypes.element
}

export default Slidernav;