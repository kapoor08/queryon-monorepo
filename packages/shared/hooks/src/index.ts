import { useState } from "react";

export function useExampleHook(initialValue: string) {
  const [value, setValue] = useState(initialValue);
  return { value, setValue };
}
