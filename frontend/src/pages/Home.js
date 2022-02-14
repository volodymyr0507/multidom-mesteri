import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import makeStyles from '@material-ui/styles/makeStyles';

import Overview from "../components/profile/Overview";

import {getProfileList} from '../actions/profile';

const useStyles = makeStyles({

    sidebar: {
        width: '372px',
        height: '100%',
        top: 0,
        left: 0,
        background: '#ffffff00',
        border: '1px solid #DADCE0'
    },

    content: {
        display: 'flex',
        textAlign: 'center',
    }
})

const Home = props => {

    const classes = useStyles()

    const [profileListState, setProfileListState] = useState([])

    const [filterInputState, setFilterInputState] = useState({
        searchInput : '',
        locationInput: '',
        entityInput: ''
    })

    useEffect(() => {
        props.getProfileList(filterInputState)
    }, [])

    useEffect(() => {
        props.getProfileList(filterInputState)
    }, [props.auth])

    useEffect(() => {
        setProfileListState(props.profile_list)
    }, [props.profile_list])



    return(
            <Grid className={classes.content} justifyContent="center" container>
                {profileListState.length > 0 && profileListState.map((data, index) => (
                    <Grid item key={index}><Overview data={data}/></Grid>
                ))}

            </Grid>
        
    )
}

Home.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    profile_list: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    auth: state.auth,
    profile_list: state.profile.profile_list,
    loading: state.profile.loading,
})

export default connect(mapStateToProps, {getProfileList})(Home);