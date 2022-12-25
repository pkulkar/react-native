import React from "react";
import { StyleSheet, Text, View } from 'react-native';


const ComponentsScreen = () => {
    const greeting = 'Hi There!';
    return( 
        <View>
            <Text style={styles.textStyle}> This is the Component Screen</Text>
            <Text>{greeting}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 50
    }
});

export default ComponentsScreen;
