"use client";

import { Loader, ShieldAlert } from "lucide-react";
import { useRef } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { create } from "../actions";

export default function FormElem() {
  const formRef = useRef<HTMLFormElement>(null);
  const [state, formAction] = useFormState(create, null);

  function SubmitButton() {
    const { pending } = useFormStatus();
    return (
      <button
        type="submit"
        className="p-2 px-7 bg-emerald-700 rounded-md transition-all hover:bg-emerald-600"
      >
        {pending ? <Loader className="w-5 h-5 animate-spin" /> : "Add"}
      </button>
    );
  }
  return (
    <div>
      <form
        action={async (formData: FormData) => {
          formAction(formData);
          formRef.current?.reset();
        }}
        ref={formRef}
        className="m-auto flex gap-2"
      >
        <input
          type="text"
          name="input"
          placeholder="Enter your task"
          className="autofill:select-transparent outline-none bg-gray-700 rounded-md p-2"
        />
        <SubmitButton />
      </form>

      {state && (
        <p className="text-red-400 text-sm m-2 flex items-center gap-1">
          <ShieldAlert className="w-4 h-4" />
          {state as string}
        </p>
      )}
    </div>
  );
}
