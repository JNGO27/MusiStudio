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
  const [, setLoading] = useState(false);

  const signInWithEmail = async () => {
    setLoading(true);
    const { error } = await supabaseConfig.auth.signInWithPassword({
      email,
      password,
    });

    if (error) Alert.alert(error.message);
    setLoading(false);
  };

  const signUpWithEmail = async () => {
    setLoading(true);
    const { error } = await supabaseConfig.auth.signUp({
      email,
      password,
    });

    if (error) Alert.alert(error.message);
    setLoading(false);
  };

  return (
    <SafeAreaView className="w-full h-full flex justify-center items-center">
      <View className="w-80 h-2/4 bg-slate-100 flex justify-center gap-4 py-4 px-12 shadow-md shadow-black">
        <TextInput
          className="flex bg-slate-300"
          onChangeText={setEmail}
          value={email}
          placeholder="Email Address"
        />
        <TextInput
          className="flex bg-slate-300"
          onChangeText={setPassword}
          value={password}
          placeholder="Password"
        />
        <View className="flex flex-row gap-5">
          <TouchableOpacity onPress={signInWithEmail}>
            <Text>Sign in</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={signUpWithEmail}>
            <Text>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Auth;
