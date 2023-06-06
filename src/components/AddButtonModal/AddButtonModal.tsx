import {
  Modal,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Text,
  View,
} from "react-native";
import {
  PanGestureHandler,
  GestureHandlerRootView,
} from "react-native-gesture-handler";
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  runOnJS,
} from "react-native-reanimated";

import type { GestureResponderEvent } from "react-native";
import type { PanGestureHandlerGestureEvent } from "react-native-gesture-handler";

import { useAddButtonModalContext } from "@src/contexts/AddButtonModalContext";
import useResponsiveness from "@src/hooks/useResponsiveness";
import { AddButtonTabNavOption } from "@src/components";

import createStyleSheet from "./styles";

type ContextType = {
  startY: number;
};

const AddButtonModal = () => {
  const { modalVisible, setModalVisible } = useAddButtonModalContext();
  const [horizontalScale, verticalScale, moderateScale, , dimensionHeight] =
    useResponsiveness();
  const styles = createStyleSheet(
    horizontalScale,
    verticalScale,
    moderateScale,
    modalVisible,
  );

  const translateY = useSharedValue(0);

  const openOrClose = () => {
    setModalVisible((prevVal) => {
      if (prevVal === true) {
        setTimeout(() => {
          translateY.value = 0;
        }, 500);
      }
      return !prevVal;
    });
  };

  const panGestureHandler = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    ContextType
  >({
    onStart: (_, ctx) => {
      ctx.startY = translateY.value;
    },
    onActive: (event, ctx) => {
      const movedY = ctx.startY + event.translationY;

      const upperLimit = -dimensionHeight / 10;
      if (movedY < upperLimit) {
        translateY.value = upperLimit;
      } else {
        translateY.value = movedY;
      }
    },

    onEnd: (event) => {
      if (event.velocityY > 500 && event.translationY > 100) {
        translateY.value = withSpring(1000, { velocity: event.velocityY });
        runOnJS(openOrClose)();
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
        <GestureHandlerRootView style={styles.modalBackground}>
          <PanGestureHandler
            onGestureEvent={panGestureHandler}
            activeOffsetY={10}
          >
            <Animated.View
              style={[styles.modalCard, animatedStyle]}
              onStartShouldSetResponder={() => true}
              onTouchEnd={(e: GestureResponderEvent) => e.stopPropagation()}
            >
              <View style={styles.modalTop}>
                <View style={styles.movableCardVisualizer} />
                <TouchableOpacity
                  style={styles.exitButton}
                  onPress={openOrClose}
                >
                  <Text style={styles.exitButtonIcon}>✖</Text>
                </TouchableOpacity>
              </View>
              <AddButtonTabNavOption
                screenOption="AddStudent"
                text="Add Student"
              />
            </Animated.View>
          </PanGestureHandler>
        </GestureHandlerRootView>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default AddButtonModal;
