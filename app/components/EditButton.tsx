"use client";

import { EditIcon, Loader } from "lucide-react";
import { useFormStatus } from "react-dom";

export default function EditButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="bg-gray-700 rounded-full w-9 h-9 p-2 transition-all hover:text-green-500"
    >
      {pending ? (
        <Loader className="w-5 h-5 text-green-400 animate-spin" />
      ) : (
        <EditIcon className="w-5 h-5" />
      )}
    </button>
  );
}
