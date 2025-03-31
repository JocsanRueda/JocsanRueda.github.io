import { baseItemCard } from "@/shared/types/base-item-card.type";

export type ProjectDetailType =  baseItemCard & {
  longDescription: string;
  image: string;
  features: string[];
  githubUrl?: string;
  liveUrl?: string;
  date: string;
  role: string;
  teamSize?: number;
  commits: number;
  linesWritten: string;
}