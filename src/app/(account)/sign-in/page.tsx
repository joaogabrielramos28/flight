
import Image from "next/image";
import SignInBg from "@assets/signin-bg.jpg";
import { Form } from "./components/Form";

export default function SignInPage() {
    return (
        <main className="w-full flex">
            <section className="flex flex-col bg-white p-4  items-center justify-center w-full max-w-3xl">

                <h1 className="text-black text-2xl font-bold text-center md:text-4xl">Ticketist</h1>

                <Form />

            </section>

            <section className="flex-1 h-screen" >
                <Image className="h-full flex-1 object-cover" src={SignInBg} alt="Festival image" />
            </section>
        </main>
    )
}