import {
  Modal,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  Text,
} from "react-native";
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from "react-native-gesture-handler";
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

import type { GestureResponderEvent } from "react-native";

import { useAddButtonModalContext } from "@src/contexts/AddButtonModalContext";
import useResponsiveness from "@src/hooks/useResponsiveness";
import { AddButtonTabNavOption } from "@src/components";

import createStyleSheet from "./styles";

type ContextType = {
  startY: number;
};

const AddButtonModal = () => {
  const { modalVisible, setModalVisible } = useAddButtonModalContext();
  const [horizontalScale, verticalScale, moderateScale] = useResponsiveness();
  const styles = createStyleSheet(
    horizontalScale,
    verticalScale,
    moderateScale,
    modalVisible,
  );

  const translateY = useSharedValue(0);

  const openOrClose = () => {
    setModalVisible((prevVal) => !prevVal);
  };

  const panGestureHandler = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    ContextType
  >({
    onStart: (_, ctx) => {
      ctx.startY = translateY.value;
    },
    onActive: (event, ctx) => {
      translateY.value = ctx.startY + event.translationY;
    },
    onEnd: (event) => {
      if (event.velocityY > 0 && event.translationY > 50) {
        openOrClose();
      } else {
        translateY.value = withSpring(0);
      }
    },
  });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
    };
  });

  return (
    <Modal
      style={styles.modalContainer}
      visible={modalVisible}
      onRequestClose={openOrClose}
      animationType="slide"
      transparent
    >
      <TouchableWithoutFeedback onPress={openOrClose}>
        <View style={styles.modalBackground}>
          <PanGestureHandler
            onGestureEvent={panGestureHandler}
            activeOffsetY={10}
          >
            <Animated.View
              style={[styles.modalCard, animatedStyle]}
              onStartShouldSetResponder={() => true}
              onTouchEnd={(e: GestureResponderEvent) => e.stopPropagation()}
            >
              <TouchableOpacity style={styles.exitButton} onPress={openOrClose}>
                <Text style={styles.exitButtonIcon}>✖</Text>
              </TouchableOpacity>
              <AddButtonTabNavOption
                screenOption="AddStudent"
                text="Add Student"
              />
            </Animated.View>
          </PanGestureHandler>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default AddButtonModal;
