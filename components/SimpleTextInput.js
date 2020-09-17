import React from 'react';
import { View, Text, TextInput, StyleSheet } from "react-native";

class SimpleTextInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = { text: '', isSubmitted: false };
    }
    handleChangeText = (text) => {
        this.setState({ text, isSubmitted: false });
    }
    handleSubmitText = () => {
        this.setState({ isSubmitted: true });
    }
    render() {
        const { text, isSubmitted } = this.state;
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    placeholder={'Type here...'}
                    onChangeText={this.handleChangeText}
                    onSubmitEditing={this.handleSubmitText}/>
                <Text style={styles.text}>{isSubmitted?`User has typed: ${text}`:'User is typing'}</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        alignSelf: 'stretch',
        margin: 10,
        padding: 10,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: '#eaf7fd'
    },
    text: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#015169'
    },
    input: {
        height: 40
    }
});

export default SimpleTextInput;