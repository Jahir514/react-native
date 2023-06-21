import { View, StyleSheet } from 'react-native';

const Card = ({ children }) => {
  return <View style={styles.card}>{children}</View>;
};

export default Card;
const styles = StyleSheet.create({
  card: {
    backgroundColor: '#3b021f',
    marginTop: 35,
    marginHorizontal: 24,
    padding: 16,
    borderRadius: 8,
    elevation: 4, //like boxShadow in css; its only for android
    shadowColor: 'black', //same as elevation ; all shadow property is for iOS
    shadowOffset: { width: 0, height: 2 }, //width for left-right and hight for top-bottom
    shadowRadius: 6,
    shadowOpacity: 0.25,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
