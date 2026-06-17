import fastify from "fastify";
import cors from "@fastify/cors";

const server = fastify({ logger: true });

server.register(cors, {
    origin: "www.dio.me"
})

const teams = [
    { id: 1, name: "McLaren", base: "Woking, Reino Unido" },
    { id: 2, name: "Mercedes", base: "Brackley, Reino Unido" },
    { id: 3, name: "Red Bull Racing", base: "Milton Keynes, Reino Unido" },
    { id: 4, name: "Ferrari", base: "Maranello, Itália" },
    { id: 5, name: "Williams", base: "Grove, Reino Unido" },
    { id: 6, name: "Racing Bulls", base: "Faenza, Itália" },
    { id: 7, name: "Aston Martin", base: "Silverstone, Reino Unido" },
    { id: 8, name: "Haas", base: "Kannapolis, EUA" },
    { id: 9, name: "Audi", base: "Hinwil, Suíça" },
    { id: 10, name: "Alpine", base: "Enstone, Reino Unido" },
    { id: 11, name: "Cadillac", base: "Fishers, EUA" },
]

const drivers = [
    { id: 1, name: "Lando Norris", team: "McLaren", country: "Reino Unido" },
    { id: 2, name: "Oscar Piastri", team: "McLaren", country: "Austrália" },
    { id: 3, name: "George Russell", team: "Mercedes", country: "Reino Unido" },
    { id: 4, name: "Kimi Antonelli", team: "Mercedes", country: "Itália" },
    { id: 5, name: "Max Verstappen", team: "Red Bull Racing", country: "Países Baixos" },
    { id: 6, name: "Isack Hadjar", team: "Red Bull Racing", country: "França" },
    { id: 7, name: "Charles Leclerc", team: "Ferrari", country: "Mônaco" },
    { id: 8, name: "Lewis Hamilton", team: "Ferrari", country: "Reino Unido" },
    { id: 9, name: "Alex Albon", team: "Williams", country: "Tailândia" },
    { id: 10, name: "Carlos Sainz", team: "Williams", country: "Espanha" },
    { id: 11, name: "Liam Lawson", team: "Racing Bulls", country: "Nova Zelândia" },
    { id: 12, name: "Arvid Lindblad", team: "Racing Bulls", country: "Reino Unido" },
    { id: 13, name: "Fernando Alonso", team: "Aston Martin", country: "Espanha" },
    { id: 14, name: "Lance Stroll", team: "Aston Martin", country: "Canadá" },
    { id: 15, name: "Esteban Ocon", team: "Haas", country: "França" },
    { id: 16, name: "Oliver Bearman", team: "Haas", country: "Reino Unido" },
    { id: 17, name: "Nico Hulkenberg", team: "Audi", country: "Alemanha" },
    { id: 18, name: "Gabriel Bortoleto", team: "Audi", country: "Brasil" },
    { id: 19, name: "Pierre Gasly", team: "Alpine", country: "França" },
    { id: 20, name: "Franco Colapinto", team: "Alpine", country: "Argentina" },
    { id: 21, name: "Valtteri Bottas", team: "Cadillac", country: "Finlândia" },
    { id: 22, name: "Sergio Perez", team: "Cadillac", country: "México" },
]

server.get("/teams", async (request, response) => {
    response.type("application/json").code(200);

    return { teams };
});

server.get("/drivers", async (request, response) => {
    response.type("application/json").code(200);

    return { drivers };
});

interface DriverParams{
    id: string
}

server.get<{Params: DriverParams}>("/drivers/:id", async (request, response) => {
    const id = parseInt(request.params.id);
    const driver = drivers.find((d) => d.id === id);

    if (!driver){
        response.type("application/json").code(400);
        return { message: "Driver Not Found"}
    } else {
        response.type("application/json").code(200);
        return { driver };
    }
})

server.listen({ port: 3333 }, () => {
    console.log("Server init");
});