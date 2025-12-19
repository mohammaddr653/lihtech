import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Link } from "@heroui/link";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { Navbar } from "@/components/navbar";
import { sfBold, sfLight, sfMed } from "@/config/fonts";
import { BGPattern } from "@/components/bg-pattern";
import { Spotlight } from "@/components/ui/spotlight-new";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en" dir="rtl">
      <head />
      <body
        className={clsx(
          sfLight.variable,
          sfMed.variable,
          sfBold.variable,
          "relative z-0 min-h-screen font-sf-med text-foreground bg-background antialiased"
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col">
            <div className="h-screen w-full flex md:items-center md:justify-center antialiased absolute overflow-hidden">
              <Spotlight
                gradientFirst="
                  radial-gradient(
                    68.54% 68.72% at 55.02% 31.46%,
                    rgba(214, 228, 217, 0.18) 0%,
                    rgba(123, 155, 126, 0.10) 50%, 
                    rgba(82, 104, 89, 0) 80% 
                  )
                "
                gradientSecond="
                  radial-gradient(
                    50% 50% at 50% 50%,
                    rgba(214, 228, 217, 0.14) 0%,
                    rgba(123, 155, 126, 0.06) 80%,
                    transparent 100%
                  )
                "
                gradientThird="
                  radial-gradient(
                    50% 50% at 50% 50%,
                    rgba(214, 228, 217, 0.10) 0%,
                    rgba(82, 104, 89, 0.05) 80%,
                    transparent 100%
                  )
                "
              />
            </div>
            <BGPattern variant="dots" mask="fade-edges" />
            <Navbar />
            <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
              {children}
            </main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
