import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
    const friends = [
        { name: 'Friend 1', age: 43},
        { name: 'Friend 2', age: 51},
        { name: 'Friend 3', age: 31},
        { name: 'Friend 4', age: 21},
        { name: 'Friend 5', age: 50},
        { name: 'Friend 6', age: 10},
        { name: 'Friend 7', age: 30},
        { name: 'Friend 8', age: 24},
        { name: 'Friend 9', age: 29},
        { name: 'Friend 10', age: 27},
        { name: 'Friend 11', age: 22},
        { name: 'Friend 12', age: 21},
        { name: 'Friend 13', age: 22},
        { name: 'Friend 14', age: 23},
        { name: 'Friend 15', age: 27},
        { name: 'Friend 16', age: 26},
        { name: 'Friend 17', age: 23},
        { name: 'Friend 18', age: 22},
    ]
    return (
        /**
         * Refer react native docs for FlatList: https://reactnative.dev/docs/flatlist#required-renderitem
         * to understand each properties mentioned
         */
        <FlatList
        showsVerticalScrollIndicator={false}
        keyExtractor={(friend) => friend.name} 
        data={friends}
        renderItem={({item}) => {
            return <Text style={styles.textStyle}>{item.name} - {item.age}</Text>
        }}></FlatList>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 10
    }
})

export default ListScreen;