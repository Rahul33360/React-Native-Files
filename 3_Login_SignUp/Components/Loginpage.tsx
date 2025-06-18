import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from 'react-native';

import {
  GoogleSignin,
  GoogleSigninButton,
  User,
} from '@react-native-google-signin/google-signin';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  Login: undefined;
  SignUp: undefined;
};

type LoginScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Login'
>;

type Props = {
  navigation: LoginScreenNavigationProp;
};

const LoginPage: React.FC<Props> = ({ navigation }) => {
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [userInfo, setUserInfo] = useState<User | null>(null);

  useEffect(() => {
    GoogleSignin.configure({
      webClientId: '240036700964-er9hpu8ivd2febpb5itt3dr2dg1698p7.apps.googleusercontent.com',
  });

  const checkIfSignedIn = async () => {
    try {
      const user = await GoogleSignin.getCurrentUser();
      if (user) {
        setUserInfo(user);
      }
    } catch (err) {
      console.log('Error checking current user:', err);
    }
  };

  checkIfSignedIn();
}, []);


  const handleGoogleLogin = async () => {
    if (isSigningIn) return;
    setIsSigningIn(true);

    try {
      await GoogleSignin.hasPlayServices();
      const user = await GoogleSignin.signIn();
      setUserInfo(user);
    } catch (error) {
      console.error('Google Sign-In Error:', error);
    } finally {
      setIsSigningIn(false);
    }
  };

  const handleGoogleLogout = async () => {
  try {
    await GoogleSignin.revokeAccess(); // <-- Add this line first
    await GoogleSignin.signOut();      // <-- Then sign out
    setUserInfo(null);
  } catch (error) {
    console.error('Sign-out error:', error);
  }
};

  return (
      <View style={styles.overlay}>
        <View style={styles.container}>
          <Text style={styles.heading}>Login</Text>

          {userInfo ? (
            <>
              <Text style={styles.loggedInText}>
                You are logged in with Google.
              </Text>
              <TouchableOpacity style={styles.logoutButton} onPress={handleGoogleLogout}>
                <Text style={styles.buttonText}>Logout</Text>
              </TouchableOpacity>
            </>
          ) : (
            <>
              <Text style={styles.label}>Email</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter your email"
                keyboardType="email-address"
                placeholderTextColor="#999"
              />

              <Text style={styles.label}>Password</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter your password"
                placeholderTextColor="#999"
                secureTextEntry
              />

              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Login</Text>
              </TouchableOpacity>

              <GoogleSigninButton
                style={{ width: 192, height: 48, alignSelf: 'center', marginTop: 20}}
                onPress={handleGoogleLogin}
              />
            </>
          )}

          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.link}>Don't have an account? Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
  );
};

export default LoginPage;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: '#0f172a',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    backgroundColor: '#1e293b',
    borderRadius: 20,
    padding: 25,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 8,
    width: '85%',
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#f8fafc',
  },
  label: {
    color: '#f8fafc',
    marginBottom: 5,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    backgroundColor: '#fff',
    color: '#000',
    padding: 12,
    borderRadius: 15,
    marginBottom: 15,
    borderColor: '#ccc',
  },
  button: {
    backgroundColor: '#4e8df5',
    padding: 10,
    maxWidth: '100%',
    // marginLeft: 65,
    marginTop: 15,
    marginBottom: 8,
    borderRadius: 10,
    alignItems: 'center',
  },
  logoutButton: {
    backgroundColor: '#e45757',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 17,
    letterSpacing:1,
    fontWeight: 'bold',
  },
  link: {
    color: '#4e8df5',
    marginTop: 20,
    textAlign: 'center',
  },
  loggedInText: {
    fontSize: 16,
    color: 'green',
    textAlign: 'center',
    marginBottom: 15,
    fontWeight: '600',
  },
});
