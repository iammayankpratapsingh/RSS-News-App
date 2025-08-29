import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from '../styles/styles';

export default function NewsCard({ item, onPress }) {
  const getImageUrl = (description) => {
    const imgMatch = description.match(/<img[^>]+src="([^">]+)"/);
    return imgMatch ? imgMatch[1] : null;
  };

  const imageUrl = getImageUrl(item.description);

  return (
    <TouchableOpacity 
      onPress={onPress}
      activeOpacity={0.7}
      style={styles.touchable}
    >
      <View style={styles.cards}>
        {imageUrl && (
          <Image 
            source={{ uri: imageUrl }} 
            style={styles.cardImage}
            resizeMode="cover"
          />
        )}
        <Text style={styles.topHeading}>{item.title}</Text>
        <Text style={styles.date}>{item.pubDate}</Text>
        <Text numberOfLines={3} style={{ marginTop: 5 }}>{item.description.replace(/<[^>]*>/g, '')}</Text>
      </View>
    </TouchableOpacity>
  );
}