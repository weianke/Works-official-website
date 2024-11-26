"use client";
import useBlobity from "blobity/lib/react/useBlobity";
import { useEffect } from "react";
import PreLoader from "./animations/PreLoader/PreLoader";
import Hero from "./hero-section/Hero";
import { initialBlobityOptions } from "./utils/BlobityConfig";

export default function Home() {
  const blobityInstance = useBlobity(initialBlobityOptions);

  useEffect(() => {
    if (blobityInstance.current) {
      window.blobity = blobityInstance.current;
    }
  }, [blobityInstance]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
  }, []);

  return (
    <>
      <PreLoader />
      <main className="flex flex-col items-center justify-center">
        <Hero />
      </main>
    </>
  );
}
