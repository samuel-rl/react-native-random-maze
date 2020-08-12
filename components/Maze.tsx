import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

const LINE_WIDTH = 1;

const RATIO = height / width;
const ITEMS_PER_ROW = 20;
const SIZE = width / ITEMS_PER_ROW;
const ROWS = Math.round((RATIO * height) / SIZE);
const TOTAL_ITEMS = ITEMS_PER_ROW * ROWS;

const POSITIONS = ['LEFT', 'RIGHT'];

const getRandomPosition = (arr = POSITIONS) => {
	return arr[Math.floor(Math.random() * arr.length)];
};

export interface GridProps {
	items: { key: number; position: string }[];
}

const Grid = ({ items }: GridProps) => {
	return (
		<View style={styles.container}>
			{items.map((item, key) => {
                

				return (
					<View key={key} style={[styles.gridItem, item.position == 'LEFT'
                    ? { transform: [{ rotate: '-45deg' }] }
                    : { transform: [{ rotate: '45deg' }] },]}>
						<View style={styles.gridItemDiagonal} />
					</View>
				);
			})}
		</View>
	);
};

const Maze = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
		setItems(constructGrid());
	}, []);

    const constructGrid = () => {
		let res: { key: number; position: string }[] = [];
		for (var i = 0; i < TOTAL_ITEMS; ++i) {
			res.push({ key: i, position: getRandomPosition() });
		}
		return res;
    };
    
	return (
		<View>
			<Grid items={items} />
		</View>
	);
};

const styles = StyleSheet.create({
	gridItem: {
		width: SIZE,
		height: SIZE,
		alignItems: 'center',
		justifyContent: 'center',
	},
	gridItemDiagonal: {
		width: LINE_WIDTH,
		height: Math.sqrt(2) * SIZE,
		backgroundColor: 'black',
	},
	container: {
		flexDirection: 'row',
		flexWrap: 'wrap',
	},
});

export default Maze;
