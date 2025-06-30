import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {BookItem} from "../models/Book.ts";
import {BookDetails} from "../utils/ScreenRouteNames.tsx";

interface BookCardProps {
    book: BookItem;
}

const BookCard: React.FC<BookCardProps> = React.memo(({ book }) => {
    const navigation = useNavigation();

    const handleRead = () => {
        // @ts-ignore
        navigation.navigate( BookDetails , { book: book });
    };

    return (
        <View style={styles.card}>
            <View style={styles.topSection}>
                <Image source={{ uri: book.volumeInfo.imageLinks?.smallThumbnail }} style={styles.image} />
                <View style={styles.textContainer}>
                    <Text style={styles.title}>{book.volumeInfo.title}</Text>
                    <Text style={styles.author}>
                        by {book.volumeInfo.authors?.join(', ') || 'Unknown Author'}
                    </Text>
                    <Text numberOfLines={2} ellipsizeMode="tail" style={[styles.description, { flexShrink: 1 }]}>
                        {book.volumeInfo.description}
                    </Text>
                </View>
            </View>
            <TouchableOpacity style={styles.button} onPress={handleRead}>
                <Text style={styles.buttonText}>Read</Text>
            </TouchableOpacity>
        </View>
    );
});

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 12,
        marginVertical: 10,
        marginHorizontal: 16,
        padding: 12,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        height: 200, // add this if all cards are the same height
        overflow: 'hidden',
    },
    topSection: {
        flexDirection: 'row',
        marginBottom: 12,
    },
    image: {
        width: 80,
        height: 120,
        borderRadius: 8,
        marginRight: 12,
        backgroundColor: '#eee',
    },
    textContainer: {
        flex: 1,
        justifyContent: 'space-between',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 4,
    },
    author: {
        fontStyle: 'italic',
        fontSize: 14,
        marginBottom: 6,
        color: '#555',
    },
    description: {
        fontSize: 13,
        color: '#333',
    },
    button: {
        backgroundColor: '#007bff',
        paddingVertical: 8,
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        marginTop: 4,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});

export default BookCard;
