"use client";

import { motion } from "framer-motion";

type Props = {
  attempts: number;
};

export const HangmanFigure = ({ attempts }: Props) => {
  const HEAD = (
    <motion.circle
      key="head"
      cx="196"
      cy="98"
      r="28"
      stroke="black"
      strokeWidth="4"
      fill="transparent"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 0.5 }}
    />
  );

  const BODY = (
    <motion.line
      key="body"
      x1="196"
      y1="126"
      x2="196"
      y2="210"
      stroke="black"
      strokeWidth="4"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 0.5 }}
    />
  );

  const RIGHT_ARM = (
    <motion.line
      key="right-arm"
      x1="196"
      y1="150"
      x2="236"
      y2="180"
      stroke="black"
      strokeWidth="4"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 0.5 }}
    />
  );

  const LEFT_ARM = (
    <motion.line
      key="left-arm"
      x1="196"
      y1="150"
      x2="156"
      y2="180"
      stroke="black"
      strokeWidth="4"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 0.5 }}
    />
  );

  const RIGHT_LEG = (
    <motion.line
      key="right-leg"
      x1="196"
      y1="210"
      x2="236"
      y2="270"
      stroke="black"
      strokeWidth="4"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 0.5 }}
    />
  );

  const LEFT_LEG = (
    <motion.line
      key="left-leg"
      x1="196"
      y1="210"
      x2="156"
      y2="270"
      stroke="black"
      strokeWidth="4"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 0.5 }}
    />
  );

  const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG];

  return (
    <div className="flex justify-center items-start mt-4">
      <svg width="350" height="350" className="stroke-black">
        {/* Gallows */}
        <line x1="84" y1="28" x2="196" y2="28" stroke="black" strokeWidth="4" />
        <line
          x1="196"
          y1="28"
          x2="196"
          y2="70"
          stroke="black"
          strokeWidth="4"
        />
        <line x1="84" y1="28" x2="84" y2="308" stroke="black" strokeWidth="4" />
        <line
          x1="28"
          y1="308"
          x2="140"
          y2="308"
          stroke="black"
          strokeWidth="4"
        />

        {/* Hangman Parts */}
        {BODY_PARTS.slice(0, attempts)}
      </svg>
    </div>
  );
};
