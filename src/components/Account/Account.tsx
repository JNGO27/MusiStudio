import { View, Text, TouchableOpacity } from "react-native";

import { supabaseConfig } from "@src/lib/supabaseConfig";

const Account = () => {
  const handleSignOut = async () => {
    const { error } = await supabaseConfig.auth.signOut();
    if (error) return null;

    return null;
  };

  return (
    <View>
      <TouchableOpacity onPress={handleSignOut}>
        <Text>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Account;
