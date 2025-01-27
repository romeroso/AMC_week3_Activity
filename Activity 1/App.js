import React from 'react';
import {StyleSheet, TextInput} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const TextInputExample = () => {
  const [text, onChangeText] = React.useState('Name:');
  const[number, onChangNumber] = React.useState('');
  
  return(
    <SafeAreaProvider>
      <SafeAreaView>
        <TextInput
        style={style.input}
        onChangeText={onChangeText}
        value={text}
        />

        <TextInput
          style={style.input}
          onChangeText={onChangNumber}
          Value={number}
          placeholder="Age:"
          keyboardType="numeric"
          />

           <TextInput
          style={style.input}
          onChangeText={onChangNumber}
          Value={number}
          placeholder="Address:"
          keyboardType="numeric"
          />
          
           <TextInput
          style={style.input}
          onChangeText={onChangNumber}
          Value={number}
          placeholder="School:"
          keyboardType="numeric"
          />
           <TextInput
          style={style.input}
          onChangeText={onChangNumber}
          Value={number}
          placeholder="Course:"
          keyboardType="numeric"
          />
           <TextInput
          style={style.input}
          onChangeText={onChangNumber}
          Value={number}
          placeholder="email:"
          keyboardType="numeric"
          />
           <TextInput
          style={style.input}
          onChangeText={onChangNumber}
          Value={number}
          placeholder="Contact:"
          keyboardType="numeric"
          />
        </SafeAreaView>
      </SafeAreaProvider>
  );
};

const style = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default TextInputExample;


