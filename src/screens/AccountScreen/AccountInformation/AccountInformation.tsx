import { View, Text, TouchableOpacity } from "react-native";

import { supabaseConfig } from "@src/lib/supabaseConfig";

const AccountInformation = () => {
  const handleSignOut = async () => {
    const { error } = await supabaseConfig.auth.signOut();
    if (error) return null;

    return null;
  };

  return (
    <View
      style={{
        display: "flex",
        flex: 1,
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "pink",
      }}
    >
      <TouchableOpacity
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "pink",
        }}
        onPress={handleSignOut}
      >
        <Text>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AccountInformation;
