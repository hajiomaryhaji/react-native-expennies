import { Link } from "expo-router";
import { styled } from "nativewind";
import { Text } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

const SafeAreaView = styled(RNSafeAreaView);

export default function App() {
    return (
        <SafeAreaView className="flex-1 items-center justify-center bg-background">
            <Text className="text-xl font-bold text-success">
                Welcome to Nativewind!
            </Text>

            <Link href='/onboarding' className="mt-4 bg-black rounded-lg px-4 py-2 text-white">Go to onboarding</Link>
            <Link href='/(auth)/sign-in' className="mt-4 bg-black rounded-lg px-4 py-2 text-white">Go to Sign In</Link>
            <Link href='/(auth)/sign-up' className="mt-4 bg-black rounded-lg px-4 py-2 text-white">Go to Sign up</Link>

            <Link href='/subscriptions/openai-api'>OpenAI API Subscription</Link>
            <Link href={
                {
                    pathname: '/subscriptions/[id]',
                    params: { id: 'Vercel' }
                }
            }>Vercel Subscription</Link>
        </SafeAreaView>
    );
}
