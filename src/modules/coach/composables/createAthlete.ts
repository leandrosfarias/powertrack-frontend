import { type Athlete } from "../types/types";
import api from "../../../api/axios";

export async function createAthlete(athleteData: Omit<Athlete, 'id'>): Promise<Athlete> {
    return api.post<Athlete>('/athletes', athleteData)
        .then(response => response.data);
}