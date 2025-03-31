import { baseItemCard } from "@/shared/types/base-item-card.type";
import { ColorType } from "@/shared/types/color.type";
import { IconType } from "react-icons/lib";

export type skillType = baseItemCard & {
  icon: IconType;
  subtitle?: string; 
  lineColor: ColorType; 
  footer?:string,
};