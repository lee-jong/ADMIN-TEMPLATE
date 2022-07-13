import { useState } from "react";

export default function Test() {
  const [count2, setCount2] = useState<number>(0);
  return [count2, setCount2];
}
