import type { NextConfig } from 'next';
 
const nextConfig: NextConfig = {
  experimental: {
    ppr: 'incremental'
  }
};
 