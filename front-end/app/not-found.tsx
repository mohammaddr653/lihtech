import { title } from "@/components/primitives";
import { Description } from "@/components/title/description";

export default function NotFoundPage() {
  return (
    <section className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
      <h3 className={`${title({ size: "lg" })}`}>404</h3>
      <Description text="صفحه مورد نظر یافت نشد" />
    </section>
  );
}
