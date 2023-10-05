// script.js
// Load pako library using a script tag
const pakoScript = document.createElement('script');
pakoScript.src = 'https://ordinals.com/content/fba6f95fb1152db43304a27dce8cb8c65509eba6ab0b6958cedeb33e5f443077i0';
document.head.appendChild(pakoScript);

// Function to display SVGZ
async function displaySvgz(url) {
    const response = await fetch(url);
    const compressedData = await response.arrayBuffer();
    const decompressedData = pako.inflate(new Uint8Array(compressedData), { to: 'string' });
    const embedContainer = document.getElementById('svg-container');
    embedContainer.src = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(decompressedData)}`;
}

// Retrieve the URL parameter from the script tag
const scriptTag = document.currentScript;
const svgzUrl = scriptTag.getAttribute('data-svgz-url');

// Wait for pako to be loaded, then display the SVGZ
pakoScript.onload = function () {
    displaySvgz(svgzUrl);
};
