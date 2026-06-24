import { Router } from "express";
import { deletePlayer, getPlayer, getPlayerById, postPlayer, updatePlayer } from "./controllers/players-controller";
import { getClubs } from "./controllers/clubs-controller";

const router = Router()

// Players
router.get("/players", getPlayer)
router.get("/players/:id", getPlayerById)

router.post("/players", postPlayer)

router.delete("/players/:id", deletePlayer)

router.patch("players/:id", updatePlayer)

// Clubs
router.get("/clubs", getClubs)

export default router