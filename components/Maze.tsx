import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Dimensions} from 'react-native';


const { height, width } = Dimensions.get('window');

const LINE_WIDTH = 1;

const RATIO = height / width;
const ITEMS_PER_ROW = 20;
const SIZE = width / ITEMS_PER_ROW;
const ROWS = Math.round((RATIO * height) / SIZE);
const TOTAL_ITEMS = ITEMS_PER_ROW * ROWS;

const Maze = () => {

  return (
    <View>
    </View>
  );
};

const styles = StyleSheet.create({
    
});

export default Maze;