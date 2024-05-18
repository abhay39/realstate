"use client"
import { UserButton, useUser } from "@clerk/nextjs"

import { Plus } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"


const links = [
    {
        id: 1,
        name: "For Sale",
        href: "/",
    },
    {
        id: 2,
        name: "For Rent",
        href: "/forRent",
    },
    {
        id: 3,
        name: "Agent Finder",
        href: "/agentFinder",
    },
]

const Navbar = () => {
    const {user,isSignedIn} = useUser();
    const pathname = usePathname();
    return (
        <nav className=" shadow-lg px-10 py-3 flex items-center justify-between">
            <div className=" flex items-center gap-10 ">
                <Link href={"/"}>
                    <Image src="/logo.svg" alt="logo" height={100} width={150} />
                </Link>
                <ul className="hidden md:flex items-center gap-4">
                    {
                        links.map((item) => {
                            return (
                                <Link className={`${pathname === item.href ? " text-buttons" : "text-slate-400"} font-bold `} id={item.id} href={item.href}>{item.name}</Link>
                            )
                        })
                    }
                </ul>
            </div>
            <div className=" flex items-center gap-2">
                {
                    isSignedIn ? (<div className=" flex items-center gap-4">
                        <Link href="/add-new-listing" className=" bg-buttons flex items-center gap-2 p-2 rounded-md text-white"><Plus size={16} /> Post An Ad</Link>

                        <UserButton />
                    </div>) : (<Link href={"/sign-in"}><button className=" border border-slate-600 flex items-center gap-2 p-2 rounded-md ">Login</button></Link>)
                }

            </div>
        </nav>
    )
}

export default Navbar