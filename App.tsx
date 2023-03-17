import {StyleSheet, ScrollView,FlatList, View} from 'react-native';
import HomeScreen from './src/screen/HomeScreen/HomeScreen';

const App = () => {
  return (
    <View style={styles.app}>
      <HomeScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  app: {
    flex: 1,
  },
});

export default App;
