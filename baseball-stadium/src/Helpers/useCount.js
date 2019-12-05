import React, { useState } from "react";

export default function useCount(initial = 0, step = 1, max) {
  const [count, setCount] = useState(initial);

  const increment = e => setCount(count + step);

  if (count > max) {
    setCount(0);
  }

  return [count, increment];
}
