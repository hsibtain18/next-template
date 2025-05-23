import { useEffect, useState } from "react";

export default function FullScreenLoader() {
    const [visible, setVisible] = useState(true);
  
    useEffect(() => {
      // Simulate loading (e.g., API, images)
      const timer = setTimeout(() => {
        setVisible(false);
      }, 3000); // adjust time as needed
  
      return () => clearTimeout(timer);
    }, []);
  
    if (!visible) return null;
  
    return (
        <div className="flex gap-1 text-white text-4xl font-bold tracking-widest">
        {[..."LOADING"].map((char, i) => (
          <span
            key={i}
            className="animate-bounce"
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            {char}
          </span>
        ))}
      </div>
    );
  }