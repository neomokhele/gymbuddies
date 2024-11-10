import localFont from "next/font/local";

export const libreBaskerville = localFont({
    src: [
      {
        path: "../app/fonts/LibreBaskerville-Regular.ttf",
        weight: "400",
        style: "normal",
      },
      {
        path: "../app/fonts/LibreBaskerville-italic.ttf",
        weight: "700",
        style: "normal",
      },
      {
        path: "../app/fonts/LibreBaskerville-Bold.ttf",
        weight: "700",
        style: "normal",
      },
    ],
    variable: "--font-libre-baskerville",
  });