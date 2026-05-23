import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function GET() {

 const products =
 await prisma.product.findMany({

  include:{

   stocks:true

  }

 })

 return Response.json(products)

}