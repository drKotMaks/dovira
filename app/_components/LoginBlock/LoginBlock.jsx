"use client";

import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { useSubmitForm } from "@/app/hooks/useSubmitForm";
import DoctorInput from "../doctorInput/doctorInput";
import useDoctorStore from "@/app/store/useDoctorStore";
import useStore from "@/app/store/store";
import PriceItemCart from "../PriceItemCart/PriceItemCart";
import { InputPhone } from "../InputPhone/InputPhone";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { setting } from "@/lib/setting";


export default function LoginBlock({ params }) {
    const [service, setService] = useState(""); 
    const { toast } = useToast();
    const { doctor: doc, numberPhone } = useDoctorStore();
    const { selectedPrices } = useStore();
    const [error, setError] = useState(""); // Додаємо стан для перевірки помилок телефону
    const [lastSubmitTime, setLastSubmitTime] = useState(null); // Зберігаємо час останньої відправки форми
    const [ isLoading, setIsLoading ] = useState(false); // Додаємо стан для індикатора завантаження

    const handleSubmit = async (event) => {
        event.preventDefault();

        const currentTime = new Date().getTime(); // Поточний час

        // Перевіряємо час від останньої відправки
        if (lastSubmitTime && currentTime - lastSubmitTime < 6000) { // Якщо пройшло менше 1 хвилини
            toast({
                title: "Зачекайте хвилину",
                description: "Ви можете відправити форму не частіше, ніж раз на хвилину.",
                variant: "destructive"
            });
            return;
        }

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
                email: setting.email, // Можна замінити на вхідний email, якщо потрібно
                numberPhone
            };

        try {
            setIsLoading(true); // 👈 показати індикатор
            const response = await fetch('/api/sendEmail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            

            if (response.ok) {
                    console.log("Відправка даних в n8n? route:", data); 
                    // Перевіряємо, чи є дані у відповіді
                    const message = Array.isArray(data) ? data[0]?.output : data?.message?.output;
                    //console.log("full", message);


                    toast({
                            title: "Чекайте за дзвінок від адміністратора",
                            description: message,
                            className: "bg-blue-500 text-white",
                            duration: 60000, 
            
                        });
                        setService("");
                        setLastSubmitTime(currentTime); // Оновлюємо час останньої відправки
                    } else {
                        throw new Error("Помилка");
                    }
                    } catch (error) {
                        toast({
                            title: "Щось пішло не так. Спробуйте ще",
                            description: error.message,
                            variant: "success"
                        });
                    } finally {
                        setIsLoading(false); // 👈 сховати індикатор
                    }
                };

    return (
        <form onSubmit={handleSubmit} className="gap-2">
            <div className="flex gap-4 p-1 bg-[#e6fdf3] rounded-[10px]">
                <Avatar>
                    <AvatarImage src="/default-avatar.png" />
                    <AvatarFallback>D</AvatarFallback>
                </Avatar>
                <p>Відправте запит, AI знайде для вас ідеальний варіант</p>
            </div>
            <div className="gap-2 mt-5 flex flex-col">
                <div className=" gap-2">
                    {doc && <span className="font-bold">Лікар:</span>}
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
                <Button type="submit" className="btn-primary mt-4" disabled={isLoading}>
                        {isLoading ? "AI шукає вільний час... ~ 10 сек" : "Відправити..."}
                </Button>
        </form>
    );
}
