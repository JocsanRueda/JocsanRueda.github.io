import { ColorType } from "@/shared/types/color.type";
import { StackItem } from "@/shared/types/stack.type";
import { IconType } from "react-icons/lib";

export interface experienceType {
  icon?: IconType;
  lineColor: ColorType;
  id: string;
  company: string;
  position: string;
  period: string;
  contractType: string;
  location: string;
  description: string;
  responsibilities: string[];
  achievements: string[];
  linkedinUrl: string;
  companyUrl: string;
  stack: StackItem[];
  contactCompany?:string;
}