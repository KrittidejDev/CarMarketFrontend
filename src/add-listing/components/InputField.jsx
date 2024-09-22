import { Input } from "@/components/ui/input";
import React from "react";

function InputField({ item, handleInputChange }) {
  return (
    <div>
      <Input
        className="rounded-full"
        type={item?.fieldType}
        name={item?.name}
        required={item.required}
        onChange={(e) => handleInputChange(item.name, e.target.value)}
      />
    </div>
  );
}

export default InputField;
