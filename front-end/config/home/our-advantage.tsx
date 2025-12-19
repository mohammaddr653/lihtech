import { IAdvantageCard } from "@/components/ui/card/advantage-card";
import { Building, FileText, ScanSearch, Waypoints } from "lucide-react";

export const ourAdvantage: IAdvantageCard[] = [
  {
    icon: <ScanSearch />,
    title: "تمرکز بر تحلیل و تصمیم‌سازی، نه صرفاً اجرا",
  },
  {
    icon: <Waypoints />,
    title: "طراحی راهکار بر اساس KPIهای واقعی کسب‌وکار",
  },
  {
    icon: <Building />,
    title: "مناسب برای استارتاپ‌ها تا سازمان‌های بزرگ",
  },
  {
    icon: <FileText />,
    title: "مستندسازی شفاف برای توسعه و مقیاس‌پذیری آینده",
  },
];
