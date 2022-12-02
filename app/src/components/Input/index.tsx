import {View, Text,TextInput} from 'react-native';
import {styled} from 'nativewind';

interface inputProps {
  label:string;
}
function InputStyled({label,...rest}:inputProps){
  return (
   <View className="flex flex-col w-full gap-4 pl-4">
    <Text >{label}</Text>
     <TextInput className=" rounded w-full border-[1px] border-blue-900 h-[40px] text-white px-2"  {...rest} />
   </View>
  )
}
const Input = styled(InputStyled);
export {Input}