import { useState } from "react";

export function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);
  return [
    {
      value,
      onChage: (e) => setValue(e.target.value),
    },
    () => setValue(initialValue),
  ];
}
