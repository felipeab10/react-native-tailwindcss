import { TouchableOpacity, Text} from "react-native";
import { ReactNode} from "react";
import  {styled} from 'nativewind';

interface buttonProps{
  children:ReactNode;
}

function ButtonStyled({children,...rest}:buttonProps) {
  return (
    <TouchableOpacity className="h-14 bg-green-500 items-center justify-center rounded" {...rest}>
      <Text className="text-write font-bold text-lg">
{children}
      </Text>
    </TouchableOpacity>
  )
}
const Button = styled(ButtonStyled);
export {Button}