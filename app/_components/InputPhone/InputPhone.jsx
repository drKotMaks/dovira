"use client"
import { Input } from "@/components/ui/input";
import { useState } from "react";
import useDoctorStore from "@/app/store/useDoctorStore";
import InputMask from "react-input-mask";
import { useToast } from "@/components/ui/use-toast";

export function InputPhone() {
  const [error, setError] = useState("");
  const { numberPhone, setNumberPhone } = useDoctorStore();
  const { toast } = useToast();

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    setNumberPhone(value);

    // Видаляємо всі символи, що не є цифрами
    const numericValue = value.replace(/\D/g, '');

    // Перевірка на повний ввід номера телефону (12 цифр)
    if (numericValue.length !== 12) {
      setError("Введіть телефон");
    } else {
      setError("");
    }
  };

  
  
  return (
    <div>
      <InputMask
        mask="+38(099)-99-999-99"
        value={numberPhone}
        onChange={handlePhoneChange}
      >
        {(inputProps) => (
          <Input {...inputProps} type="tel" placeholder="Номер телефону" />
        )}
      </InputMask>
      {error && <p style={{ color: "red", margin: "4px"  }}>{error}</p>}
    </div>

  );
}
