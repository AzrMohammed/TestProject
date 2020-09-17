import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    ActivityIndicator,
    TouchableHighlight,
    TextInput
    } from "react-native";

import * as Actions from '../actions/Actions'
import { connect } from 'react-redux'

class LoginScreen extends Component {

    constructor(prop){
        super(prop);
        
        this.state = {
            username: "",
            password: ""
          }
    }

    render() {
        return (
            <View style={styles.container}>
                {this.props.isLoading ?
                    <ActivityIndicator />
                    :
                    <View style={styles.childContainer}>
                        {/* secureTextEntry={true} */}
                        <TextInput onChangeText={(username) => this.setState({ username })} style={styles.input} placeholder="Username"></TextInput>
                        <TextInput onChangeText={(password) => this.setState({ password })} style={styles.input} placeholder="Password"></TextInput>
                         { this.props.errorMessage ?
                        <Text style={{ fontSize: 12, color:'red', textAlign: 'center' }}>{this.props.errorMessage}</Text>
                        : <View></View>}

                        <TouchableHighlight
                            style={styles.submit}
                            onPress={() => this.props.handleSubmit(this.state.username, this.state.password)}
                            underlayColor='#fff'>
                                <Text style={styles.submitText}>Login</Text>
                            </TouchableHighlight>

                    </View>
                }
            </View>
        );
    }

}

function mapStateToProps(state) {
    return {
        username: state.username,
        password: state.password,
        loginSuccess: state.loginSuccess,
        isLoading: state.isLoading,
        errorMessage: state.errorMessage,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        handleSubmit: (username, password) => dispatch(Actions.handleSubmit(username, password)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);



const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    childContainer:{
        width:'100%',
        padding:20
    },
    submit:{
        marginTop:10,
        width:'100%',
        paddingTop:15,
        paddingBottom:15,
        backgroundColor:'#68a0cf',
        borderRadius:10,
        borderWidth: 1,
        borderColor: '#fff'
      },
      submitText:{
          color:'#fff',
          textAlign:'center',
      },
      input: {
        marginVertical: 15,
        height: 40,
        paddingLeft:5,
        borderRadius:5,
        borderColor: '#cdcdcd',
        borderWidth: 1
     },
});