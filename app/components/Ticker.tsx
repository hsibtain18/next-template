"use client";

import React from "react";

interface TickerMessage {
  value: string;
  type: "success" | "error";
}

interface TickerProps {
  messages: TickerMessage[];
  speed?: number;
}

export default function Ticker({ messages = [], speed = 10 }: TickerProps) {
  return (
    <div className="ticker-container overflow-hidden whitespace-nowrap relative">
      <div
        className="ticker flex animate-scroll"
        style={{ animationDuration: `${speed}s` }}
      >
        {messages.map((message, index) => (
          <div
            key={index}
            className={`ticker-message pr-[30px] font-bold text-[16px] ${
              message.type === "error" ? "text-red-500" : "text-green-600"
            }`}
          >
            {message.value}
          </div>
        ))}
      </div>
    </div>
  );
}
