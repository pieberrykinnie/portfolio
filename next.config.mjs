import { PHASE_DEVELOPMENT_SERVER } from 'next/constants.js';

const NextConfig = (phase) => {
        const isDev = phase === PHASE_DEVELOPMENT_SERVER;

        /** @type {import('next').NextConfig} */

        const nextConfig = {
                output: isDev ? undefined : 'export',
                basePath: isDev ? undefined : '/portfolio',
                // assetPrefix: isDev ? undefined : 'https://pieberrykinnie.github.io/portfolio/',
        };

        return nextConfig;
}

export default NextConfig;
