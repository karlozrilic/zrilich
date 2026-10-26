import { Timestamp } from "firebase/firestore";
import { Project } from "./project";

export type ProjectWithTime = Project & { updated_at?: Timestamp };