import { useFonts } from "expo-font";
import {
  useWindowDimensions,
  Image,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SchedulingCards() {
  const { width } = useWindowDimensions();

  const [fontsLoaded] = useFonts({
    montserrat600: require("@/assets/fonts/Montserrat-SemiBold.ttf"),
    montserrat500: require("@/assets/fonts/Montserrat-Medium.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }
  const isWide = width > 604;
  const borderColor = "#C5C7C7";

  const styles = StyleSheet.create({
    safeArea: {
      flex: 1,
      backgroundColor: "#2E31311A",
      alignItems: "center",
      paddingTop: 150,
    },
    schedulingCardsView: {
      height: "auto",
      width: "95%",
      backgroundColor: "#fff",
      flexDirection: isWide ? "row" : "column",
      paddingHorizontal: 15,
      paddingVertical: 25,
      marginBottom: 1,
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
    },
  });

  type schedulingTypes = {
    icon: number;
    title: string;
    description: string;
    buttonText: string;
  };

  const schedulingData: schedulingTypes[] = [
    {
      icon: require("@/assets/images/videocam.png"),
      title: "Virtual Urgent Care",
      description:
        "Available 24/7 to diagnose, treat, and prescribe medications for your urgent health needs.",
      buttonText: "Get Started",
    },
    {
      icon: require("@/assets/images/cottage.png"),
      title: "At Home Urgent Care",
      description:
        "Get care in the comfort of your own home with our medical team from DispatchHealth.",
      buttonText: "Request a Visit",
    },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      {schedulingData?.map(
        ({ icon, title, description, buttonText }: schedulingTypes, index) => {
          return (
            <View key={index} style={styles.schedulingCardsView}>
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
      )}
    </SafeAreaView>
  );
}
