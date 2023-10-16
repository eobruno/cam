import React from "react";
import { useEffect, useState } from "react";
import { StyleSheet, View, Text } from "react-native";

const Home = () => {
  const [texto, setTexto] = useState("");

  useEffect(() => {
    setTexto("TESTE 123");
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Text style={{ fontSize: 45, fontWeight: "700", color: "#1919ff" }}>
        {texto}
      </Text>
    </View>
  );
};

export default Home;