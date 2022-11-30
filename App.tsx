import React, { useState } from 'react';
import { Text, View } from 'react-native';
import Button from './src/components/Button';
import Header from './src/components/Header';
import { Ionicons } from '@expo/vector-icons';
import colors from 'tailwindcss/colors';
import ToggleTheme from './src/components/ToggleTheme';

export default function App() {
  const [showResult, setShowResult] = useState(false);
  const [team1, setTeam1] = useState(0);
  const [team2, setTeam2] = useState(0);
  const [count, setCount] = useState(1);

  function handleLuck(){
    setShowResult(true);
    setCount(count + 1);
    const max = count % 10 === 0 ? 10 : 4;
    setTeam1(Math.floor(Math.random() * max) + 1);
    setTeam2(Math.floor(Math.random() * max) + 1);
  }

  return (
   <View className="flex-1 items-center justify-start dark:bg-zinc-800 light:bg-white">
      <Header />
      <View className="pt-5">
        <ToggleTheme className="mb-10" />
        <Text className="text-zinc-800 dark:text-white px-10 text-center">Precisa de uma dica de placar? É só clicar no botão abaixo e você receberá um placar aleatório para apostar naquela partida!</Text>
        <Button className={`${showResult ? 'mx-20' : 'mx-10' } bg-orange-400 mt-40 justify-center items-center`} onPress={handleLuck}>
          {showResult ? (
            <Ionicons name="refresh" color={colors.white} size={30} />
          ) : (
            <Text className="text-white font-bold text-sm text-center">Faça a mágica</Text>
          )}          
        </Button>
        {showResult && (
          <View className="w-full flex-row justify-evenly items-center px-20 mt-10">
            <View className="w-fit px-3 py-4 border-2 border-solid border-zinc-800 dark:border-white rounded-md">
              <Text className="text-zinc-800 dark:text-white font-bold text-md text-center">{team1}</Text>
            </View>
            <Text className="text-zinc-800 dark:text-white font-bold text-sm text-center">x</Text>
            <View className="w-fit px-3 py-4 border-2 border-solid border-zinc-800 dark:border-white rounded-md">
              <Text className="text-zinc-800 dark:text-white font-bold text-md text-center">{team2}</Text>
            </View>
          </View>
        )}
      </View>
    </View>
  );
}