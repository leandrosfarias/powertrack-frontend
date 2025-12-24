import api from "../../../api/axios";

import { type Athlete } from "../types/types";
import { ref } from "vue";

export function useAthletes() {
    const athletes = ref<Athlete[]>([]);
    const isLoading = ref(false);
    const error = ref<string | null>(null);

    const fetchAthletes = async () => {
        isLoading.value = true;
        error.value = null;

        try {
            const response = await api.get<Athlete[]>("/trainers/trainer/athletes");
            athletes.value = response.data;
        } catch (err) {
            error.value = "Failed to fetch athletes.";
            console.error(err);
        } finally {
            isLoading.value = false;
        }
    };

    return {
        athletes,
        isLoading,
        error,
        fetchAthletes,
    };
}