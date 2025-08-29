import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 2,
    backgroundColor: "#f5f5f5",
  },
  touchable: {
    marginVertical: 5,
  },
  cards: {
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 8,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  topHeading: {
    fontSize: 16,
    fontWeight: "bold"
  },
  date: {
    fontSize: 14,
    color: "gray"
  },
  cardImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 10
  }
});
