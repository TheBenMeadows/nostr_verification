// script.js
async function loadPako() {
    const pakoResponse = await fetch('https://ordinals.com/content/fba6f95fb1152db43304a27dce8cb8c65509eba6ab0b6958cedeb33e5f443077i0');
    const pakoSource = await pakoResponse.text();

    // Evaluate the pako source
    const pakoScript = document.createElement('script');
    pakoScript.textContent = pakoSource;
    document.head.appendChild(pakoScript);

    // Wait for pako to be defined, then call the displaySvgz function
    const checkPako = setInterval(() => {
        if (typeof pako !== 'undefined') {
            clearInterval(checkPako);
            displaySvgz();
        }
    }, 50);
}

async function displaySvgz() {
    const svgzUrl = document.currentScript.getAttribute('data-svgz-url');
    const response = await fetch(svgzUrl);
    const compressedData = await response.arrayBuffer();
    const decompressedData = pako.inflate(new Uint8Array(compressedData), { to: 'string' });

    const embedContainer = document.getElementById('svg-container');
    embedContainer.src = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(decompressedData)}`;
}

// Load pako and initiate the process
loadPako();
