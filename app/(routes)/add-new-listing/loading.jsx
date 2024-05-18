import { Loader } from "lucide-react"

const loading = () => {
  return (
    <div className=" flex items-center justify-center">
        <Loader size={24} className=" animate-spin"/>
        <h1 className="font-bold text-2xl">Loading...</h1>
    </div>
  )
}

export default loading