import { View, Text } from 'react-native'
import { Link, useLocalSearchParams } from 'expo-router'

const SubscriptionDetails = () => {
    const { id } = useLocalSearchParams<{id: string}>();

  return (
    <View>
      <Text>Subscription Details: {id}</Text>
      <Link href='/' className="mt-4 bg-black rounded-lg px-4 py-2 text-white">Go back</Link>
    </View>
  )
}

export default SubscriptionDetails
