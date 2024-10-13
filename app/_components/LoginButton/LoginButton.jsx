"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function LoginButton() {
    const { data: session, status } = useSession();

    if (typeof window !== "undefined") {
        // Збереження поточного шляху перед входом або виходом
        if (!session) {
            localStorage.setItem("redirectAfterLogin", window.location.href);
        } else {
            localStorage.setItem("redirectAfterLogout", window.location.href);
        }
    }

    const redirectUrlAfterLogin = localStorage.getItem("redirectAfterLogin") || "/";
    const redirectUrlAfterLogout = localStorage.getItem("redirectAfterLogout") || "/";

    if (status === "loading") {
        return null; // Показати лоадер або нічого, поки дані завантажуються
    }

    if (status === "unauthenticated") {
        return (
            <Link href={`/api/auth/signin?callbackUrl=${encodeURIComponent(redirectUrlAfterLogin)}`}>
                Авторизуватися
            </Link>
        );
    }

    if (session) {
        // Після входу видаляємо URL для уникнення циклічного перенаправлення
        localStorage.removeItem("redirectAfterLogin");

        return (
            <div className="flex gap-2">
                <Avatar>
                    <AvatarImage src={session?.user?.image} />
                    <AvatarFallback>{session?.user?.name?.charAt(0)}</AvatarFallback>
                </Avatar>
                <Link href={`/api/auth/signout?callbackUrl=${encodeURIComponent(redirectUrlAfterLogout)}`}>
                    Вийти з акаунта
                </Link>
                <p>Вітаємо, {session?.user?.name}</p>
            </div>
        );
    }
}
