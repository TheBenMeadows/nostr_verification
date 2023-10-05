import { inflate } from 'https://ordinals.com/content/fba6f95fb1152db43304a27dce8cb8c65509eba6ab0b6958cedeb33e5f443077i0';

async function displaySvgz(url) {
    const response = await fetch(url);
    const compressedData = await response.arrayBuffer();
    const decompressedData = inflate(new Uint8Array(compressedData), {to: 'string'});

    // Instead of setting the src of the embed tag, we'll inject the SVG directly into the DOM
    document.body.innerHTML = decompressedData;
}

const svgzUrl = 'https://ordinals.com/content/62a77ef2f8fa7caaa237c36cd7404d1a46918c074d79bb73228108d7e0968b11i0';
displaySvgz(svgzUrl);
