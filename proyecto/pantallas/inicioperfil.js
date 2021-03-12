import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert, Image,AppRegistry } from 'react-native';

const Separator = () => (
  <View style={styles.separator} />
);

const inicioperfil = () => (
  <SafeAreaView style={styles.container}>
    <View>
        <Image
          style={styles.stretch}
          source={require('./assets/dama.png')}
        />
        <Separator />
      <Text style={styles.title}>
        Erick Israel Viracocha Vega
      </Text>
      <Separator />
      <Button
        title="Nivel"
        onPress={() => Alert.alert('Simple Button pressed')}
      />
      <Separator />
      <Button
        title="Progreso"
        color="#f194ff"
        onPress={() => Alert.alert('Button with adjusted color pressed')}
      />
      <Separator />
      <View style={styles.fixToText}>
      <Button
          title="Exit"
          onPress={() => Alert.alert('Left button pressed')}
        />
        </View>
    </View>
    <Separator />
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 16,
    backgroundColor: "purple",
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  stretch: {
    width: 200,
    height: 300,
    resizeMode: 'stretch'
  },
});

export default inicioperfil;