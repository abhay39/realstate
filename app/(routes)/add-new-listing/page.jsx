"use client"
import { Loader, MapPin } from "lucide-react"
import GooglePlacesAutoCompletePage from '../../../components/GooglePlacesAutoCompletePage';
import { useState } from "react";
import Link from "next/link";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";


const page = () => {

  const [address, setAddress] = useState('');
  const [coordinates, setCoordinate] = useState({});
  const {user}=useUser();
  const router=useRouter();
  const [loading,setLoader]=useState(false);

  console.log(process.env.NEXT_PUBLIC_API_URL)

  const addListing=async()=>{
    setLoader(true);
    const res=await fetch(`${process.env.NEXT_PUBLIC_API_URL}/listings/add-new-listing`,{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        address,
        coordinates,
        createdBy:user?.primaryEmailAddress?.emailAddress
      })
    })
    const status=res.status;
    const data=await res.json();
    if(status===201){
      toast.success("Listing added successfully!!!")
      router.push(`/edit-listing/${data._id}`)
    }else{
      toast.error("Server side error!!")
    }
    setLoader(false)
  }

  return (
    <section className=" flex justify-center flex-col items-center gap-5 py-7 px-7" >
      <h1 className=" font-bold text-2xl">Add New Listing</h1>
      <div className=" shadow-md px-8 py-4">
        <h1 className=" text-center">Enter address which you want to list</h1>
        <div className=" flex items-center">
          <div className=" bg-blue-400 p-2 rounded-sm  text-white "><MapPin /></div>
          <GooglePlacesAutoCompletePage setAddress={setAddress} setCoordinate={setCoordinate} />
        </div>
        {
          address && <button onClick={addListing}  className=" bg-buttons p-2 rounded-md flex items-center justify-center text-white w-full mt-3">{
            loading? (<Loader className=" animate-spin"/>) :("Next")
          }</button>
        }
      </div>
    </section>
  )
}

export default page