"use client";
import { ReactNode, useEffect, useState } from "react";
import { SideBar } from "../../components/SideBar";

export default function Layout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const [enabled, setEnabled] = useState(false);
  useEffect(() => {
      // TODO: hide from public access
    if (localStorage.getItem("exp") === "1") {
      setEnabled(true);
    }
  }, []);
  return (
    <main style={{ display: enabled ? '' : 'none' }}>
      <SideBar />
      <div className="main-content">{children}</div>
    </main>
  );
}
