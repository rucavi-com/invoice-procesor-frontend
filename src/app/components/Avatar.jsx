"use client";

import Image from "next/image";
import { useState } from "react";

export default function Avatar({ avatarUrl, username = "Usuario" }) {
  const [hasError, setHasError] = useState(false);

  const initials = username
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  const showFallback = hasError || !avatarUrl;

  return (
    <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200 text-gray-600 flex items-center justify-center text-sm font-semibold shadow-md border border-gray-300">
      {showFallback ? (
        <span>{initials}</span>
      ) : (
        <Image
          src={avatarUrl}
          alt={`Avatar de ${username}`}
          width={40}
          height={40}
          className="object-cover w-full h-full"
          onError={() => setHasError(true)}
        />
      )}
    </div>
  );
}
