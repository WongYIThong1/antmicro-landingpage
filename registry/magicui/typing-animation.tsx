"use client";

import { useEffect, useRef, useState } from "react";

const playedAnimationKeys = new Set<string>();

type TypingAnimationProps = {
  children: string;
  className?: string;
  speed?: number;
  onComplete?: () => void;
  start?: boolean;
  animationKey?: string;
};

export function TypingAnimation({
  children,
  className,
  speed = 32,
  onComplete,
  start = true,
  animationKey,
}: TypingAnimationProps) {
  const animationId = animationKey ?? children;
  const [text, setText] = useState(() =>
    playedAnimationKeys.has(animationId) ? children : "",
  );
  const startedRef = useRef(false);
  const completedRef = useRef(false);
  const onCompleteRef = useRef(onComplete);

  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    if (!start) {
      return;
    }

    if (playedAnimationKeys.has(animationId)) {
      if (!completedRef.current) {
        completedRef.current = true;
        onCompleteRef.current?.();
      }
      return;
    }

    if (startedRef.current) {
      return;
    }

    startedRef.current = true;
    completedRef.current = false;
    let index = 0;

    const timer = window.setInterval(() => {
      index += 1;
      setText(children.slice(0, index));
      if (index >= children.length) {
        window.clearInterval(timer);
        if (!completedRef.current) {
          completedRef.current = true;
          playedAnimationKeys.add(animationId);
          onCompleteRef.current?.();
        }
      }
    }, speed);

    return () => window.clearInterval(timer);
  }, [animationId, children, speed, start]);

  return (
    <span className={className} aria-label={children}>
      {text}
      {start ? <span className="type-caret ml-0.5 inline-block h-[0.9em] w-[2px] translate-y-[2px] bg-white/90 align-baseline" /> : null}
    </span>
  );
}
