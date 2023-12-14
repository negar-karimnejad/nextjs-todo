"use client";

import { Loader, Trash2 } from "lucide-react";
import { useFormStatus } from "react-dom";

export default function DeleteButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className="bg-gray-700 text-white rounded-full w-9 h-9 p-2 ml-1 transition-all hover:text-red-500"
    >
      {pending ? (
        <Loader className="w-5 h-5 text-red-500 animate-spin" />
      ) : (
        <Trash2 className="w-5 h-5" />
      )}
    </button>
  );
}
