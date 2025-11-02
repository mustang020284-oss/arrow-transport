"use client";

import Image from "next/image";


export default function Hero() {
  return (
    <section className="text-white p-8 text-center">
      <div className="flex justify-center mb-6">
        <Image
          src="/hero-logo.png"
          alt="Logo Arrow Transport"
          width={350}
          height={350}
          className="rounded-full shadow-lg"
        />
      </div>
      <h1 className="text-4xl font-bold">
      <span className="text-cyan-400">Witaj w Arrow Transport</span> 🚛
      </h1>
      <p className="mt-4 text-lg">
        Twoja paczka dotrze szybko i bezpiecznie!
      </p>
    </section>
  );
}