import { baseItemCard } from "@/common/types/base-item-card.type";
import { ColorType } from "@/common/types/color.type";
import { StackItem } from "@/common/types/stack.type";

export type projectType= baseItemCard &{
  subtitle:string;
  imageUrl:string;
  lineColor:ColorType;
  stack:StackItem[];
  }