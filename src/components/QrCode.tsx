import * as React from "react";
import QRCode from "qrcode.react";

const icon = require("../../static/assets/images/zelogo.png");

export default function QrCode() {
  const qrRef = React.useRef();
  const [url, setUrl] = React.useState("");
  const [colorBG, setColorBG] = React.useState("white" || "#ffffff");
  const [colorFG, setColorFG] = React.useState("black" || "#000000");
  const [size, setSize] = React.useState("500");

  const downloadQRCode = (evt: React.FormEvent) => {
    evt.preventDefault();

    let canvas = qrRef.current.querySelector("canvas");
    let image = canvas.toDataURL("image/png");
    let anchor = document.createElement("a");
    anchor.href = image;
    anchor.download = "qrcode.png";
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);

    setUrl("");
  };

  const qrCode = (
    <QRCode
      id="qrCodeId"
      size={parseInt(size)}
      value={url}
      bgColor={colorBG}
      fgColor={colorFG}
      level="Q"
      imageSettings={{
        src: icon,
        excavate: true,
        width: parseInt(size) * 0.1,
        height: parseInt(size) * 0.1,
      }}
    />
  );

  return (
    <div className="qr-container">
      <form onSubmit={downloadQRCode} className="qr-container__form">
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="https://add-your-website-here.com"
        />

        <input
          type="text"
          value={colorBG}
          onChange={(e) => setColorBG(e.target.value)}
          placeholder="Background Color"
        />

        <input
          type="text"
          value={colorFG}
          onChange={(e) => setColorFG(e.target.value)}
          placeholder="Foreground Color"
        />

        <input
          type="number"
          value={size}
          min="500"
          max="10000"
          onChange={(e) => setSize(e.target.value)}
          placeholder="Choose QR Code size (500px - 10000px)"
        />

        <button type="submit">Download QR Code</button>
      </form>

      <div className="qr-container__qr-code" ref={qrRef}>
        {qrCode}
      </div>
    </div>
  );
}
