import React from 'react';
import {
    View,
    Text,
    Image,
    ScrollView,
    TouchableOpacity,
    Linking,
} from 'react-native';
import { useRoute, RouteProp } from '@react-navigation/native';
import {BookItem} from "../../models/Book.ts";
import {bookDetailsStyles} from "../styles/BookDetailsStyle.ts";



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
            style={bookDetailsStyles.container}
            contentContainerStyle={bookDetailsStyles.scrollContent}
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
                style={bookDetailsStyles.coverImage}
                resizeMode="contain"
            />

            {/* Card */}
            <View style={bookDetailsStyles.card}>
                {/* Title & Author */}
                <Text style={bookDetailsStyles.title}>{book.volumeInfo.title}</Text>
                <Text style={bookDetailsStyles.author}>by {book.volumeInfo.authors?.join(', ') || 'Unknown Author'}</Text>

                {/* Description */}
                {book.volumeInfo.description && (
                    <Text style={bookDetailsStyles.sectionHeader}>📝 Description</Text>
                )}
                <Text style={bookDetailsStyles.description}>
                    {book.volumeInfo.description || 'No description available.'}
                </Text>

                {/* Meta Info */}
                <Text style={bookDetailsStyles.sectionHeader}>📚 Book Details</Text>
                <View style={bookDetailsStyles.metaItem}><Text>🏢 Publisher: {book.volumeInfo.publisher || 'N/A'}</Text></View>
                <View style={bookDetailsStyles.metaItem}><Text>📅 Published: {book.volumeInfo.publishedDate || 'N/A'}</Text></View>
                <View style={bookDetailsStyles.metaItem}><Text>📖 Pages: {book.volumeInfo.pageCount || 'N/A'}</Text></View>
                <View style={bookDetailsStyles.metaItem}><Text>📘 Categories: {book.volumeInfo.categories?.join(', ') || 'N/A'}</Text></View>
                <View style={bookDetailsStyles.metaItem}><Text>🌐 Language: {book.volumeInfo.language.toUpperCase()}</Text></View>

                {/* Price Section */}
                {book.saleInfo?.retailPrice && (
                    <>
                        <Text style={bookDetailsStyles.sectionHeader}>💰 Pricing</Text>
                        <Text style={bookDetailsStyles.priceText}>
                            {book.saleInfo.retailPrice.amount} {book.saleInfo.retailPrice.currencyCode}
                        </Text>
                    </>
                )}

                {/* Buttons */}
                <View style={bookDetailsStyles.buttonContainer}>
                    {book.accessInfo?.webReaderLink && (
                        <TouchableOpacity style={bookDetailsStyles.button} onPress={openPreview}>
                            <Text style={bookDetailsStyles.buttonText}>📖 Preview Book</Text>
                        </TouchableOpacity>
                    )}
                    {book.saleInfo?.buyLink && (
                        <TouchableOpacity style={[bookDetailsStyles.button, { backgroundColor: '#28a745' }]} onPress={openBuyLink}>
                            <Text style={bookDetailsStyles.buttonText}>🛒 Buy Now</Text>
                        </TouchableOpacity>
                    )}
                </View>
            </View>
        </ScrollView>
    );
};

export default BookDetailsScreen;
