// script.js
async function displaySvgz(url) {
    const response = await fetch(url);
    const compressedData = await response.arrayBuffer();

    // Dynamically load pako by creating a script element
    const script = document.createElement('script');
    script.src = 'https://ordinals.com/content/fba6f95fb1152db43304a27dce8cb8c65509eba6ab0b6958cedeb33e5f443077i0';
    document.head.appendChild(script);

    // Wait for the script to load, then use pako
    script.onload = function () {
        const decompressedData = pako.inflate(new Uint8Array(compressedData), { to: 'string' });
        const embedContainer = document.getElementById('svg-container');
        embedContainer.src = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(decompressedData)}`;
    };
}

// Retrieve the URL parameter from the script tag
const scriptTag = document.currentScript;
const svgzUrl = scriptTag.getAttribute('data-svgz-url');

// Call the displaySvgz function with the specified URL
displaySvgz(svgzUrl);
