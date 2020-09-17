import React, {Component} from 'react';


import {
    View,
    Text,
    FlatList,
    StyleSheet,
    Image,
} from "react-native";

import * as Actions from '../actions/Actions'
import { connect } from 'react-redux'


var email_ic = require('../../assets/email.png');
var phone_ic = require('../../assets/phone.png');

class HomeScreen extends Component {

    constructor(prop){
        super(prop);
        this.state = {
            userList:[],
          }

          this.props.getUserList()

    }

    _keyExtractor = (item, index) => item.id +"";

    _renderItem = ({ item, index }) => {
        return  (
            <View style={{paddingHorizontal:20, paddingVertical:10}}>
            <View style={card_styles.card}>
            <Text style={card_styles.title} >{item.name}</Text>
            <Text style={card_styles.subtext} >{item.age}  |  {item.gender}</Text>

            <View style={{ width: '100%', flexDirection: 'row', marginTop:10 }}>
            <Image style={card_styles.item_ic} source={phone_ic} />
            <Text style={card_styles.info} >{item.phoneNo}</Text>
            <Image style={{...card_styles.item_ic, marginLeft:20}} source={email_ic} />
            <Text style={card_styles.info} >{item.email}</Text>            
            </View>
            </View>
        </View>
        )
    }

    render() {
        return (
            <View style={styles.container} >
            <Text style={styles.screentitle}>Dashboard</Text>

            <FlatList
                style={{padding:0}}
                data={this.props.userList}
                renderItem={this._renderItem}
                keyExtractor={this._keyExtractor}
            />

            </View>
        );
      }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    screentitle:{ 
        fontSize: 24, 
        textAlign: 'center', 
        fontWeight:'bold', 
        marginVertical:20,
     }
});

const card_styles = StyleSheet.create({
    
    card:{
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,  
        elevation: 5,
        width:'100%',
        borderRadius:3,
        padding:20,
        backgroundColor:'#fff',

    },
    title:{ 
        textTransform: 'capitalize', 
        fontSize: 20, 
        textAlign: 'left',

    },
    subtext:{
        textTransform: 'capitalize', 
        fontSize: 13, 
        marginTop:5, 
        textAlign: 'left'
    },
    info:{ 
        marginLeft:10, 
        textTransform: 'capitalize',
        fontSize: 14, 
        textAlign: 'left' 
    },
    item_ic:
    {
        width: 13,
        height: 13,
        borderRadius:0,
        marginLeft: 0,
        marginRight: 0,
        alignSelf: 'center'
    },
})

function mapStateToProps(state) {
    return {
        userList:state.userList,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getUserList: () => dispatch(Actions.getUserList()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
