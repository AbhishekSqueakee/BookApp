import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BookListScreen from "../screens/dashboard/BookListScreen.tsx";
import BookDetailScreen from "../screens/dashboard/BookDetailScreen.tsx";
import {BookDetails, BookList} from "../utils/ScreenRouteNames.tsx";

const Stack = createNativeStackNavigator();

const AppNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name={ BookList } component={BookListScreen} />
        <Stack.Screen name={ BookDetails } component={BookDetailScreen} />
    </Stack.Navigator>
);

export default AppNavigator;
