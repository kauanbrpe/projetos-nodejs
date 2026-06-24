import { StatisticsModel } from "./statistics-model";

export interface PlayerModel {
    id: number;
    name: string;
    team: string;
    nationality: string;
    position: string;
    statistics: StatisticsModel
}