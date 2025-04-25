'use client'
import { SvgFloatingButton } from "@/components/icons";
import s from "./floatingCallButton.module.css";

export const FloatingCallButton = () => {
  const handleClick = () => {
    // todo: доделать.
  };

  return (
    <div className={s.floatingCallButton} onClick={handleClick}>
      <div className={s.container}>
        <SvgFloatingButton />
      </div>
    </div>
  );
};