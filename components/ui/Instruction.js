import { Text, StyleSheet } from 'react-native';

const Instruction = ({ children }) => {
  return <Text style={styles.guideText}>{children}</Text>;
};

export default Instruction;
const styles = StyleSheet.create({
  guideText: {
    color: '#ddb52f',
    fontSize: 25,
  },
});
