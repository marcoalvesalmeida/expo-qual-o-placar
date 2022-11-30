import React from 'react';
import { Switch, View } from 'react-native';
import { styled, useColorScheme } from 'nativewind';
import { Ionicons } from '@expo/vector-icons';

import colors from 'tailwindcss/colors';

const ToggleTheme: React.FC = ({...props}) => {
  const { colorScheme, toggleColorScheme } = useColorScheme();

  return (
    <View className="justify-center items-center flex-row gap-2" {...props}>
      <Ionicons name="sunny" size={30} color={colors.orange[400]} />
      <Switch
        trackColor={{ false: colors.gray[100], true: colors.orange[100] }}
        thumbColor={colorScheme === 'dark' ? colors.orange[400] : colors.gray[400]}
        ios_backgroundColor={colors.gray[100]}
        onValueChange={toggleColorScheme}
        value={colorScheme === 'dark'}
      />
      <Ionicons name="moon" size={30} color={colors.gray[400]} />
    </View>
  );
}

export default styled(ToggleTheme);