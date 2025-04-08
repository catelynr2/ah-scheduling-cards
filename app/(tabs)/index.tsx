import SchedulingCard, { schedulingTypes } from "@/components/SchedulingCard";
import { useFonts } from "expo-font";
import { View, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const [fontsLoaded] = useFonts({
    montserrat600: require("@/assets/fonts/Montserrat-SemiBold.ttf"),
    montserrat500: require("@/assets/fonts/Montserrat-Medium.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  const styles = StyleSheet.create({
    safeArea: {
      flex: 1,
      backgroundColor: "#2E31311A",
      alignItems: "center",
      paddingTop: 150,
    },
    container: {
      flex: 1,
      width: "100%",
    },
  });

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
      <View style={styles.container}>
        <ScrollView>
          {schedulingData?.map((item: schedulingTypes, index) => (
            <SchedulingCard key={index} {...item} />
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
