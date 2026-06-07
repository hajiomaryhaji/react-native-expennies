import { styled } from "nativewind";
import { FlatList, Image, Text, View } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
import images from "@/constants/images";
import { HOME_BALANCE, HOME_SUBSCRIPTIONS, UPCOMING_SUBSCRIPTIONS } from "@/constants/data";
import { icons } from "@/constants/icons";
import { formatCurrency } from "@/lib/utils";
import dayjs from "dayjs";
import ListHeading from "../components/ListHeading";
import UpcomingSubscriptionsCard from "../components/UpcomingSubscriptionCard";
import SubscriptionCard from "../components/SubscriptionCard";
import { useState } from "react";
import { useUser } from "@clerk/expo";

const SafeAreaView = styled(RNSafeAreaView);

export default function App() {
    const [expandedSubscription, setExpandedSubscription] = useState<string | null>(null);
    const { user } = useUser();

    const displayName = user?.firstName || user?.fullName || user?.emailAddresses[0]?.emailAddress || 'User';

    return (
        <SafeAreaView className="flex-1 bg-background p-5">
            <View>
                <FlatList
                    ListHeaderComponent={() => (
                        <>
                            <View className="home-header">
                                <View className="home-user">
                                    <Image source={user?.imageUrl ? { uri: user.imageUrl } : images.avatar} className="home-avatar" />

                                    <Text className="home-user-name">{displayName}</Text>
                                </View>

                                <Image source={icons.add} className="home-add-icon" />

                            </View>

                            <View className="home-balance-card">
                                <Text className="home-balance-label">Balance</Text>

                                <View className="home-balance-row">
                                    <Text className="home-balance-amount">{formatCurrency(HOME_BALANCE.amount)}</Text>

                                    <Text className="home-balance-date">{dayjs(HOME_BALANCE.nextRenewalDate).format('DD-MM-YY')}</Text>
                                </View>
                            </View>

                            <View>
                                <ListHeading title="Upcoming" />

                                <FlatList
                                    data={UPCOMING_SUBSCRIPTIONS}
                                    renderItem={({ item }) => (
                                        <UpcomingSubscriptionsCard {...item} />
                                    )}
                                    keyExtractor={(item) => item.id}
                                    horizontal
                                    showsHorizontalScrollIndicator={false}
                                    ListEmptyComponent={<Text className="home-empty-state">No upcoming renewals yet.</Text>}
                                />
                            </View>

                            <ListHeading title="All Subscriptions" />
                        </>
                    )}
                    data={HOME_SUBSCRIPTIONS}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <SubscriptionCard
                            {...item}
                            expanded={expandedSubscription === item.id}
                            onPress={() => setExpandedSubscription((current) => current !== item.id ? item.id : null)}
                        />
                    )}
                    extraData={expandedSubscription}
                    ItemSeparatorComponent={() => <View className="h-4" />}
                    showsVerticalScrollIndicator={false}
                    ListEmptyComponent={<Text className="home-empty-state">No subscriptions yet.</Text>}
                    contentContainerClassName="pb-20"
                />

            </View>
        </SafeAreaView>
    );
}
