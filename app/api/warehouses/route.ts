import { PrismaClient } from "@prisma/client"

export const dynamic = "force-dynamic"

const prisma = new PrismaClient()

export async function GET(){

try{

const warehouses =
await prisma.warehouse.findMany()

return Response.json(
warehouses
)

}catch{

return Response.json([])

}

}