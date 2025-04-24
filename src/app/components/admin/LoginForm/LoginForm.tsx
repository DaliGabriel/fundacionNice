"use client";

import { useState } from "react";
import { LoginForm as Form } from "./";
import { useAuth } from "../../../../lib/hooks/useAuth";

export const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isLoading } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await login({ username, password });
  };

  return (
    <Form.Layout>
      <Form.Header>Admin Login</Form.Header>
      <Form.Form onSubmit={handleSubmit}>
        <Form.ErrorMessage message={error || ""} />
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
