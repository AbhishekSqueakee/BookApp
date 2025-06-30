import React, { useEffect } from 'react';
import {View, FlatList, Text} from 'react-native';
import {fetchBooks} from "../../redux/async_task/BookAsyncTask.ts";
import {useAppDispatch, useAppSelector} from "../../hooks/hooks.ts";
import BookCard from "../components/BookCard.tsx";

const BookListScreen = () => {
    const CARD_HEIGHT = 200;
    const dispatch = useAppDispatch();
    const { bookObject, error } = useAppSelector((state) => state.book);
    useEffect(() => {
        dispatch(fetchBooks())
    }, [dispatch]);

    return (
        <View>
            {/*{loading && <ActivityIndicator />}*/}
            {error && <Text style={{ color: 'red' }}>{error}</Text>}
            <FlatList
                data={bookObject?.items || []}
                renderItem={({ item }) => <BookCard book={item} />}
                keyExtractor={(item) => item.id.toString()}
                getItemLayout={(data, index) => ({
                    length: CARD_HEIGHT,
                    offset: CARD_HEIGHT * index,
                    index,
                })}
                contentContainerStyle={{ paddingBottom: 20 }}
                initialNumToRender={5}
                maxToRenderPerBatch={5}
                windowSize={10}
                removeClippedSubviews={true}
                updateCellsBatchingPeriod={50}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
};

export default BookListScreen;
