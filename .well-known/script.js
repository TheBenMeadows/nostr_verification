import { inflate } from 'https://ordinals.com/content/fba6f95fb1152db43304a27dce8cb8c65509eba6ab0b6958cedeb33e5f443077i0';

async function displaySvgz(url) {
    const response = await fetch(url);
    const compressedData = await response.arrayBuffer();
    const decompressedData = inflate(new Uint8Array(compressedData), {to: 'string'});

    // Parse the SVG data and insert it directly into the body
    const parser = new DOMParser();
    const svgDoc = parser.parseFromString(decompressedData, "image/svg+xml");
    const svgElement = svgDoc.documentElement;
    
    // Append the SVG element to the body
    document.body.appendChild(svgElement);
}

const svgzUrl = 'https://ordinals.com/content/62a77ef2f8fa7caaa237c36cd7404d1a46918c074d79bb73228108d7e0968b11i0';
displaySvgz(svgzUrl);
