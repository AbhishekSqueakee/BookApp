import {Dimensions, StyleSheet} from "react-native";

const { width } = Dimensions.get('window');

export const bookDetailsStyles = StyleSheet.create({
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