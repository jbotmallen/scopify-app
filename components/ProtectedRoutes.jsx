"use client";
import React, { useEffect } from "react";
import { redirect } from "next/navigation";
import { UseAuth } from "@/lib/context/AuthContext";

export default function ProtectedRoutes({ Component }) {
  return function ProtectedRoutes({ props }) {
    const { user, loading } = UseAuth();

    useEffect(() => {
      if (!user && loading) {
        return redirect("/auth/sign-in");
      }
    }, [user, loading]);

    if (!user) {
      return null;
    }

    return <Component {...props} />;
  };
}
