"use client";
import { LoadingDots } from "@/components/ui/Loading";
import { UseAuth } from "@/lib/context/AuthContext";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function layout({ children }) {
  const { user, loading } = UseAuth();
  const pathName = usePathname();

  if (loading) return <LoadingDots />;
  if (!user)
    return (
      <div className="w-full h-full grid place-items-center">
        <div className="w-full h-1/2 flex flex-col justify-evenly items-center text-center">
          <h1 className="text-3xl font-bold">You are unauthorized!</h1>
          <h1 className="text-xl">
            Please{" "}
            <Link
              href={`/auth/sign-in/?continueTo=${pathName}`}
              className="text-blue-500 hover:text-blue-600"
            >
              sign-in
            </Link>{" "}
            to view this page
          </h1>
          <Image src="/auth_img.png" loading="lazy" alt="Image" width={200} height={150} />
        </div>
      </div>
    );

  return children;
}
