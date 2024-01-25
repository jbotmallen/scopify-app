import React from "react";
import { UseAuth } from "@/lib/context/AuthContext";
import { useRouter } from "next/navigation";
import { LoadingDots } from "@/components/ui/Loading";

export default function withOutAuth(Component) {
  return function unAuthenticatedComponent(props) {
    const { user, loading } = UseAuth();
    const router = useRouter();

    if (loading) return <LoadingDots />;

    if (user) return router.replace("/");

    return <Component {...props} />;
  };
}
