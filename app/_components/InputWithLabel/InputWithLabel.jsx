import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

// Переконайся, що це експорт за замовчуванням або іменований експорт
export function InputWithLabel({ label, htmlFor, type, placeholder }) {
    return (
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label disabled htmlFor={htmlFor}>{label}</Label>
        <Input value={placeholder} type={type} id={htmlFor} placeholder={placeholder} />
      </div>
    );
  }
  
