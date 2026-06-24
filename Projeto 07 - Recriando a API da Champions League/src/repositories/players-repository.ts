import { PlayerModel } from "../models/player-model";
import { StatisticsModel } from "../models/statistics-model";

const database: PlayerModel[] = [
 
  // ═══════════════════════════════════════════════
  // PSG — Campeão UCL 25/26
  // ═══════════════════════════════════════════════
  {
    id: 1,
    name: "Kvaratskhelia",
    team: "Paris Saint-Germain",
    nationality: "Georgiana",
    position: "LW",
    statistics: { overall: 87, pace: 91, shooting: 80, passing: 80, dribbling: 90, defending: 35, physical: 68 },
  },
  {
    id: 2,
    name: "Vitinha",
    team: "Paris Saint-Germain",
    nationality: "Portuguesa",
    position: "CM",
    statistics: { overall: 84, pace: 72, shooting: 76, passing: 87, dribbling: 87, defending: 68, physical: 66 },
  },
  {
    id: 3,
    name: "Marquinhos",
    team: "Paris Saint-Germain",
    nationality: "Brasileira",
    position: "CB",
    statistics: { overall: 87, pace: 72, shooting: 52, passing: 76, dribbling: 70, defending: 88, physical: 83 },
  },
  {
    id: 4,
    name: "Nuno Mendes",
    team: "Paris Saint-Germain",
    nationality: "Portuguesa",
    position: "LB",
    statistics: { overall: 85, pace: 90, shooting: 63, passing: 78, dribbling: 80, defending: 79, physical: 74 },
  },
  {
    id: 5,
    name: "Dembélé",
    team: "Paris Saint-Germain",
    nationality: "Francesa",
    position: "RW",
    statistics: { overall: 87, pace: 92, shooting: 82, passing: 80, dribbling: 88, defending: 34, physical: 68 },
  },
  {
    id: 6,
    name: "Hakimi",
    team: "Paris Saint-Germain",
    nationality: "Marroquina",
    position: "RB",
    statistics: { overall: 86, pace: 92, shooting: 70, passing: 78, dribbling: 82, defending: 78, physical: 77 },
  },
 
  // ═══════════════════════════════════════════════
  // Arsenal — Vice-campeão UCL 25/26
  // ═══════════════════════════════════════════════
  {
    id: 7,
    name: "Bukayo Saka",
    team: "Arsenal",
    nationality: "Inglesa",
    position: "RW",
    statistics: { overall: 88, pace: 82, shooting: 82, passing: 83, dribbling: 87, defending: 58, physical: 68 },
  },
  {
    id: 8,
    name: "Martin Ødegaard",
    team: "Arsenal",
    nationality: "Norueguesa",
    position: "CAM",
    statistics: { overall: 89, pace: 75, shooting: 82, passing: 90, dribbling: 89, defending: 62, physical: 65 },
  },
  {
    id: 9,
    name: "Gabriel Martinelli",
    team: "Arsenal",
    nationality: "Brasileira",
    position: "LW",
    statistics: { overall: 84, pace: 90, shooting: 80, passing: 74, dribbling: 84, defending: 44, physical: 72 },
  },
  {
    id: 10,
    name: "Kai Havertz",
    team: "Arsenal",
    nationality: "Alemã",
    position: "ST",
    statistics: { overall: 84, pace: 78, shooting: 80, passing: 79, dribbling: 82, defending: 52, physical: 77 },
  },
  {
    id: 11,
    name: "Gabriel Jesus",
    team: "Arsenal",
    nationality: "Brasileira",
    position: "ST",
    statistics: { overall: 83, pace: 88, shooting: 79, passing: 75, dribbling: 84, defending: 44, physical: 68 },
  },
  {
    id: 12,
    name: "Viktor Gyökeres",
    team: "Arsenal",
    nationality: "Sueca",
    position: "ST",
    statistics: { overall: 86, pace: 85, shooting: 86, passing: 72, dribbling: 82, defending: 46, physical: 84 },
  },
  {
    id: 13,
    name: "Myles Lewis-Skelly",
    team: "Arsenal",
    nationality: "Inglesa",
    position: "LB",
    statistics: { overall: 78, pace: 82, shooting: 58, passing: 74, dribbling: 76, defending: 75, physical: 72 },
  },
 
  // ═══════════════════════════════════════════════
  // Real Madrid
  // ═══════════════════════════════════════════════
  {
    id: 14,
    name: "Kylian Mbappé",
    team: "Real Madrid",
    nationality: "Francesa",
    position: "ST",
    statistics: { overall: 91, pace: 97, shooting: 90, passing: 80, dribbling: 92, defending: 36, physical: 77 },
  },
  {
    id: 15,
    name: "Vinícius Júnior",
    team: "Real Madrid",
    nationality: "Brasileira",
    position: "LW",
    statistics: { overall: 90, pace: 95, shooting: 83, passing: 78, dribbling: 93, defending: 24, physical: 72 },
  },
  {
    id: 16,
    name: "Jude Bellingham",
    team: "Real Madrid",
    nationality: "Inglesa",
    position: "CAM",
    statistics: { overall: 90, pace: 80, shooting: 87, passing: 83, dribbling: 88, defending: 78, physical: 83 },
  },
  {
    id: 17,
    name: "Rodrygo",
    team: "Real Madrid",
    nationality: "Brasileira",
    position: "RW",
    statistics: { overall: 86, pace: 87, shooting: 80, passing: 78, dribbling: 88, defending: 36, physical: 64 },
  },
  {
    id: 18,
    name: "Thibaut Courtois",
    team: "Real Madrid",
    nationality: "Belga",
    position: "GK",
    statistics: { overall: 89, pace: 40, shooting: 15, passing: 55, dribbling: 22, defending: 89, physical: 84 },
  },
  {
    id: 19,
    name: "Federico Valverde",
    team: "Real Madrid",
    nationality: "Uruguaia",
    position: "CM",
    statistics: { overall: 88, pace: 83, shooting: 79, passing: 83, dribbling: 84, defending: 79, physical: 85 },
  },
 
  // ═══════════════════════════════════════════════
  // Bayern München
  // ═══════════════════════════════════════════════
  {
    id: 20,
    name: "Harry Kane",
    team: "Bayern München",
    nationality: "Inglesa",
    position: "ST",
    statistics: { overall: 90, pace: 70, shooting: 93, passing: 84, dribbling: 82, defending: 46, physical: 83 },
  },
  {
    id: 21,
    name: "Jamal Musiala",
    team: "Bayern München",
    nationality: "Alemã",
    position: "CAM",
    statistics: { overall: 88, pace: 82, shooting: 78, passing: 82, dribbling: 90, defending: 52, physical: 68 },
  },
  {
    id: 22,
    name: "Luis Díaz",
    team: "Bayern München",
    nationality: "Colombiana",
    position: "LW",
    statistics: { overall: 85, pace: 91, shooting: 78, passing: 75, dribbling: 86, defending: 38, physical: 72 },
  },
  {
    id: 23,
    name: "Joshua Kimmich",
    team: "Bayern München",
    nationality: "Alemã",
    position: "CDM",
    statistics: { overall: 88, pace: 68, shooting: 70, passing: 88, dribbling: 81, defending: 85, physical: 76 },
  },
  {
    id: 24,
    name: "Manuel Neuer",
    team: "Bayern München",
    nationality: "Alemã",
    position: "GK",
    statistics: { overall: 86, pace: 46, shooting: 15, passing: 68, dribbling: 30, defending: 87, physical: 82 },
  },
 
  // ═══════════════════════════════════════════════
  // Barcelona
  // ═══════════════════════════════════════════════
  {
    id: 25,
    name: "Lamine Yamal",
    team: "Barcelona",
    nationality: "Espanhola",
    position: "RW",
    statistics: { overall: 87, pace: 88, shooting: 78, passing: 82, dribbling: 91, defending: 30, physical: 58 },
  },
  {
    id: 26,
    name: "Raphinha",
    team: "Barcelona",
    nationality: "Brasileira",
    position: "LW",
    statistics: { overall: 88, pace: 85, shooting: 85, passing: 80, dribbling: 88, defending: 44, physical: 72 },
  },
  {
    id: 27,
    name: "Pedri",
    team: "Barcelona",
    nationality: "Espanhola",
    position: "CM",
    statistics: { overall: 87, pace: 76, shooting: 74, passing: 87, dribbling: 89, defending: 70, physical: 64 },
  },
  {
    id: 28,
    name: "Fermín López",
    team: "Barcelona",
    nationality: "Espanhola",
    position: "CM",
    statistics: { overall: 80, pace: 77, shooting: 76, passing: 78, dribbling: 82, defending: 60, physical: 66 },
  },
  {
    id: 29,
    name: "Marcus Rashford",
    team: "Barcelona",
    nationality: "Inglesa",
    position: "LW",
    statistics: { overall: 85, pace: 91, shooting: 82, passing: 74, dribbling: 85, defending: 36, physical: 75 },
  },
  {
    id: 30,
    name: "Wojciech Szczęsny",
    team: "Barcelona",
    nationality: "Polonesa",
    position: "GK",
    statistics: { overall: 84, pace: 38, shooting: 14, passing: 58, dribbling: 24, defending: 85, physical: 76 },
  },
 
  // ═══════════════════════════════════════════════
  // Liverpool
  // ═══════════════════════════════════════════════
  {
    id: 31,
    name: "Mohamed Salah",
    team: "Liverpool",
    nationality: "Egípcia",
    position: "RW",
    statistics: { overall: 91, pace: 88, shooting: 88, passing: 82, dribbling: 89, defending: 44, physical: 74 },
  },
  {
    id: 32,
    name: "Virgil van Dijk",
    team: "Liverpool",
    nationality: "Holandesa",
    position: "CB",
    statistics: { overall: 90, pace: 75, shooting: 60, passing: 78, dribbling: 70, defending: 91, physical: 90 },
  },
  {
    id: 33,
    name: "Dominik Szoboszlai",
    team: "Liverpool",
    nationality: "Húngara",
    position: "CAM",
    statistics: { overall: 84, pace: 80, shooting: 80, passing: 84, dribbling: 84, defending: 66, physical: 78 },
  },
  {
    id: 34,
    name: "Alexis Mac Allister",
    team: "Liverpool",
    nationality: "Argentina",
    position: "CM",
    statistics: { overall: 85, pace: 72, shooting: 78, passing: 85, dribbling: 82, defending: 72, physical: 76 },
  },
  {
    id: 35,
    name: "Florian Wirtz",
    team: "Liverpool",
    nationality: "Alemã",
    position: "CAM",
    statistics: { overall: 89, pace: 78, shooting: 82, passing: 88, dribbling: 90, defending: 56, physical: 64 },
  },
  {
    id: 36,
    name: "Alexander Isak",
    team: "Liverpool",
    nationality: "Sueca",
    position: "ST",
    statistics: { overall: 86, pace: 88, shooting: 84, passing: 73, dribbling: 85, defending: 38, physical: 74 },
  },
  {
    id: 37,
    name: "Jeremie Frimpong",
    team: "Liverpool",
    nationality: "Holandesa",
    position: "RB",
    statistics: { overall: 84, pace: 93, shooting: 68, passing: 76, dribbling: 84, defending: 74, physical: 76 },
  },
 
  // ═══════════════════════════════════════════════
  // Manchester City
  // ═══════════════════════════════════════════════
  {
    id: 38,
    name: "Erling Haaland",
    team: "Manchester City",
    nationality: "Norueguesa",
    position: "ST",
    statistics: { overall: 91, pace: 88, shooting: 92, passing: 66, dribbling: 80, defending: 44, physical: 93 },
  },
  {
    id: 39,
    name: "Phil Foden",
    team: "Manchester City",
    nationality: "Inglesa",
    position: "CAM",
    statistics: { overall: 88, pace: 82, shooting: 83, passing: 83, dribbling: 87, defending: 58, physical: 68 },
  },
  {
    id: 40,
    name: "Kevin De Bruyne",
    team: "Manchester City",
    nationality: "Belga",
    position: "CM",
    statistics: { overall: 89, pace: 72, shooting: 82, passing: 94, dribbling: 87, defending: 64, physical: 76 },
  },
  {
    id: 41,
    name: "Rayan Cherki",
    team: "Manchester City",
    nationality: "Francesa",
    position: "CAM",
    statistics: { overall: 82, pace: 80, shooting: 76, passing: 82, dribbling: 88, defending: 44, physical: 60 },
  },
  {
    id: 42,
    name: "Bernardo Silva",
    team: "Manchester City",
    nationality: "Portuguesa",
    position: "CM",
    statistics: { overall: 88, pace: 78, shooting: 80, passing: 87, dribbling: 89, defending: 70, physical: 66 },
  },
 
  // ═══════════════════════════════════════════════
  // Atlético de Madrid
  // ═══════════════════════════════════════════════
  {
    id: 43,
    name: "Antoine Griezmann",
    team: "Atlético de Madrid",
    nationality: "Francesa",
    position: "CAM",
    statistics: { overall: 87, pace: 78, shooting: 87, passing: 82, dribbling: 85, defending: 62, physical: 74 },
  },
  {
    id: 44,
    name: "Julián Álvarez",
    team: "Atlético de Madrid",
    nationality: "Argentina",
    position: "ST",
    statistics: { overall: 86, pace: 82, shooting: 84, passing: 78, dribbling: 83, defending: 50, physical: 78 },
  },
  {
    id: 45,
    name: "Marcos Llorente",
    team: "Atlético de Madrid",
    nationality: "Espanhola",
    position: "CM",
    statistics: { overall: 84, pace: 85, shooting: 74, passing: 80, dribbling: 80, defending: 72, physical: 78 },
  },
  {
    id: 46,
    name: "Giuliano Simeone",
    team: "Atlético de Madrid",
    nationality: "Argentina",
    position: "RW",
    statistics: { overall: 78, pace: 84, shooting: 72, passing: 70, dribbling: 80, defending: 38, physical: 68 },
  },
  {
    id: 47,
    name: "Jan Oblak",
    team: "Atlético de Madrid",
    nationality: "Eslovena",
    position: "GK",
    statistics: { overall: 88, pace: 38, shooting: 14, passing: 55, dribbling: 20, defending: 89, physical: 82 },
  },
 
  // ═══════════════════════════════════════════════
  // Inter Milan
  // ═══════════════════════════════════════════════
  {
    id: 48,
    name: "Marcus Thuram",
    team: "Inter",
    nationality: "Francesa",
    position: "ST",
    statistics: { overall: 86, pace: 88, shooting: 80, passing: 72, dribbling: 82, defending: 42, physical: 84 },
  },
  {
    id: 49,
    name: "Federico Dimarco",
    team: "Inter",
    nationality: "Italiana",
    position: "LB",
    statistics: { overall: 85, pace: 78, shooting: 72, passing: 82, dribbling: 78, defending: 83, physical: 74 },
  },
  {
    id: 50,
    name: "Lautaro Martínez",
    team: "Inter",
    nationality: "Argentina",
    position: "ST",
    statistics: { overall: 88, pace: 80, shooting: 87, passing: 74, dribbling: 84, defending: 44, physical: 80 },
  },
  {
    id: 51,
    name: "Nicolò Barella",
    team: "Inter",
    nationality: "Italiana",
    position: "CM",
    statistics: { overall: 87, pace: 76, shooting: 76, passing: 84, dribbling: 85, defending: 76, physical: 80 },
  },
  {
    id: 52,
    name: "Hakan Çalhanoğlu",
    team: "Inter",
    nationality: "Turca",
    position: "CDM",
    statistics: { overall: 87, pace: 62, shooting: 82, passing: 88, dribbling: 84, defending: 76, physical: 72 },
  },
 
  // ═══════════════════════════════════════════════
  // Borussia Dortmund
  // ═══════════════════════════════════════════════
  {
    id: 53,
    name: "Marcel Sabitzer",
    team: "Borussia Dortmund",
    nationality: "Austríaca",
    position: "CM",
    statistics: { overall: 83, pace: 74, shooting: 80, passing: 80, dribbling: 80, defending: 74, physical: 78 },
  },
  {
    id: 54,
    name: "Gregor Kobel",
    team: "Borussia Dortmund",
    nationality: "Suíça",
    position: "GK",
    statistics: { overall: 85, pace: 40, shooting: 13, passing: 58, dribbling: 20, defending: 86, physical: 80 },
  },
  {
    id: 55,
    name: "Julian Brandt",
    team: "Borussia Dortmund",
    nationality: "Alemã",
    position: "CAM",
    statistics: { overall: 84, pace: 78, shooting: 74, passing: 84, dribbling: 85, defending: 54, physical: 62 },
  },
 
  // ═══════════════════════════════════════════════
  // Juventus
  // ═══════════════════════════════════════════════
  {
    id: 56,
    name: "Dušan Vlahović",
    team: "Juventus",
    nationality: "Sérvia",
    position: "ST",
    statistics: { overall: 86, pace: 78, shooting: 88, passing: 66, dribbling: 76, defending: 38, physical: 84 },
  },
  {
    id: 57,
    name: "Khephren Thuram",
    team: "Juventus",
    nationality: "Francesa",
    position: "CM",
    statistics: { overall: 83, pace: 76, shooting: 70, passing: 80, dribbling: 80, defending: 74, physical: 82 },
  },
  {
    id: 58,
    name: "Teun Koopmeiners",
    team: "Juventus",
    nationality: "Holandesa",
    position: "CAM",
    statistics: { overall: 85, pace: 68, shooting: 82, passing: 84, dribbling: 82, defending: 68, physical: 74 },
  },
 
  // ═══════════════════════════════════════════════
  // Bayer Leverkusen
  // ═══════════════════════════════════════════════
  {
    id: 59,
    name: "Alejandro Grimaldo",
    team: "Bayer Leverkusen",
    nationality: "Espanhola",
    position: "LB",
    statistics: { overall: 85, pace: 82, shooting: 72, passing: 83, dribbling: 82, defending: 79, physical: 72 },
  },
  {
    id: 60,
    name: "Granit Xhaka",
    team: "Bayer Leverkusen",
    nationality: "Suíça",
    position: "CDM",
    statistics: { overall: 84, pace: 60, shooting: 74, passing: 85, dribbling: 76, defending: 81, physical: 78 },
  },
  {
    id: 61,
    name: "Malik Tillman",
    team: "Bayer Leverkusen",
    nationality: "Americana",
    position: "CAM",
    statistics: { overall: 80, pace: 80, shooting: 74, passing: 78, dribbling: 82, defending: 50, physical: 66 },
  },
 
  // ═══════════════════════════════════════════════
  // Chelsea
  // ═══════════════════════════════════════════════
  {
    id: 62,
    name: "Cole Palmer",
    team: "Chelsea",
    nationality: "Inglesa",
    position: "CAM",
    statistics: { overall: 87, pace: 76, shooting: 84, passing: 84, dribbling: 88, defending: 44, physical: 64 },
  },
  {
    id: 63,
    name: "Moisés Caicedo",
    team: "Chelsea",
    nationality: "Equatoriana",
    position: "CDM",
    statistics: { overall: 85, pace: 76, shooting: 66, passing: 80, dribbling: 78, defending: 84, physical: 82 },
  },
  {
    id: 64,
    name: "Marc Cucurella",
    team: "Chelsea",
    nationality: "Espanhola",
    position: "LB",
    statistics: { overall: 82, pace: 79, shooting: 54, passing: 74, dribbling: 78, defending: 80, physical: 72 },
  },
  {
    id: 65,
    name: "João Pedro",
    team: "Chelsea",
    nationality: "Brasileira",
    position: "ST",
    statistics: { overall: 82, pace: 76, shooting: 78, passing: 68, dribbling: 79, defending: 34, physical: 78 },
  },
  {
    id: 66,
    name: "Enzo Fernández",
    team: "Chelsea",
    nationality: "Argentina",
    position: "CM",
    statistics: { overall: 84, pace: 72, shooting: 74, passing: 84, dribbling: 82, defending: 72, physical: 74 },
  },
 
  // ═══════════════════════════════════════════════
  // Tottenham
  // ═══════════════════════════════════════════════
  {
    id: 67,
    name: "Cristian Romero",
    team: "Tottenham",
    nationality: "Argentina",
    position: "CB",
    statistics: { overall: 86, pace: 76, shooting: 44, passing: 68, dribbling: 64, defending: 88, physical: 88 },
  },
  {
    id: 68,
    name: "Pedro Porro",
    team: "Tottenham",
    nationality: "Espanhola",
    position: "RB",
    statistics: { overall: 82, pace: 84, shooting: 62, passing: 76, dribbling: 78, defending: 76, physical: 74 },
  },
  {
    id: 69,
    name: "Lucas Bergvall",
    team: "Tottenham",
    nationality: "Sueca",
    position: "CM",
    statistics: { overall: 78, pace: 74, shooting: 68, passing: 78, dribbling: 80, defending: 66, physical: 68 },
  },
  {
    id: 70,
    name: "Son Heung-min",
    team: "Tottenham",
    nationality: "Sul-Coreana",
    position: "LW",
    statistics: { overall: 87, pace: 88, shooting: 87, passing: 80, dribbling: 87, defending: 40, physical: 72 },
  },
 
  // ═══════════════════════════════════════════════
  // Newcastle United
  // ═══════════════════════════════════════════════
  {
    id: 71,
    name: "Anthony Elanga",
    team: "Newcastle United",
    nationality: "Sueca",
    position: "LW",
    statistics: { overall: 80, pace: 92, shooting: 72, passing: 68, dribbling: 80, defending: 34, physical: 68 },
  },
  {
    id: 72,
    name: "Yoane Wissa",
    team: "Newcastle United",
    nationality: "Congolesa",
    position: "ST",
    statistics: { overall: 82, pace: 88, shooting: 78, passing: 66, dribbling: 82, defending: 32, physical: 72 },
  },
  {
    id: 73,
    name: "Bruno Guimarães",
    team: "Newcastle United",
    nationality: "Brasileira",
    position: "CDM",
    statistics: { overall: 86, pace: 70, shooting: 74, passing: 84, dribbling: 84, defending: 82, physical: 80 },
  },
 
  // ═══════════════════════════════════════════════
  // Galatasaray
  // ═══════════════════════════════════════════════
  {
    id: 74,
    name: "Victor Osimhen",
    team: "Galatasaray",
    nationality: "Nigeriana",
    position: "ST",
    statistics: { overall: 87, pace: 91, shooting: 86, passing: 64, dribbling: 82, defending: 38, physical: 84 },
  },
 
  // ═══════════════════════════════════════════════
  // Atalanta
  // ═══════════════════════════════════════════════
  {
    id: 75,
    name: "Mario Pašalić",
    team: "Atalanta",
    nationality: "Croata",
    position: "CM",
    statistics: { overall: 82, pace: 70, shooting: 78, passing: 78, dribbling: 80, defending: 62, physical: 74 },
  },
  {
    id: 76,
    name: "Ademola Lookman",
    team: "Atalanta",
    nationality: "Nigeriana",
    position: "LW",
    statistics: { overall: 85, pace: 86, shooting: 80, passing: 74, dribbling: 86, defending: 34, physical: 68 },
  },
 
  // ═══════════════════════════════════════════════
  // Sporting CP
  // ═══════════════════════════════════════════════
  {
    id: 77,
    name: "Francisco Trincão",
    team: "Sporting CP",
    nationality: "Portuguesa",
    position: "RW",
    statistics: { overall: 80, pace: 84, shooting: 72, passing: 74, dribbling: 84, defending: 32, physical: 62 },
  },
  {
    id: 78,
    name: "Luis Suárez",
    team: "Sporting CP",
    nationality: "Uruguaia",
    position: "CM",
    statistics: { overall: 79, pace: 72, shooting: 68, passing: 78, dribbling: 76, defending: 58, physical: 68 },
  },
 
  // ═══════════════════════════════════════════════
  // Benfica
  // ═══════════════════════════════════════════════
  {
    id: 79,
    name: "Andreas Schjelderup",
    team: "Benfica",
    nationality: "Norueguesa",
    position: "LW",
    statistics: { overall: 79, pace: 84, shooting: 72, passing: 72, dribbling: 82, defending: 30, physical: 64 },
  },
  {
    id: 80,
    name: "Ángel Di María",
    team: "Benfica",
    nationality: "Argentina",
    position: "RW",
    statistics: { overall: 82, pace: 82, shooting: 78, passing: 82, dribbling: 85, defending: 34, physical: 62 },
  },
 
  // ═══════════════════════════════════════════════
  // Napoli
  // ═══════════════════════════════════════════════
  {
    id: 81,
    name: "Rasmus Højlund",
    team: "Napoli",
    nationality: "Dinamarquesa",
    position: "ST",
    statistics: { overall: 83, pace: 88, shooting: 80, passing: 64, dribbling: 78, defending: 36, physical: 80 },
  },
  {
    id: 82,
    name: "Scott McTominay",
    team: "Napoli",
    nationality: "Escocesa",
    position: "CM",
    statistics: { overall: 82, pace: 70, shooting: 74, passing: 76, dribbling: 72, defending: 78, physical: 84 },
  },
 
  // ═══════════════════════════════════════════════
  // Ajax
  // ═══════════════════════════════════════════════
  {
    id: 83,
    name: "Oscar Gloukh",
    team: "Ajax",
    nationality: "Israelense",
    position: "CAM",
    statistics: { overall: 79, pace: 74, shooting: 74, passing: 80, dribbling: 84, defending: 42, physical: 60 },
  },
  {
    id: 84,
    name: "Brian Brobbey",
    team: "Ajax",
    nationality: "Holandesa",
    position: "ST",
    statistics: { overall: 81, pace: 84, shooting: 76, passing: 62, dribbling: 78, defending: 36, physical: 82 },
  },
 
  // ═══════════════════════════════════════════════
  // Monaco
  // ═══════════════════════════════════════════════
  {
    id: 85,
    name: "Vanderson",
    team: "Monaco",
    nationality: "Brasileira",
    position: "RB",
    statistics: { overall: 80, pace: 88, shooting: 58, passing: 72, dribbling: 78, defending: 74, physical: 74 },
  },
  {
    id: 86,
    name: "Takumi Minamino",
    team: "Monaco",
    nationality: "Japonesa",
    position: "CAM",
    statistics: { overall: 79, pace: 78, shooting: 74, passing: 76, dribbling: 78, defending: 52, physical: 68 },
  },
 
  // ═══════════════════════════════════════════════
  // PSV Eindhoven
  // ═══════════════════════════════════════════════
  {
    id: 87,
    name: "Ismael Saibari",
    team: "PSV Eindhoven",
    nationality: "Marroquina",
    position: "CM",
    statistics: { overall: 80, pace: 82, shooting: 72, passing: 80, dribbling: 83, defending: 60, physical: 68 },
  },
  {
    id: 88,
    name: "Johan Bakayoko",
    team: "PSV Eindhoven",
    nationality: "Belga",
    position: "RW",
    statistics: { overall: 81, pace: 90, shooting: 72, passing: 72, dribbling: 84, defending: 30, physical: 66 },
  },
 
  // ═══════════════════════════════════════════════
  // Marseille
  // ═══════════════════════════════════════════════
  {
    id: 89,
    name: "Pierre-Emerick Aubameyang",
    team: "Marseille",
    nationality: "Gabonesa",
    position: "ST",
    statistics: { overall: 81, pace: 88, shooting: 82, passing: 62, dribbling: 80, defending: 30, physical: 74 },
  },
  {
    id: 90,
    name: "Mason Greenwood",
    team: "Marseille",
    nationality: "Inglesa",
    position: "RW",
    statistics: { overall: 84, pace: 84, shooting: 82, passing: 72, dribbling: 85, defending: 34, physical: 74 },
  },
 
  // ═══════════════════════════════════════════════
  // Eintracht Frankfurt
  // ═══════════════════════════════════════════════
  {
    id: 91,
    name: "Jonathan Burkardt",
    team: "Eintracht Frankfurt",
    nationality: "Alemã",
    position: "ST",
    statistics: { overall: 80, pace: 82, shooting: 78, passing: 62, dribbling: 74, defending: 34, physical: 78 },
  },
  {
    id: 92,
    name: "Omar Marmoush",
    team: "Eintracht Frankfurt",
    nationality: "Egípcia",
    position: "ST",
    statistics: { overall: 84, pace: 84, shooting: 82, passing: 72, dribbling: 84, defending: 36, physical: 74 },
  },
 
  // ═══════════════════════════════════════════════
  // Athletic Club
  // ═══════════════════════════════════════════════
  {
    id: 93,
    name: "Nico Williams",
    team: "Athletic Club",
    nationality: "Espanhola",
    position: "LW",
    statistics: { overall: 86, pace: 93, shooting: 74, passing: 76, dribbling: 88, defending: 34, physical: 68 },
  },
  {
    id: 94,
    name: "Oihan Sancet",
    team: "Athletic Club",
    nationality: "Espanhola",
    position: "CAM",
    statistics: { overall: 82, pace: 74, shooting: 78, passing: 78, dribbling: 80, defending: 56, physical: 72 },
  },
  {
    id: 95,
    name: "Robert Navarro",
    team: "Athletic Club",
    nationality: "Espanhola",
    position: "LW",
    statistics: { overall: 78, pace: 84, shooting: 70, passing: 72, dribbling: 82, defending: 34, physical: 66 },
},

  // ═══════════════════════════════════════════════
  // Villarreal
  // ═══════════════════════════════════════════════
{
    id: 96,
    name: "Dani Parejo",
    team: "Villarreal",
    nationality: "Espanhola",
    position: "CDM",
    statistics: { overall: 83, pace: 56, shooting: 70, passing: 87, dribbling: 78, defending: 76, physical: 70 },
},
{
    id: 97,
    name: "Nicolas Pépé",
    team: "Villarreal",
    nationality: "Marfinense",
    position: "RW",
    statistics: { overall: 79, pace: 84, shooting: 76, passing: 70, dribbling: 84, defending: 30, physical: 70 },
},
];

export const findAllPlayers = async (): Promise<PlayerModel[]> => {
    return database;
}

export const findPlayerById = async (id: number): Promise<PlayerModel | undefined> => {
    return database.find(player => player.id === id);
}

export const insertPlayer = async (player: PlayerModel) => {
    database.push(player);
}

export const deleteOnePlayer = async (id: number) => {
    const index = database.findIndex(p => p.id === id);

    if (index !== -1) {
      database.splice(index, 1);
      return true;
    } 

    return false;
}

export const findAndModifyPlayer = async (id: number, statistics: StatisticsModel): Promise<PlayerModel> => {
  const playerIndex = database.findIndex(p => p.id === id);

  if (playerIndex !== -1){
    database[playerIndex].statistics = statistics;
  }

  return database[playerIndex]
}