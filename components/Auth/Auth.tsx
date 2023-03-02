import { useState } from "react";
import {
  Alert,
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";

import { supabaseConfig } from "../../lib/supabaseConfig";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function signInWithEmail() {
    setLoading(true);
    const { error } = await supabaseConfig.auth.signInWithPassword({
      email,
      password,
    });

    if (error) Alert.alert(error.message);
    setLoading(false);
  }

  async function signUpWithEmail() {
    setLoading(true);
    const { error } = await supabaseConfig.auth.signUp({
      email,
      password,
    });

    if (error) Alert.alert(error.message);
    setLoading(false);
  }

  return (
    <SafeAreaView>
      <TextInput
        onChangeText={setEmail}
        value={email}
        placeholder="Email Address"
      />
      <TextInput
        onChangeText={setPassword}
        value={password}
        placeholder="Password"
      />
      <View>
        <TouchableOpacity onPress={() => signInWithEmail}>
          <Text>Sign in</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => signUpWithEmail}>
          <Text>Sign up</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Auth;
