"use client";
import { Atom, Mosaic } from "react-loading-indicators";

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center animate-fade-in pt-16">
      <Atom
        color={["#32cd32", "#327fcd", "#cd32cd", "#cd8032"]}
        size="large"
        text="Loading..."
        textColor="black"
      />
    </div>
  );
}
