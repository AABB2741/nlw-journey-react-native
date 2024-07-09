import { Text, View } from "react-native";
import { TripData } from "./[id]";

interface Props {
    tripId: string;
}

export function Details({ tripId }: Props) {
    return (
        <View className="flex-1">
            <Text className="text-white">{tripId}</Text>
        </View>
    );
}
