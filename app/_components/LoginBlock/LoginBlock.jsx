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


export default function LoginBlock({ params }) {
    const [service, setService] = useState(""); 
    const { toast } = useToast();
    const { doctor: doc, numberPhone } = useDoctorStore();
    const { selectedPrices } = useStore();
    const [error, setError] = useState(""); // Додаємо стан для перевірки помилок телефону
    const [lastSubmitTime, setLastSubmitTime] = useState(null); // Зберігаємо час останньої відправки форми

    const handleSubmit = async (event) => {
        event.preventDefault();

        const currentTime = new Date().getTime(); // Поточний час

        // Перевіряємо час від останньої відправки
        if (lastSubmitTime && currentTime - lastSubmitTime < 60000) { // Якщо пройшло менше 1 хвилини
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
            email: "user@example.com", // Можна замінити на вхідний email, якщо потрібно
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
        }
    };

    return (
        <form onSubmit={handleSubmit} className="gap-2">
            <div className="flex gap-4 p-1 bg-[#e6fdf3] rounded-[10px]">
                <Avatar>
                    <AvatarImage src="/default-avatar.png" />
                    <AvatarFallback>Л</AvatarFallback>
                </Avatar>
                <p>Вітаємо, користувач!</p>
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
            <Button type="submit" className="btn-primary mt-4">
                Відправити
            </Button>
        </form>
    );
}
