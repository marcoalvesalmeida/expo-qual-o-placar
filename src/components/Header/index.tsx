import React from 'react';
import { View, Text, SafeAreaView, StatusBar } from 'react-native';

const Header: React.FC = () => {
  return (
    <SafeAreaView className="w-full bg-orange-400 dark:bg-zinc-900 ">
      <StatusBar barStyle="light-content" />
      <View className="w-full h-fit bg-orange-400 dark:bg-zinc-900  justify-center items-center py-5">
          <Text className="font-bold text-white">Qual o Placar?</Text>
      </View>
    </SafeAreaView>
  );
}

export default Header;