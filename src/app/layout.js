import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ConfigProvider } from "antd";
import { mainTheme } from "@/theme";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "PhotoOp",
    template: "%s - PhotoOp",
  },
  description: "photographer booking app",
  keywords: [
    "photographer",
    "booking",
    "snapper",
    "photography",
    "photoOp",
    "Ready. Pose. Snap.",
    "wedding",
    "corporate event",
    "personal photo shoot",
    "family photo shoot",
    "wedding shoot",
    "corporate shoot",
    "personal shoot",
    "family shoot",
    "wedding photography",
    "corporate photography",
    "personal photography",
    "family photography",
  ],
  openGraph: {
    title: "PhotoOp",
    description: "photographer booking app",
    images: [
      {
        url: "./opengraph-image.png",
        width: 1920,
        height: 1080,
      },
    ],
    url: "https://photooprps.com/",
    type: "website",
    siteName: "PhotoOp",
  },

  //   index: true,
  //   follow: true,
  //   googleBot: {
  //     index: true,
  //     follow: true,
  //     "max-video-preview": -1,
  //     "max-image-preview": "large",
  //     "max-snippet": -1,
  //   },
  // },
  twitter: {
    card: "summary_large_image",
    title: "PhotoOp",
    description: "photographer booking app",
    images: ["./opengraph-image.png"],
    creator: "@photooprps",
  },

  // robots: {
  //   index: true,
  //   follow: true,
  //   "max-video-preview": -1,
  //   "max-image-preview": "large",
  //   "max-snippet": -1,
  // },

  metadataBase: new URL("https://photooprps.com/"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AntdRegistry>
          <ConfigProvider theme={mainTheme}>
            <div>{children}</div> <Toaster position="top-center" richColors />
          </ConfigProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}
