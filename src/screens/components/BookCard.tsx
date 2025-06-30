import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {BookItem} from "../../models/Book.ts";
import {BookDetails} from "../../utils/ScreenRouteNames.tsx";
import {bookCardStyle as styles } from "../styles/BookCardStyle.ts";

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

export default BookCard;
