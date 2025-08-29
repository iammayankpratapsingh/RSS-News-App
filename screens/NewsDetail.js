import { ScrollView, Text, Image, StyleSheet, SafeAreaView } from 'react-native';

export default function NewsDetail({ route }) {
    if (!route.params?.item) {
        return (
            <SafeAreaView style={styles.container}>
                <Text style={styles.errorText}>News article not found</Text>
            </SafeAreaView>
        );
    }
    const { item } = route.params;
    const getImageUrl = (description) => {
        const imgMatch = description.match(/<img[^>]+src="([^">]+)"/);
        return imgMatch ? imgMatch[1] : null;
    };

    const imageUrl = getImageUrl(item.description);
    const cleanDescription = item.description.replace(/<[^>]*>/g, '');

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Text style={styles.title}>{item.title || 'No title available'}</Text>
                <Text style={styles.date}>{item.pubDate || ''}</Text>
                
                {imageUrl && (
                    <Image 
                        source={{ uri: imageUrl }} 
                        style={styles.image}
                        resizeMode="cover"
                    />
                )}
                
                <Text style={styles.description}>{cleanDescription || 'No content available'}</Text>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 15
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10
    },
    date: {
        fontSize: 14,
        color: 'gray',
        marginBottom: 15
    },
    image: {
        width: '100%',
        height: 200,
        marginVertical: 15,
        borderRadius: 8
    },
    description: {
        fontSize: 16,
        lineHeight: 24,
        color: '#333'
    },
    errorText: {
        fontSize: 16,
        color: 'red',
        textAlign: 'center',
        marginTop: 20
    }
});
