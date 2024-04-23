// Import necessary components from react-native and react-native-paper
import * as React from 'react';
import { Card, TextInput, Button } from 'react-native-paper';
import { View, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import { useAuth } from '../context/AuthContext';

const SignupPage = () => {
 
  const { signUp } = useAuth();
  const [email, setEmail] = React.useState('');
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  // Add the logic to handle sign up here
  const handleSignUpPress = async () => {
    try {
      await signUp({ email, username, password }); // Call the sign up function from the AuthContext provider
      console.log('Sign up successful!');
    } catch (error) {
      // If there's an error, handle it here. For example, show an error message to the user
      console.error(error);
    }
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <Card style={styles.card}>
        <Card.Title title="Sign Up!" />
        <Card.Content>
          <TextInput
            label="Email"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            keyboardType="email-address"
            style={styles.input}
          />
          <TextInput
            label="Username"
            value={username}
            onChangeText={setUsername}
            autoCapitalize="none"
            style={styles.input}
          />
          <TextInput
            label="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            style={styles.input}
          />
          <Button mode="contained" onPress={handleSignUpPress} style={styles.button}>
            Sign Up
          </Button>
        </Card.Content>
      </Card>
    </KeyboardAvoidingView>
  );
};

// Styles using react-native-paper theming
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    width: '90%',
    maxWidth: 400,
    borderRadius: 8, // Rounded borders
  },
  input: {
    marginVertical: 6,
  },
  button: {
    marginTop: 12,
  },
});

export default SignupPage;




