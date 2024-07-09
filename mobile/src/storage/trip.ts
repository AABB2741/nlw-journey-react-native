import AsyncStorage from "@react-native-async-storage/async-storage";

const TRIP_STORAGE_KEY = "@planner:tripId";

async function save(tripId: string) {
    await AsyncStorage.setItem(TRIP_STORAGE_KEY, tripId);
}

async function get() {
    const tripId = await AsyncStorage.getItem(TRIP_STORAGE_KEY);

    return tripId;
}

async function remove() {
    await AsyncStorage.removeItem(TRIP_STORAGE_KEY);
}

export const tripStorage = { save, get, remove };
