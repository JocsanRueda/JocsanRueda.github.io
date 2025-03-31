import { baseItemCard } from "@/shared/types/base-item-card.type";
import { ColorType } from "@/shared/types/color.type";
import { StackItem } from "@/shared/types/stack.type";

export type projectType= baseItemCard &{
  subtitle:string;
  imageUrl:string;
  lineColor:ColorType;
  stack:StackItem[];
  }