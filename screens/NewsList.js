import { useEffect, useState } from "react";
import { View, FlatList, ActivityIndicator } from "react-native";
import { fetchRSSFeed } from '../utils/api';
import NewsCard from '../components/NewsCard';
import styles from '../styles/styles';

export default function NewsList({ navigation }) {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRSS();
  }, []);

  const fetchRSS = async () => {
    try {
      const items = await fetchRSSFeed();
      setNews(items);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching RSS:", error);
      setLoading(false);
    }
  };

  if (loading) {
    return <ActivityIndicator size="large" color="blue" style={{ flex: 1, justifyContent: "center" }} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={news}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <NewsCard 
              item={item} 
              onPress={() => {
                  if (item) {
                      navigation.navigate('NewsDetail', { item });
                  }
              }} 
          />
        )}
      />
    </View>
  );
}
