console.log("Script is starting...");

async function displaySvgz(url) {
    console.log("Attempting to fetch:", url);

    const response = await fetch(url);
    const compressedData = await response.arrayBuffer();
    
    console.log("Attempting to decompress...");

    const decompressedData = pako.inflate(new Uint8Array(compressedData), { to: 'string' });
    console.log("Decompressed SVG first 100 chars:", decompressedData.substring(0, 100));

    const embedContainer = document.getElementById('svg-container');
    embedContainer.src = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(decompressedData)}`;
}

const svgzUrl = 'https://raw.githubusercontent.com/TheBenMeadows/HostedFiles/master/Mask%20-%20Bulls%20Zip.svgz';
displaySvgz(svgzUrl);
