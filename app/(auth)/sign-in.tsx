import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const SignIn = () => {
  return (
    <View>
      <Text>Sign in</Text>
      <Link href='/(auth)/sign-up'>Create Account</Link>
      <Link href='/' className="mt-4 bg-black rounded-lg px-4 py-2 text-white">Go back</Link>
    </View>
  )
}

export default SignIn
