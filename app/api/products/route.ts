import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export const dynamic = "force-dynamic"

export async function GET() {

try{

const products =
await prisma.product.findMany({

include:{
stocks:true
}

})

return Response.json(products)

}catch(error){

console.log(error)

return Response.json([])

}

}