import { Text, View } from 'react-native';
import {Input } from '../../components/Input';
import {Button } from '../../components/Button';

export function Home () {
  return (
    <View className="flex-1 bg-white items-center justify-center">
    <Text className="text-white text-2xl font-bold">Proclin Money</Text>
    <View className="w-full py-2 px-4 ">
   <View className="py-4">
   <Input 
    label="Nome de usuário" />
   </View>
    <Input 
    label="Senha" 
      secureTextEntry={true} 
      autoCorrect={false} 
       placeholder="********" 
       type="number" />
      
        
      </View>
      <Button className="w-1/3 bg-blue-900 mt-4">Entrar</Button>
  </View>
  )
}