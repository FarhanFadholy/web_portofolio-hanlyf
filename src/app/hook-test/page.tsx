"use client";

import { useState, useEffect } from "react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

export default function HookTest() {
  const [count, setCount] = useState(0);
  const pathname = usePathname();
  const params = useSearchParams();
  const router = useRouter();

  const keyword = params.get("search");

  useEffect(() => {
    console.log("Halaman aktif:", pathname);
  }, [pathname]);

  return (
    <div className="p-5 text-xl space-y-4">
      <p className="text-white">URL sekarang: <b>{pathname}</b></p>

      <p className="text-white">Query search: <b>{keyword}</b></p>

      <button
        className="px-5 py-2 bg-blue-600 text-white rounded"
        onClick={() => setCount(count + 1)}
      >
        Tambah Count: {count}
      </button>

      <button
        className="px-5 py-2 bg-green-600 text-white rounded"
        onClick={() => router.push("/contact")}
      >
        Pergi ke Contact
      </button>
    </div>
  );
}
