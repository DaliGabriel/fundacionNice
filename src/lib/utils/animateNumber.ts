import { useEffect, useState } from "react";

const animateDigits = (template: string, currentNumber: number): string => {
  const digits = currentNumber
    .toString()
    .padStart(template.replace(/[^0-9]/g, "").length, "0");
  let digitIndex = 0;

  // Replace each digit in the template while preserving other characters
  return template.replace(/\d/g, () => digits[digitIndex++] || "0");
};

export const useAnimateNumber = (
  targetValue: string,
  duration: number = 2000
) => {
  const [currentValue, setCurrentValue] = useState(
    targetValue.replace(/\d/g, "0")
  );

  useEffect(() => {
    // Get only the numeric part to calculate the target
    const numericPart = targetValue.replace(/[^0-9]/g, "");
    const targetNumber = parseInt(numericPart);

    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const currentNumber = Math.floor(progress * targetNumber);
      setCurrentValue(animateDigits(targetValue, currentNumber));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [targetValue, duration]);

  return currentValue;
};
