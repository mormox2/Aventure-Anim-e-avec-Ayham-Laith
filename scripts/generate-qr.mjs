import QRCode from "qrcode";
import fs from "fs";
import path from "path";

const targetUrl = "https://toondraw.vercel.app";
const outputSvgPath = path.resolve("public", "qr-code.svg");
const outputPngPath = path.resolve("public", "qr-code.png");

async function generateQRCodes() {
  const svgString = await QRCode.toString(targetUrl, {
    type: "svg",
    errorCorrectionLevel: "H",
    margin: 2,
    color: {
      dark: "#1e293b", // Slate 800
      light: "#ffffff"  // White
    }
  });

  fs.writeFileSync(outputSvgPath, svgString);
  console.log(`Generated SVG QR Code at ${outputSvgPath}`);

  await QRCode.toFile(outputPngPath, targetUrl, {
    errorCorrectionLevel: "H",
    margin: 2,
    width: 1024,
    color: {
      dark: "#1e293b",
      light: "#ffffff"
    }
  });
  console.log(`Generated PNG QR Code at ${outputPngPath}`);
}

generateQRCodes().catch((err) => {
  console.error(err);
  process.exit(1);
});
