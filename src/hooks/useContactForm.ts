import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { ContactPayload, contactSchema } from "lib/validation";
import { ContactStatus } from "types/state";

const endpoint = process.env.REACT_APP_FORMSPREE_ENDPOINT || process.env.VITE_FORMSPREE_ENDPOINT || "https://formspree.io/f/xeevvlro";

export const useContactForm = () => {
  const [status, setStatus] = useState<ContactStatus>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const form = useForm<ContactPayload>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", message: "" },
  });

  const onSubmit = form.handleSubmit(async (values) => {
    if (!endpoint) {
      setStatus("error");
      setErrorMessage("Missing Formspree endpoint.");
      return;
    }
    try {
      setStatus("submitting");
      setErrorMessage(null);
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(values),
      });
      if (!response.ok) throw new Error("Failed to submit form");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMessage("submit_failed");
    }
  });

  return { form, status, errorMessage, onSubmit, setStatus };
};
