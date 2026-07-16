export interface Education {
  institution: string;
  degree: string;
  dateStart: string;
  dateEnd: string;
  status: "complete" | "in-progress";
  focus: string[];
}
