import { Text, TouchableOpacity, Linking, Alert } from "react-native";
import * as Clipboard from "expo-clipboard";

import type { StyleSheetProps } from "@src/types";

type SelectableTextProps = {
  content: string;
  styles: StyleSheetProps;
};

const SelectableText = ({ content, styles }: SelectableTextProps) => {
  const onPhoneNumberSelected = (phoneNumber: string) => {
    const sanitizedPhoneNumber = phoneNumber.replace(/\D/g, "");

    Alert.alert(
      "Select an Action",
      "Would you like to call or send a message?",
      [
        {
          text: "Call",
          onPress: () => Linking.openURL(`tel:${sanitizedPhoneNumber}`),
        },
        {
          text: "Message",
          onPress: () => Linking.openURL(`sms:${sanitizedPhoneNumber}`),
        },
        {
          text: "Cancel",
          style: "cancel",
        },
      ],
    );
  };

  const onEmailSelected = (email: string) => {
    Linking.openURL(`mailto:${email}`);
  };

  const handleTextSelection = async () => {
    await Clipboard.setStringAsync(content);
    const clipboardText = await Clipboard.getStringAsync();

    const phoneNumberRegex = /^\+?[1-9]\d{1,14}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (phoneNumberRegex.test(clipboardText) && onPhoneNumberSelected) {
      onPhoneNumberSelected(clipboardText);
    } else if (emailRegex.test(clipboardText) && onEmailSelected) {
      onEmailSelected(clipboardText);
    }
  };

  return (
    <TouchableOpacity onLongPress={handleTextSelection}>
      <Text style={styles.contactInfoText} selectable>
        {content}
      </Text>
    </TouchableOpacity>
  );
};

export default SelectableText;
