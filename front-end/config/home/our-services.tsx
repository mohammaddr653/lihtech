import { IServiceCard } from "@/components/ui/card/service-card";
import { Bot, Database, LayoutDashboard } from "lucide-react";

export const ourServices: IServiceCard[] = [
  {
    icon: <LayoutDashboard />,
    title: "داشبورد سازی",
    description:
      "ما داشبوردهای تحلیلی طراحی می‌کنیم که مدیران، تیم مارکتینگ و محصول بتوانند در یک نگاه وضعیت واقعی کسب‌وکار را ببینند و تصمیم بگیرند.",
  },
  {
    icon: <Database />,
    title: "استخراج و یکپارچه‌سازی داده",
    description:
      "ما داده‌ها را از منابع مختلف جمع‌آوری، پاک‌سازی و استاندارد می‌کنیم تا یک Single Source of Truth ایجاد شود.",
  },
  {
    icon: <Bot />,
    title: "طراحی چت بات هوشمند",
    description:
      "چت‌بات‌هایی طراحی می‌کنیم که هم ارتباط با کاربر را ساده کنند و هم داده ارزشمند تولید کنند.",
  },
];
