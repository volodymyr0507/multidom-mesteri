import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import IconButton from '@material-ui/core/IconButton';
import MoreIcon from '@mui/icons-material/MoreVert';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MuiLink from '@material-ui/core/Link';

import makeStyles from '@material-ui/styles/makeStyles';


const useStyles = makeStyles((theme) => ({
    appBar: {
        border: '0 0 1px 0',
        borderColor: '#DADCE0'
    },
    toolbar: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    buttons: {
        [theme.breakpoints.down('sm')] : {
            display: 'none'
        }
    },

    registerButton: {
        width: '140px',
        height: '42px',
        background: '#2B2322 0% 0% no-repeat padding-box',
        boxShadow: '0px 2px 2px #00000029',
        border: '2px solid #2B2322',
        borderRadius: '4px',
        textAlign: 'center',
        font: 'normal normal bold 16px/25px Nunito',
        letterSpacing: '0.32px',
        color: '#FFFFFF',
        opacity: 1,

        marginLeft: '12px',

        '&:hover':{
            background: '#FFFFFF 0% 0% no-repeat padding-box',
            color: '#2B2322',
        }
    },

    loginButton: {
        width: '150px',
        height: '42px',
        background: '#FFFFFF',
        borderRadius: '2px',
        border: 'none',
        opacity: 1,

        textAlign: 'center',
        font: 'normal normal bold 16px/25px Nunito',
        letterSpacing: '0.32px',
        color: '#606466',

        '&:hover':{
            color: '#2B2322'
        }
    },

    menuIcon: {
        [theme.breakpoints.up('md')] : {
            display: 'none'
        }
    },

    menuItem: {
        display: 'flex',
        flexDirection: 'column',
        width: 110,
        backgroundColor: '#FFFFF'
       
    }
}))


export default function ButtonAppBar() {

    const classes = useStyles();

    const [openState, setOpenState] = useState(null);

    const handleOpen = event => {
        setOpenState(event.currentTarget);
    }

    const handleClose = () => {
        setOpenState(null);
    }

    return (
        <AppBar color="transparent" position="sticky">
            <Toolbar className={classes.toolbar}>
            <svg xmlns="http://www.w3.org/2000/svg" width="261.261" height="46.986" viewBox="0 0 261.261 46.986">
            <g id="logo_multidom" transform="translate(-420.461 -258.523)">
                <path id="logotip" d="M609.609,284.954v22.091a.637.637,0,0,1-.618.654h-3.544a.638.638,0,0,1-.62-.654v-14.61l-6.373,7.359a.959.959,0,0,1-.784.4h-2.409a.967.967,0,0,1-.785-.372l-6.338-7.355v14.574a.637.637,0,0,1-.619.654h-3.407a.663.663,0,0,1-.653-.654V284.954a.663.663,0,0,1,.653-.654h2.821a.916.916,0,0,1,.673.292l8.894,10.453,8.814-10.408A.887.887,0,0,1,606,284.3h2.993A.637.637,0,0,1,609.609,284.954Zm25.771-.654h-3.372a.606.606,0,0,0-.653.654v13.214c0,4.532-1.164,5.574-6.229,5.574-5.12,0-6.3-1.042-6.3-5.574V284.954a.607.607,0,0,0-.655-.654h-3.544a.607.607,0,0,0-.655.654V298.1c0,7.86,2.366,10.013,11.011,10.013,8.672,0,11.046-2.153,11.046-10.013V284.954A.606.606,0,0,0,635.38,284.3Zm23.894,19.029h-14.04V284.954a.606.606,0,0,0-.653-.654h-3.545a.606.606,0,0,0-.653.654v22.091a.607.607,0,0,0,.653.654h18.239a.606.606,0,0,0,.653-.654v-3.062A.606.606,0,0,0,659.274,303.329ZM678.067,284.3H657.592a.607.607,0,0,0-.655.654v3.063a.607.607,0,0,0,.655.654h7.81v18.375a.608.608,0,0,0,.655.654H669.6a.607.607,0,0,0,.654-.654V288.67h7.811a.606.606,0,0,0,.654-.654v-3.063A.606.606,0,0,0,678.067,284.3Zm7.416,0h-3.544a.606.606,0,0,0-.653.654v22.091a.607.607,0,0,0,.653.654h3.544a.606.606,0,0,0,.653-.654V284.954A.606.606,0,0,0,685.483,284.3ZM713.867,296c0,8.747-3.108,11.7-12.32,11.7H691.361a.606.606,0,0,1-.653-.654V284.954a.606.606,0,0,1,.653-.654h10.186C710.758,284.3,713.867,287.252,713.867,296Zm-12.629-7.4H695.56v14.8h5.678c6.123,0,7.708-1.521,7.708-7.4S707.361,288.6,701.238,288.6Zm40.5,7.4c0,8.943-3.3,12.112-12.595,12.112S716.55,304.942,716.55,296s3.3-12.112,12.594-12.112S741.739,287.057,741.739,296Zm-4.921,0c0-6.059-1.721-7.811-7.674-7.811s-7.673,1.752-7.673,7.811,1.721,7.811,7.673,7.811S736.818,302.059,736.818,296Zm34.147-11.7h-2.993a.887.887,0,0,0-.683.336l-8.815,10.408-8.893-10.453a.915.915,0,0,0-.673-.292h-2.822a.663.663,0,0,0-.653.654v22.091a.663.663,0,0,0,.653.654h3.407a.637.637,0,0,0,.618-.654V292.47l6.338,7.355a.967.967,0,0,0,.785.372h2.41a.957.957,0,0,0,.784-.4l6.374-7.359v14.61a.637.637,0,0,0,.618.654h3.544a.638.638,0,0,0,.62-.654V284.954A.638.638,0,0,0,770.965,284.3Z" transform="translate(-89.862 -13.984)" fill="#2b2322"/>
                <path id="Path_169" data-name="Path 169" d="M467.447,258.523H420.461l23.493,23.493Z" transform="translate(0 0)" fill="#bbbcbc"/>
                <path id="Path_170" data-name="Path 170" d="M496.312,258.523l-23.493,23.493,23.493,23.492V258.523" transform="translate(-28.865)" fill="#888b8d"/>
                <path id="Path_171" data-name="Path 171" d="M420.463,258.523v46.986l23.492-23.492-23.492-23.493" transform="translate(-0.001)" fill="#8c8279"/>
                <path id="Path_172" data-name="Path 172" d="M443.954,310.882h0l-23.492,23.492h46.985l-23.493-23.492" transform="translate(-0.001 -28.866)" fill="#2b2322"/>
            </g>
            </svg>
                
            
            
            <div className={classes.buttons}>
                <button className={classes.loginButton}>Login</button>
                <button className={classes.registerButton}>Register</button>
                
            </div>
            <div className={classes.menuIcon}>

            <IconButton onClick={handleOpen}>
                <MoreIcon />
            </IconButton>

            <Menu
                anchorEl={openState}
                open={Boolean(openState)}
                onClose={handleClose}
                PaperProps={{
                    style: {
                      left: '50%',
                      transform: 'translateX(-30%) translateY(75%)',
                    }
                  }}
                  MenuListProps={{
                    style: {
                      padding: 0,
                    },
                  }}
                >
                <MenuItem className={classes.menuItem}>
                   
                    <MuiLink component={Link} to='/login' color="inherit" onClick={handleClose}>
                        Login
                    </MuiLink>

                    <MuiLink component={Link} to='/login' color="inherit" onClick={handleClose}>
                        Register
                    </MuiLink>
                </MenuItem>
            </Menu>
                
            </div>
            </Toolbar>
        </AppBar>
        
    );
}