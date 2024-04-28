import React from "react";
import { View, Text, TextInput } from "react-native";

import { useRouter } from "expo-router";

import { SIZES, icons } from "../../../constants";
import styles from "./welcome.style";

const Welcome = () => {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Welcome Abdelrahman </Text>
        <Text style={styles.welcomeMessage}>Find your perfect Discounts </Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput style={styles.searchInput} />
        </View>
      </View>
    </View>
  );
};

export default Welcome;
