import React from "react";
import { Checkbox } from "@/components/ui/checkbox";

function CheckboxField({ item }) {
  return (
    <div>
      <Checkbox name={item.name} />
    </div>
  );
}

export default CheckboxField;
