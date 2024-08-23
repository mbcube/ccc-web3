import localFont from "next/font/local";

export const FONT_MAJOR_MONO = localFont({
    src: './major_mono/MajorMonoDisplay-Regular.ttf',
});

export const FONT_ORBITRON = localFont({
    src: './orbitron/Orbitron-VariableFont_wght.ttf',
});

export const FONT_ROGAN = localFont({
    src: [
        {
            path: "./rogan/Rogan-Thin.otf",
            weight: "100",
        },
        {
            path: "./rogan/Rogan-Light.otf",
            weight: "300",
        },
        {
            path: "./rogan/Rogan-Medium.otf",
            weight: "400",
        },
        {
            path: "./rogan/Rogan-Regular.otf",
            weight: "500",
        },
        {
            path: "./rogan/Rogan-SemiBold.otf",
            weight: "600",
        },
        {
            path: "./rogan/Rogan-Bold.otf",
            weight: "700",
        },
        {
            path: "./rogan/Rogan-ExtraBold.otf",
            weight: "900",
        },
    ],
    display: "swap",
});