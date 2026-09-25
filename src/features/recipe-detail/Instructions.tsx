"use client";

import { useEffect, useState } from "react";

const formatTime = (totalSeconds: number) => {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;
};

const Instructions = ({ instructions }: { instructions: string[] }) => {
  const [isRunning, setIsRunning] = useState(false);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [elapsedSeconds, setElapsedSeconds] = useState(0);

  useEffect(() => {
    if (!isRunning || startTime === null) return;
    const intervalId = setInterval(() => {
      setElapsedSeconds(Math.floor((Date.now() - startTime) / 1000));
    }, 1000);
    return () => clearInterval(intervalId);
  }, [isRunning, startTime]);

  const toggleTimer = () => {
    if (isRunning) {
      setIsRunning(false);
    } else {
      setStartTime(Date.now() - elapsedSeconds * 1000);
      setIsRunning(true);
    }
  };

  return (
    <div className="bg-white border border-stone-200 rounded-2xl p-6">
      <div className="mb-4 flex items-center justify-between gap-3">
        <h2 className="text-base font-semibold text-stone-900">Instructions</h2>
        <button
          type="button"
          onClick={toggleTimer}
          aria-pressed={isRunning}
          aria-label={isRunning ? "Pause timer" : "Start timer"}
          className={`flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm font-medium transition-colors ${
            isRunning
              ? "border-orange-500 bg-orange-500 text-white"
              : "border-stone-200 text-stone-600 hover:border-orange-400 hover:text-orange-600"
          }`}
        >
          {isRunning ? (
            <svg
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-4 w-4"
              aria-hidden="true"
            >
              <path d="M5.75 3a.75.75 0 0 0-.75.75v12.5c0 .414.336.75.75.75h1.5a.75.75 0 0 0 .75-.75V3.75A.75.75 0 0 0 7.25 3h-1.5Zm6 0a.75.75 0 0 0-.75.75v12.5c0 .414.336.75.75.75h1.5a.75.75 0 0 0 .75-.75V3.75a.75.75 0 0 0-.75-.75h-1.5Z" />
            </svg>
          ) : (
            <svg
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-4 w-4"
              aria-hidden="true"
            >
              <path d="M6.3 2.841A1.5 1.5 0 0 0 4 4.11V15.89a1.5 1.5 0 0 0 2.3 1.268l9.344-5.89a1.5 1.5 0 0 0 0-2.536L6.3 2.841Z" />
            </svg>
          )}
          <span className="tabular-nums">{formatTime(elapsedSeconds)}</span>
        </button>
      </div>
      <ol className="flex flex-col divide-y divide-stone-100">
        {instructions.map((step, index) => (
          <li
            key={index}
            className="flex items-center gap-3 py-2.5 first:pt-0 last:pb-0"
          >
            <span className="flex items-center justify-center shrink-0 h-8 w-8 rounded-full bg-orange-100 text-orange-600 text-sm font-semibold">
              {index + 1}
            </span>
            <p className="text-sm flex-1 text-stone-800 leading-relaxed">
              {step.replace(/^\s*\d+\s*[.)\-]?\s*/, "")}
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Instructions;