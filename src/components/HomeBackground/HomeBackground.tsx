import { Canvas, LinearGradient, Rect, vec } from "@shopify/react-native-skia";
import { Image, ImageBackground } from "expo-image";
import { StyleSheet, useWindowDimensions, ScaledSize } from "react-native";

export default function HomeBackground() {
  const dimensions = useWindowDimensions();
  const { width, height } = dimensions;
  const myStyles = styles(dimensions);

  const smokeHeight = height * 0.6;
  const smokeOffsetY = height * 0.4;
  return (
    <>
      <Canvas style={myStyles.canvas}>
        <Rect x={0} y={0} width={width} height={height}>
          <LinearGradient
            start={vec(0, 0)}
            end={vec(width, height)}
            colors={["#2E335A", "#1C1B33"]}
          />
        </Rect>
      </Canvas>
      <ImageBackground
        source={require("@/assets/home/Background.png")}
        contentFit="cover"
        style={myStyles.background}>
        <Canvas
          style={{ height: smokeHeight, ...StyleSheet.absoluteFillObject, top: smokeOffsetY }}>
          <Rect x={0} y={0} width={width} height={smokeHeight}>
            <LinearGradient
              start={vec(width / 2, 0)}
              end={vec(width / 2, smokeHeight)}
              colors={["rgba(58,63,84,0)", "rgba(58,63,84,1)"]}
              positions={[-0.02, 0.54]}
            />
          </Rect>
        </Canvas>
        <Image
          source={require("@/assets/home/House.png")}
          contentFit="cover"
          style={myStyles.image}
        />
      </ImageBackground>
    </>
  );
}

const styles = ({ width }: ScaledSize) =>
  StyleSheet.create({
    canvas: {
      ...StyleSheet.absoluteFillObject,
    },
    background: {
      flex: 1,
    },
    image: {
      width,
      height: width,
      ...StyleSheet.absoluteFillObject,
      top: "36%",
    },
  });
