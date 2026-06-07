import { View, Text } from 'react-native'
import React from 'react'

const onboarding = () => {
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text className="text-xl font-bold text-amber-500">
        Oops! This is onboarding.
      </Text>
    </View>
  )
}

export default onboarding
