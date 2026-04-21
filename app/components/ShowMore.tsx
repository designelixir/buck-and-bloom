// ShowMore.tsx
import { useState } from "react";

type ShowMoreProps = {
  title: string;
  defaultOpen?: boolean;
  children: React.ReactNode;
};

export default function ShowMore({ title, defaultOpen = false, children }: ShowMoreProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="full-width">
        <button onClick={() => setOpen(prev => !prev)} aria-expanded={open} className="no-style-button" > {title} + </button>
      
        
      {open && (
        <div style={{
          padding: "16px",
          borderTop: "0.5px solid var(--color-border-tertiary, #e0e0e0)",
        }}>
          {children}
        </div>
      )}
    </div>
  );
}