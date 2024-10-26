"use client";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils"; // si es necesario
//import { Button } from "@/components/ui/button"; // si es necesario

function CardDefault({ img, title, paragraph }) {
  return (
    <Card className="mt-6 w-96">
      <div className="flex flex-col justify-center align-middle p-4">
        <img
          src={img}
          alt="card-image"
          className="h-24 aspect-square object-cover"
        />
        <h2 className="text-2xl font-semibold mb-2 text-blue-gray-700">
          {title}
        </h2>
        <p className="text-blue-gray-500">{paragraph}</p>
      </div>
    </Card>
  );
}

export default CardDefault;
