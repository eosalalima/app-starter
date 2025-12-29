import type { NextConfig } from "next";

const allowedOrigins = new Set<string>(["localhost:3000"]);

if (process.env.NEXT_PUBLIC_APP_URL) {
    try {
        const host = new URL(process.env.NEXT_PUBLIC_APP_URL).host;
        if (host) {
            allowedOrigins.add(host);
        }
    } catch {
        // Ignore invalid URLs provided via environment variables.
    }
}

if (
    process.env.CODESPACE_NAME &&
    process.env.GITHUB_CODESPACES_PORT_FORWARDING_DOMAIN
) {
    allowedOrigins.add(
        `${process.env.CODESPACE_NAME}-3000.${process.env.GITHUB_CODESPACES_PORT_FORWARDING_DOMAIN}`
    );
}

const nextConfig: NextConfig = {
    experimental: {
        serverActions: {
            allowedOrigins: Array.from(allowedOrigins),
        },
    },

    images: {
        domains: [
            "plus.unsplash.com",
            "images.unsplash.com",
            "res.cloudinary.com",
            "cdn.pixabay.com",
            "images.pexels.com",
            "tailwindcss.com",
            "randomuser.me",
        ],
    },
};

export default nextConfig;
