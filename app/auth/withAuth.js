import React from "react";
import { UseAuth } from "@/lib/context/AuthContext";
import { useRouter } from "next/navigation";
import { LoadingDots } from "@/components/ui/Loading";

export default function withAuth(Component) {
  return function AuthenticatedComponent(props) {
    const { user, loading } = UseAuth();
    const router = useRouter();

    if (loading) {
      return <LoadingDots />;
    }

    if (user) {
      router.replace("/");
      return null;
    }

    console.log("user", user);

    return <Component {...props} />;
  };
}
