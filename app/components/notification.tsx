import { useEffect } from "react";

export default function Notification({ onClose }: { onClose: () => void }) {
  useEffect(() => {
    setTimeout(() => {
      onClose();
    }, 10000);
  }, []);

  return (
    <div className="fixed right-[1rem] top-[1rem] w-[20rem] bg-white z-[999] flex items-cente p-4 rounded-md">
      <div className="icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 14 14"
        >
          <g
            fill="none"
            // stroke="#0ae448"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m4 8l2.05 1.64a.48.48 0 0 0 .4.1a.5.5 0 0 0 .34-.24L10 4" />
            <circle cx="7" cy="7" r="6.5" />
          </g>
        </svg>
      </div>
      <div className="notif-text pl-2">
        Thanks for reaching out. I will be in touch shortly.
      </div>
    </div>
  );
}
