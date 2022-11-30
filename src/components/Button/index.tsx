import { styled } from 'nativewind';
import React from 'react';
import { TouchableOpacity } from 'react-native'

interface Props {
  children: JSX.Element;
  onPress: () => void;
}

const Button = ({children, ...props}: Props) => {
  return (
    <TouchableOpacity className="px-20 py-5 bg-orange-400 rounded-full" {...props}>
        {children}
    </TouchableOpacity>
  );
}

export default styled(Button);