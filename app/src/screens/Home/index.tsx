import { Text, View } from 'react-native';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import React, { useState } from 'react';

export function Home() {
  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');
  const [teta,setTeta] = useState('');
  
  const handleSubmit = (event:React.FormEvent) =>{
    event.preventDefault();
    const hasCredentials = !username && !password;
    hasCredentials && setTeta('tetuda');
  }
  return (
    <View className="flex-1 items-center bg-white justify-between">
      <View className="w-full pr-4  justify-center flex-1">
        <Text className="text-black text-center text-2xl font-bold">Proclin Money</Text>
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
        <View className='items-center mt-4'>
          <Button onPress={handleSubmit} className="text-white  w-1/3 bg-blue-900 mt-4">Entrar</Button>
          </View>
          <Text>
            {teta}
          </Text>
      </View>
      <View className='flex-end items-end'><Text>Proclin money 2022</Text></View>
    </View>
  )
}