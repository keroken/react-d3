const ua = navigator.userAgent.toLowerCase();

export const Environment = { IE: ua.includes('trident'), Edge: ua.includes('edge') };
