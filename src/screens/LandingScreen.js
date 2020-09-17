import React, {Component} from 'react';

import LoginScreen from './LoginScreen'
import HomeScreen from './HomeScreen'

import * as Actions from '../actions/Actions'
import { connect } from 'react-redux'
import { View } from "react-native";


class LandingScreen extends Component {

    constructor(prop){
        super(prop);        
        this.state = {
            loginSuccess: false
          }
    }


    render() {
        return (
            <View style={{ width: '100%', height: '100%' }}  >
            {this.props.loginSuccess ? <HomeScreen /> : <LoginScreen /> }
            </View>
            
        );
      }

}


function mapStateToProps(state) {
    return {
        loginSuccess: state.loginSuccess,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getUserList: () => dispatch(Actions.getUserList()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LandingScreen);
