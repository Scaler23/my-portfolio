import { useEffect, useState } from "react";

const Typewriter = ({
  text,
  speed = 100,
  pause = 1000, // pause before deleting
}: {
  text: string;
  speed?: number;
  pause?: number;
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        setDisplayedText(text.substring(0, index + 1));
        setIndex((prev) => prev + 1);
        if (index + 1 === text.length) {
          setTimeout(() => setIsDeleting(true), pause);
        }
      } else {
        // Deleting
        setDisplayedText(text.substring(0, index - 1));
        setIndex((prev) => prev - 1);
        if (index === 0) {
          setIsDeleting(false);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [index, isDeleting, text, speed, pause]);

  return <span>{displayedText}</span>;
};

export default Typewriter;