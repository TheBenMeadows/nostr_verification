console.log("Traditional script is running.");

async function displaySvgz(url) {
    console.log("Fetching SVGZ from:", url);
    
    const response = await fetch(url);
    const compressedData = await response.arrayBuffer();
    
    console.log("Decompressing SVGZ...");
    const decompressedData = pako.inflate(new Uint8Array(compressedData), {to: 'string'});
    console.log("Decompressed SVG first 100 chars:", decompressedData.substring(0, 100));
    
    // Parse the SVG data and insert it directly into the body
    console.log("Parsing and inserting SVG...");
    const parser = new DOMParser();
    const svgDoc = parser.parseFromString(decompressedData, "image/svg+xml");
    const svgElement = svgDoc.documentElement;
    
    // Append the SVG element to the body
    document.body.appendChild(svgElement);
    console.log("SVG should be displayed now.");
}

const svgzUrl = 'https://raw.githubusercontent.com/TheBenMeadows/HostedFiles/master/Mask%20-%20Bulls%20Zip.svgz';
displaySvgz(svgzUrl);
