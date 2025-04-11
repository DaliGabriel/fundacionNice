"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { LoginForm as Form } from "./";

export const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        router.push("/admin/dashboard");
      } else {
        setError("Invalid credentials");
      }
    } catch {
      setError("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Form.Layout>
      <Form.Header>Admin Login</Form.Header>
      <Form.Form onSubmit={handleSubmit}>
        <Form.ErrorMessage message={error} />
        <Form.FormFields
          username={username}
          password={password}
          onUsernameChange={setUsername}
          onPasswordChange={setPassword}
        />
        <Form.SubmitButton isLoading={isLoading} />
      </Form.Form>
    </Form.Layout>
  );
};
