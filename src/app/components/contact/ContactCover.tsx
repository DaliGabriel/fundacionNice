"use client";

import Image from "next/image";
import BackgroundPattern from "../common/BackgroundPattern";
import { useState } from "react";

const ContactCover = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="absolute top-0 inset-x-0 w-full h-[500px] overflow-hidden">
      {/* Loading Skeleton */}
      <div
        className={`absolute inset-0 bg-gradient-to-r from-gray-200 to-gray-300 animate-pulse
          ${
            isLoading ? "opacity-100" : "opacity-0"
          } transition-opacity duration-300`}
      />

      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/heros/contacto.jpg"
          alt="Contacto"
          fill
          className={`object-cover transition-opacity duration-300 ${
            isLoading ? "opacity-0" : "opacity-100"
          }`}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
          quality={100}
          style={{
            objectFit: "cover",
            objectPosition: "center 30%",
          }}
          onLoadingComplete={() => setIsLoading(false)}
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx0fHRsdHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR3/2wBDAR0XFyAeIB4gHh4eIB0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR3/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
        />
      </div>

      <div className="absolute inset-0 bg-blue-950/40 mix-blend-multiply" />

      <div className="absolute inset-0 z-10">
        <BackgroundPattern pattern="/divs/Headers.svg" />
      </div>

      <div className="absolute inset-0 z-20 flex items-center justify-center">
        <h1 className="text-white text-6xl font-bold text-center max-w-4xl px-4">
          Contacto
        </h1>
      </div>
    </div>
  );
};

export default ContactCover;
