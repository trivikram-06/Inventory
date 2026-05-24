import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export const dynamic = "force-dynamic"

export async function GET(){

try{

const warehouses=
await prisma.warehouse.findMany()

return Response.json(
warehouses
)

}catch{

return Response.json([])

}

}