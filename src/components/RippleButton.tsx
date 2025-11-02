"use client";
import React, { MouseEvent } from "react";
import "./RippleButton.css";

type Props = {
  children: React.ReactNode;
  onClick?: () => void;
};

export default function RippleButton({ children, onClick }: Props) {
  const createRipple = (event: MouseEvent<HTMLButtonElement>) => {
    const button = event.currentTarget;
    const circle = document.createElement("span");

    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
    circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
    circle.classList.add("ripple");

    const ripple = button.getElementsByClassName("ripple")[0];
    if (ripple) ripple.remove();

    button.appendChild(circle);
  };

  return (
    <button className="ripple-button" onClick={(e) => {
      createRipple(e);
      onClick?.();
    }}>
      {children}
    </button>
  );
}