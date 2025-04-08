import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  useWindowDimensions,
  ImageSourcePropType,
} from "react-native";
import React from "react";

export type schedulingTypes = {
  icon: ImageSourcePropType;
  title: string;
  description: string;
  buttonText: string;
};

export default function SchedulingCard({
  icon,
  title,
  description,
  buttonText,
}: schedulingTypes) {
  const { width } = useWindowDimensions();

  const isWide = width > 604;
  const borderColor = "#C5C7C7";

  const styles = StyleSheet.create({
    schedulingCardsView: {
      height: "auto",
      width: "95%",
      backgroundColor: "#fff",
      flexDirection: isWide ? "row" : "column",
      paddingHorizontal: 15,
      paddingVertical: 25,
      marginBottom: 1,
      alignSelf: "center",
    },
    cardContent: {
      flex: isWide ? 1 : undefined,
      maxWidth: isWide ? "60%" : "100%",
      flexDirection: "row",
    },
    iconContainer: {
      justifyContent: "center",
      alignItems: "center",
      marginRight: 15,
      backgroundColor: "#fff",
      borderColor,
      borderRadius: 100,
      borderWidth: 1,
      width: 64,
      height: 64,
    },
    icon: {
      width: 18.52,
      height: 15,
      objectFit: "contain",
    },
    textContainer: {
      flex: 1,
    },
    title: {
      fontSize: 16,
      fontFamily: "montserrat600",
      paddingBottom: 10,
      color: "#191C1C",
    },
    description: {
      flex: 1,
      fontSize: 14,
      fontFamily: "montserrat500",
      lineHeight: 20,
      color: "#454747",
    },
    button: {
      flex: isWide ? undefined : 1,
      paddingHorizontal: 25,
      marginTop: 15,
      minHeight: 44,
      maxHeight: 44,
      borderRadius: 50,
      borderWidth: 1,
      borderColor,
      justifyContent: "center",
      alignItems: "center",
      marginLeft: isWide ? 15 : 0,
    },
    buttonText: {
      color: "#006298",
      fontSize: 14,
      fontFamily: "montserrat600",
    },
  });
  return (
    <View style={styles.schedulingCardsView}>
      <View style={styles.cardContent}>
        <View style={styles.iconContainer}>
          <Image source={icon} style={styles.icon} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>{buttonText}</Text>
      </TouchableOpacity>
    </View>
  );
}
