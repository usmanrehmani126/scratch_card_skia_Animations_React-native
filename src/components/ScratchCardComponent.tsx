import { StyleSheet, Text, View, ViewStyle } from "react-native";
import React, { useRef, useState } from "react";
import {
  AnimatedProps,
  Canvas,
  Group,
  Image,
  Mask,
  Path,
  Rect,
  Skia,
  SkImage,
} from "@shopify/react-native-skia";

type Props = {
  style: StyleProp<ViewStyle>;
  image: AnimatedProps<SkImage | null>;
  children: React.ReactNode;
};

const ScratchCardComponent: React.FC<Props> = ({ style, image, children }) => {
  const [[width, height], setSize] = useState([0, 0]);
  const path = useRef(Skia.Path.Make());
  return (
    <View
      onLayout={(e) => {
        setSize([e.nativeEvent.layout.width, e.nativeEvent.layout.height]);
      }}
      style={[styles.container, style]}
    >
      {Boolean(image && width && height) && (
        <>
          <View>{children}</View>
          <Canvas
            style={styles.canvas}
            onTouchStart={({ nativeEvent }) => {
              path.current.moveTo(nativeEvent.locationX, nativeEvent.locationY);
            }}
            onTouchMove={({ nativeEvent }) => {
              path.current.lineTo(nativeEvent.locationX, nativeEvent.locationY);
            }}
          >
            <Mask
              mode="luminance"
              mask={
                <Group>
                  <Rect
                    x={0}
                    y={0}
                    width={1000}
                    height={1000}
                    color={"white"}
                  />
                  <Path
                    path={path.current}
                    color={"black"}
                    style="stroke"
                    strokeJoin={"round"}
                    strokeCap={"round"}
                    strokeWidth={50}
                  />
                </Group>
              }
            >
              <Image
                image={image}
                x={0}
                y={0}
                height={height}
                width={width}
                fit="cover"
              />
            </Mask>
          </Canvas>
        </>
      )}
    </View>
  );
};

export default ScratchCardComponent;

const styles = StyleSheet.create({
  container: {
    position: "relative",
    height: 300,
    width: 300,
    overflow: "hidden",
  },
  canvas: {
    position: "absolute",
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
  },
});
