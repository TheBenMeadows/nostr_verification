import { inflate } from 'https://ordinals.com/content/fba6f95fb1152db43304a27dce8cb8c65509eba6ab0b6958cedeb33e5f443077i0';

async function displaySvgz(url) {
    const response = await fetch(url);
    const compressedData = await response.arrayBuffer();
    const decompressedData = inflate(new Uint8Array(compressedData), {to: 'string'});
    const embedContainer = document.getElementById('svg-container');
    embedContainer.src = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(decompressedData)}`;
}

window.addEventListener('svgz-url-set', () => {
    const embedContainer = document.getElementById('svg-container');
    const svgzUrl = embedContainer.getAttribute('data-svgz-url');
    displaySvgz(svgzUrl);
});
