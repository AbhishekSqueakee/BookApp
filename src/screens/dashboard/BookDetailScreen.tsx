import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    Linking,
    Dimensions,
} from 'react-native';
import { useRoute, RouteProp } from '@react-navigation/native';
import {BookItem} from "../../models/Book.ts";

const { width } = Dimensions.get('window');

const BookDetailsScreen = () => {
    const route = useRoute<RouteProp<any>>();
    // @ts-ignore
    const { book }: { book: BookItem } = route.params;

    const openBuyLink = () => {
        if (book.saleInfo?.buyLink) Linking.openURL(book.saleInfo.buyLink);
    };

    const openPreview = () => {
        if (book.accessInfo?.webReaderLink) Linking.openURL(book.accessInfo.webReaderLink);
    };

    return (
        <ScrollView
            style={styles.container}
            contentContainerStyle={styles.scrollContent}
            showsVerticalScrollIndicator={false}
            overScrollMode="never"
            bounces={true}
            scrollEventThrottle={16}
            decelerationRate="normal"
        >
            {/* Image */}
            <Image
                source={{
                    uri: book.volumeInfo.imageLinks?.thumbnail || 'https://via.placeholder.com/150',
                }}
                style={styles.coverImage}
                resizeMode="contain"
            />

            {/* Card */}
            <View style={styles.card}>
                {/* Title & Author */}
                <Text style={styles.title}>{book.volumeInfo.title}</Text>
                <Text style={styles.author}>by {book.volumeInfo.authors?.join(', ') || 'Unknown Author'}</Text>

                {/* Description */}
                {book.volumeInfo.description && (
                    <Text style={styles.sectionHeader}>📝 Description</Text>
                )}
                <Text style={styles.description}>
                    {book.volumeInfo.description || 'No description available.'}
                </Text>

                {/* Meta Info */}
                <Text style={styles.sectionHeader}>📚 Book Details</Text>
                <View style={styles.metaItem}><Text>🏢 Publisher: {book.volumeInfo.publisher || 'N/A'}</Text></View>
                <View style={styles.metaItem}><Text>📅 Published: {book.volumeInfo.publishedDate || 'N/A'}</Text></View>
                <View style={styles.metaItem}><Text>📖 Pages: {book.volumeInfo.pageCount || 'N/A'}</Text></View>
                <View style={styles.metaItem}><Text>📘 Categories: {book.volumeInfo.categories?.join(', ') || 'N/A'}</Text></View>
                <View style={styles.metaItem}><Text>🌐 Language: {book.volumeInfo.language.toUpperCase()}</Text></View>

                {/* Price Section */}
                {book.saleInfo?.retailPrice && (
                    <>
                        <Text style={styles.sectionHeader}>💰 Pricing</Text>
                        <Text style={styles.priceText}>
                            {book.saleInfo.retailPrice.amount} {book.saleInfo.retailPrice.currencyCode}
                        </Text>
                    </>
                )}

                {/* Buttons */}
                <View style={styles.buttonContainer}>
                    {book.accessInfo?.webReaderLink && (
                        <TouchableOpacity style={styles.button} onPress={openPreview}>
                            <Text style={styles.buttonText}>📖 Preview Book</Text>
                        </TouchableOpacity>
                    )}
                    {book.saleInfo?.buyLink && (
                        <TouchableOpacity style={[styles.button, { backgroundColor: '#28a745' }]} onPress={openBuyLink}>
                            <Text style={styles.buttonText}>🛒 Buy Now</Text>
                        </TouchableOpacity>
                    )}
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2',
    },
    scrollContent: {
        paddingBottom: 30,
        backgroundColor: '#f2f2f2',
    },
    coverImage: {
        width: width,
        height: width * 1.2,
        backgroundColor: '#fff',
    },
    card: {
        backgroundColor: '#fff',
        margin: 16,
        padding: 16,
        borderRadius: 16,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 4,
    },
    author: {
        fontSize: 16,
        fontStyle: 'italic',
        color: '#666',
        marginBottom: 12,
    },
    sectionHeader: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 16,
        marginBottom: 6,
        color: '#333',
    },
    description: {
        fontSize: 14,
        color: '#444',
        textAlign: 'justify',
    },
    metaItem: {
        marginVertical: 2,
    },
    priceText: {
        fontSize: 16,
        color: '#000',
        fontWeight: '600',
        marginBottom: 8,
    },
    buttonContainer: {
        marginTop: 20,
    },
    button: {
        backgroundColor: '#007bff',
        paddingVertical: 12,
        borderRadius: 8,
        marginVertical: 6,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 15,
    },
});

export default BookDetailsScreen;
