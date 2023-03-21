import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Appbar, Button, TextInput } from 'react-native-paper';


export default function App() {
  const [numberOne, setNumberOne] = React.useState('');
  const [numberTwo, setNumberTwo] = React.useState('');
  const [result, setResult] = React.useState('');

  const onChangeNumberOne = numberOne => setNumberOne(numberOne);
  const onChangeNumberTwo = numberTwo => setNumberTwo(numberTwo);

  function sum() {
    const sumResult = parseInt(numberOne) + parseInt(numberTwo);
    setResult(sumResult);
  }

  function addNumberOne() {
    const sumResult = isNaN(parseInt(numberOne)) ? 1 : parseInt(numberOne) + 1;
    setNumberOne(sumResult.toString());
  }

  function addNumberTwo() {
    const sumResult = isNaN(parseInt(numberTwo)) ? 1 : parseInt(numberTwo) + 1;
    setNumberTwo(sumResult.toString());
  }

  return (
    <SafeAreaView style={styles.container}>
      <Appbar mode='center-aligned' elevated='true' style={styles.title}>
        <Appbar.Content style={styles.text_title} title="Cálculo" />
        <Appbar.Action icon="calculator" />
      </Appbar>
      <View style={styles.view}>
        <TextInput
          keyboardType='numeric'
          style={styles.inputs}
          placeholder='Valor 1'
          value={numberOne}
          onChangeText={onChangeNumberOne}
          right={<TextInput.Icon icon="plus" onPress={() => addNumberOne()}/>}
        />
        <TextInput
          keyboardType='numeric'
          style={styles.inputs}
          placeholder='Valor 2'
          value={numberTwo}
          onChangeText={onChangeNumberTwo}
          right={<TextInput.Icon icon="plus" onPress={() => addNumberTwo()} />}
        />
        <Button style={styles.button} mode="elevated" onPress={() => sum()}>Somar</Button>
        <Text style={styles.text_result} variant="bodyLarge"> Resultado: {result} </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
  },
  inputs: {
    width: '100%',
  },
  title: {
    marginTop: '5%',
    borderRadius: 3,
  },
  text_title: {
    fontSize: 32,
    color: '#2F4F4F',
  },
  text_result: {
    fontSize: 24,
    color: '#2F4F4F'
  },
  view: {
    flex: 1,
    gap: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    marginBottom: 10,
    width: '40%',
    borderRadius: 2,
  },
});
