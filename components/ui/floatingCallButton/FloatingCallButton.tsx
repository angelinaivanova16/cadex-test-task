'use client'
import { SvgFloatingButton } from "@/components/icons";
import s from "./floatingCallButton.module.css";
import Link from "next/link";

export const FloatingCallButton = () => {

  return (
    <div className={s.floatingCallButton}>
      <Link className={s.container} href={'/contactUs'}>
        <SvgFloatingButton />
      </Link>
    </div>
  );
};