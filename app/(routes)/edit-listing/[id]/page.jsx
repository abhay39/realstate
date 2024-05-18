"use client"
import { useUser } from "@clerk/nextjs"
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const page = ({ params }) => {
  const { user } = useUser();
  const router = useRouter();
  const [data,setData]=useState({})

  const verifyingUser = async () => {
    let res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/listings/userListing/${user?.primaryEmailAddress?.emailAddress}/${params.id}`)
    const status = res.status;
    let data = await res.json();
    if (status !== 200) {
      router.replace("/")
    }
  }

  const hanldeChnage=(e)=>{
    setData({
      ...data,
      [e.target.name]:e.target.value
    })
  }

  const updateListing=async()=>{
    let res= await fetch(`${process.env.NEXT_PUBLIC_API_URL}/listings/update-listing/${params.id}/${user?.primaryEmailAddress?.emailAddress}`,{
      method:'PUT',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(data)
    })
    const status= res.status;
    res= await res.json();
    if(status===200){
      toast.success(res.message)
      router.replace("/")
    }else{
      toast.error(res.message)
    }
  }

  useEffect(() => {
    verifyingUser()
  }, [user])

  return (
    <div className=" mx-10 md:mx-20 lg:mx-24 my-6">
      <h2 className=" font-bold text-2xl">Enter some more details about your listing</h2>
      <div className=" shadow-md p-3 rounded-md">
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <h1 className=" font-medium">Do you want to Rent or Sell it?</h1>
            <div className=" flex gap-2 mt-2 items-center">
              <input type="radio" onChange={hanldeChnage} name="type" value="rent" id="" />
              <label className=" font-bold " htmlFor="">Rent</label>
            </div>
            <div className=" flex gap-2 mt-2 items-center">
              <input type="radio" onChange={hanldeChnage} name="type" value="sell" id="" />
              <label className=" font-bold " htmlFor="">Sell</label>
            </div>
          </div>
          <div>
            <h1 className=" font-medium">Property Type?</h1>
            <select onChange={hanldeChnage} className=" bg-slate-200 rounded-md p-2" name="propertyType" id="">
              <option selected  value="Single Family House">Single Family House</option>
              <option  value="Joint Family House">Joint Family House</option>
              <option  value="Land">Land</option>
            </select>
          </div>
        </div>


        <div className=" mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 w-full">
          <div>
            <h1 className=" font-medium">Bedroom</h1>
            <input onChange={hanldeChnage} type="number" name="bedroom" placeholder="Ex.2" className=" bg-slate-100 rounded-sm p-2 outline-none"/>
          </div>
          <div>
            <h1 className=" font-medium">Bathroom</h1>
            <input onChange={hanldeChnage} type="number" name="bedroom" placeholder="Ex.2" className=" bg-slate-100 rounded-sm p-2 outline-none"/>
          </div>
          <div>
            <h1 className=" font-medium">Built In</h1>
            <input onChange={hanldeChnage} type="number" name="builtIn" placeholder="Ex.1900 Sq. ft" className=" bg-slate-100 rounded-sm p-2 outline-none"/>
          </div>
          <div>
            <h1 className=" font-medium">Parking</h1>
            <input onChange={hanldeChnage} type="number" name="parking" placeholder="Ex.2" className=" bg-slate-100 rounded-sm p-2 outline-none"/>
          </div>
          <div>
            <h1 className=" font-medium">Lot Size (Sq.Ft.)</h1>
            <input onChange={hanldeChnage} type="number" name="lotSize" placeholder="Ex.1900 Sq. ft" className=" bg-slate-100 rounded-sm p-2 outline-none"/>
          </div>
          <div>
            <h1 className=" font-medium">Area (Sq.Ft.)</h1>
            <input onChange={hanldeChnage} type="number" name="area" placeholder="Ex.1900 Sq. ft" className=" bg-slate-100 rounded-sm p-2 outline-none"/>
          </div>
          <div>
            <h1 className=" font-medium">Selling Price</h1>
            <input onChange={hanldeChnage} type="number" name="price" placeholder="Ex.400000" className=" bg-slate-100 rounded-sm p-2 outline-none"/>
          </div>
          <div>
            <h1 className=" font-medium">HOA &#8377;.(Per Month) </h1>
            <input onChange={hanldeChnage} type="number" name="hoa" placeholder="Ex.1200" className=" bg-slate-100 rounded-sm p-2 outline-none"/>
          </div>
        </div>
        <div className=" mt-4">
        <h1 className=" font-medium">Description </h1>
          <textarea onChange={hanldeChnage} name="description" className=" w-full outline-none bg-slate-100 p-2" rows={6} id=""></textarea>
        </div>
        <div className=" mt-2 flex items-end justify-end gap-4">
          <button className=" p-2 w-[150px] rounded-md border-[1px] border-slate-500">Save</button>
          <button onClick={updateListing} className=" bg-buttons w-[150px] p-2 rounded-md text-white">Save & Finish</button>
        </div>

      </div>
    </div>
  )
}

export default page