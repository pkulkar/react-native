import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
    const friends = [
        { name: 'Friend 1'},
        { name: 'Friend 2'},
        { name: 'Friend 3'},
        { name: 'Friend 4'},
        { name: 'Friend 5'},
        { name: 'Friend 6'},
    ]
    return (
        <FlatList data={friends}
        renderItem={({item}) => {
            //element === {item: { name: 'Friend 1'}, index:0 }
            //item === { name: 'Friend 1'}
            return <Text>{item.name}</Text>
        }}></FlatList>
    )
}

const styles = StyleSheet.create({})

export default ListScreen;