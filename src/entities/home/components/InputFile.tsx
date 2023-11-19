import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { subtitles } from "@/ui/fonts";

type InputProps = {
  list?: string;
  label?: string;
  placeholder?: string;
  id: string;
  className: string;
  type: string;
};
export function InputFile({ list, label, placeholder, id, className, type }: InputProps) {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor={id} className={`${subtitles.className} text-sm`}>
        {label}
      </Label>
      <Input
        list={list}
        id={id}
        type={type}
        placeholder={placeholder}
        className={`${subtitles.className} ${className}`}
        required={true}
      />
    </div>
  );
}
