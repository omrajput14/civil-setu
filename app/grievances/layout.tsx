import { GrievanceProvider } from "./GrievanceContext";

export default function GrievanceLayout({ children }: { children: React.ReactNode }) {
  return <GrievanceProvider>{children}</GrievanceProvider>;
}
