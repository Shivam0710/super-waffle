"use client"
import { getCookie, setCookie } from "cookies-next"
import LoginUI from "@/components/LoginUI"
import { useRouter } from "next/navigation"

export default function Login() {
    const router = useRouter()
    const handleLogin = (userName: string, password: string) => {
        console.log(userName, password)
        if(userName === process.env.NEXT_PUBLIC_ADMIN_USERNAME && password === process.env.NEXT_PUBLIC_ADMIN_PASSWORD) {
            setCookie("isAuthenticated", "true")
            router.push("/admin")
        } else {
            alert("Invalid username or password")
        }
    }

    return (
        <div className='h-screen w-screen flex justify-center'>
            <LoginUI handleLogin={handleLogin} />
        </div>
    )
}