"use client"

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useToast } from "@/components/ui/use-toast";
import { useSubmitForm } from "@/app/hooks/useSubmitForm";
import DoctorInput from "../doctorInput/doctorInput";
import useDoctorStore from "@/app/store/useDoctorStore";
import useStore from "@/app/store/store";
import PriceItemCart from "../PriceItemCart/PriceItemCart";
import { InputPhone } from "../InputPhone/InputPhone";
import { Button } from "@/components/ui/button";

export default function LoginBlock({ params }) {
    const { data: session, status } = useSession();
    const [service, setService] = useState(""); 
    const { toast } = useToast();
    const { doctor: doc, numberPhone } = useDoctorStore();
    const { selectedPrices } = useStore();
    const [error, setError] = useState(""); // Додаємо стан для перевірки помилок телефону

    useEffect(() => {
        if (session) {
            localStorage.setItem("redirectAfterLogout", window.location.href);
            localStorage.removeItem("redirectAfterLogin");
        } else {
            localStorage.setItem("redirectAfterLogin", window.location.href);
        }
    }, [session]);

    const redirectUrlAfterLogin = typeof window !== "undefined" ? localStorage.getItem("redirectAfterLogin") || "/" : "/";
    const redirectUrlAfterLogout = typeof window !== "undefined" ? localStorage.getItem("redirectAfterLogout") || "/" : "/";

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Перевіряємо чи є помилка номера телефону
        if (numberPhone.replace(/\D/g, "").length !== 12) {
            toast({
                title: "Будь ласка, введіть повний номер телефону",
                description: error.message,
                
            });
            return;
        } else {
            setError(""); // Видаляємо помилку, якщо все добре
        }

        const formData = {
            service: selectedPrices || " ",
            doctor: doc || null,
            email: session?.user?.email,
            numberPhone
        };
        
        try {
            const response = await fetch('/api/sendEmail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                toast({
                    title: "Вітаємо!",
                    description: "Форма відправлена успішно!",
                    className: "bg-blue-500 text-white"
                });
                setService("");
            } else {
                throw new Error("Помилка");
            }
        } catch (error) {
            toast({
                title: "Щось пішло не так. Спробуйте ще",
                description: error.message,
                variant: "success"
            });
        }
    };

    if (status === "loading") {
        return null;
    }

    if (status === "unauthenticated") {
        return (
            <Link href={`/api/auth/signin?callbackUrl=${encodeURIComponent(redirectUrlAfterLogin)}`}>
                Авторизуватися
            </Link>
        );
    }

    if (session) {
        return (
            <form onSubmit={handleSubmit} className="gap-2">
                <div className="flex gap-4 p-1 bg-[#e6fdf3] rounded-[10px]">
                    <Avatar>
                        <AvatarImage src={session?.user?.image} />
                        <AvatarFallback>{session?.user?.name?.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <p>Вітаємо, {session?.user?.name}</p>
                </div>
                <div className="gap-2 mt-5 flex flex-col">
                    <div className=" gap-2">
                      {doc&&<span className="font-bold">Лікар:</span>}
                        <DoctorInput params={params} />
                    </div>
                    {selectedPrices.length > 0 && (
                        <div className="gap-2">
                            <span className="font-bold">Обрані послуги:</span>
                            {selectedPrices.map((price, index) => (
                                <PriceItemCart key={index} price={price} />
                            ))}
                        </div>
                    )}


                        <span className="font-bold">Введіть номер телефону:</span>
                   
                    <InputPhone />
                    
                </div>
                {error && <p style={{ color: "red" }}>{error}</p>}
                <Button type="submit" className="btn-primary mt-4">
                    Відправити
                </Button>
               
            </form>
        );
    }

    return null;
}
