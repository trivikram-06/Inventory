"use client"

import { useEffect, useState } from "react"

export default function Home() {

const [products,setProducts]=useState<any[]>([])

async function loadProducts(){

const res=await fetch("/api/products")

const data=await res.json()

setProducts(data)

}

useEffect(()=>{

loadProducts()

},[])

async function reserve(product:any){

alert(

`Reserved ${product.name}`

)

}

return(

<div className="p-8 bg-gray-100 min-h-screen">

<h1 className="text-5xl font-bold mb-8">

Inventory System

</h1>

<div className="space-y-5">

{

products.map((item)=>(

<div

key={item.id}

className="bg-white p-6 rounded-lg border shadow"

>

<h2 className="text-2xl font-bold">

{item.name}

</h2>

<p className="mt-2">

Stock:

{

item.stocks[0]

?.totalUnits || 0

}

</p>

<p>

Reserved:

{

item.stocks[0]

?.reservedUnits || 0

}

</p>

<button

onClick={()=>

reserve(item)

}

className="bg-blue-500 text-white px-4 py-2 rounded mt-4"

>

Reserve Item

</button>

</div>

))

}

</div>

</div>

)

}