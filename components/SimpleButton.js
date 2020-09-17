import React from 'react';
import { View, Alert, Button, StyleSheet } from "react-native";

const SimpleButton = (props) => {
    return ( <Button style={styles.button} onPress={() => Alert.alert("You pressed button")} title="Click Me"/> );
};

const styles = StyleSheet.create({
    button: {
        padding: 5,
        color: '#000'
    }
});


export default SimpleButton;
