import { Text, TouchableOpacity, Linking } from "react-native";
import * as Clipboard from "expo-clipboard";

import type { StyleSheetProps } from "@src/types";

import { useCallOrMessageContext } from "@src/contexts/CallOrMessageContext";

type SelectableTextProps = {
  content: string;
  styles: StyleSheetProps;
};

const SelectableText = ({ content, styles }: SelectableTextProps) => {
  const { openOrCloseModal, setPhoneNumber } = useCallOrMessageContext();

  const onPhoneNumberSelected = async (phoneNumber: string) => {
    const sanitizedPhoneNumber = phoneNumber.replace(/\D/g, "");
    setPhoneNumber(sanitizedPhoneNumber);
  };

  const onEmailSelected = (email: string) => {
    Linking.openURL(`mailto:${email}`);
  };

  const handleTextSelection = async () => {
    openOrCloseModal();
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
