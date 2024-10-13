import { toast } from "@/components/ui/use-toast"; // Переконайтесь, що правильний стиль імпорту

export const handleForm = async (event) => {
    event.preventDefault();

    const formData = {
        services, // Переконайтесь, що `services` і `doctor` визначені
        doctor,
        email: session?.user?.email // Переконайтесь, що `session` доступний
    };

    try {
        const response = await fetch(`/api/submit-form`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        });

        if (response.ok) {
            toast({
                title: "Success",
                description: "Form submitted successfully"
            });
        } else {
            toast({
                title: "Error",
                description: "Form submission failed. Status: " + response.status
            });
        }

    } catch (error) {
        toast({
            title: "Error",
            description: "An error occurred: " + error.message
        });
    }
};
