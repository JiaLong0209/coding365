function downloadSVG(selector, filename) {
    var svgElement = document.querySelector(selector);

    // Serialize the SVG element to a string
    var svgData = new XMLSerializer().serializeToString(svgElement);

    // Create a Blob from the SVG string
    var svgBlob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });

    // Create a URL for the Blob
    var svgUrl = URL.createObjectURL(svgBlob);

    // Create a temporary anchor element to initiate download
    var downloadLink = document.createElement("a");
    downloadLink.href = svgUrl;
    downloadLink.download = filename + ".svg";

    // Append the anchor to the body (not displayed)
    document.body.appendChild(downloadLink);

    // Programmatically click the anchor to trigger the download
    downloadLink.click();

    // Remove the anchor from the document
    document.body.removeChild(downloadLink);

    // Revoke the Blob URL after download
    URL.revokeObjectURL(svgUrl);
}


function downloadSVGAsPNG(selector, filename) {
    // Get the SVG element by its ID
    var svgElement = document.querySelector(selector);

    // Serialize the SVG element to a string
    var svgData = new XMLSerializer().serializeToString(svgElement);

    // Create a Blob from the SVG string
    var svgBlob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });

    // Create a URL for the Blob
    var svgUrl = URL.createObjectURL(svgBlob);

    // Create an image element
    var img = new Image();

    // Set the image source to the SVG blob URL
    img.onload = function () {
        // Create a temporary canvas element
        var canvas = document.createElement("canvas");
        canvas.width = svgElement.clientWidth;
        canvas.height = svgElement.clientHeight;
        var ctx = canvas.getContext("2d");

        // Draw the SVG image onto the canvas
        ctx.drawImage(img, 0, 0);

        // Convert the canvas content to a PNG data URL
        var pngData = canvas.toDataURL("image/png");

        // Create a temporary anchor element to initiate the download
        var downloadLink = document.createElement("a");
        downloadLink.href = pngData;
        downloadLink.download = filename + ".png";

        // Append the anchor to the body (not displayed)
        document.body.appendChild(downloadLink);

        // Programmatically click the anchor to trigger the download
        downloadLink.click();

        // Remove the anchor from the document
        document.body.removeChild(downloadLink);

        // Clean up the Blob URL
        URL.revokeObjectURL(svgUrl);
    };

    // Set the image source to the SVG URL
    img.src = svgUrl;
}

//let a = downloadSVG('div#svgarea svg', 'test_svg.png')
downloadSVGAsPNG('div#svgarea svg', 'test_svg')
