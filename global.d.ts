// import React from "react";
import { AttributifyAttributes } from "unocss/preset-attributify";

// declare global {
declare module "react" {
  interface HTMLAttributes<T> extends AttributifyAttributes {}
}
