import { PrismaClient } from "@prisma/client"

export const dynamic = "force-dynamic"

const prisma = new PrismaClient()

export async function POST(req: Request){

try{

const body = await req.json()

const reservation =
await prisma.reservation.create({

data:{

productId:
body.productId,

warehouseId:
body.warehouseId,

quantity:
body.quantity,

status:"PENDING",

expiresAt:
new Date(
Date.now()+
5*60*1000
)

}

})

return Response.json(
reservation
)

}catch(error){

console.log(error)

return Response.json(
{message:"Error"},
{status:500}
)

}

}