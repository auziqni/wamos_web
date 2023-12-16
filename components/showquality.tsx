import React from "react";

export default function Showquality({
  value,
  type,
}: {
  value: number;
  type: string;
}) {
  let qualityText: string;
  let divClassName: string;
  let backgroundColor: string;

  switch (value) {
    case 1:
      qualityText = "Bagus";
      divClassName = "good-air-quality";
      backgroundColor = "#00DE23"; // Hijau untuk kualitas baik
      break;
    case 2:
      qualityText = "Warning";
      divClassName = "warning-air-quality";
      backgroundColor = "#D99C00"; // Kuning untuk peringatan
      break;
    case 3:
      qualityText = "Buruk";
      divClassName = "bad-air-quality";
      backgroundColor = "#B80000"; // Merah untuk kualitas buruk
      break;
    default:
      qualityText = "Tidak diketahui";
      divClassName = "unknown-air-quality";
      backgroundColor = "#AAAAAA"; // Warna default untuk tidak diketahui
  }

  const bgstyle = {
    backgroundColor: backgroundColor,
  };

  return (
    <div className="rounded-lg p-2" style={bgstyle}>
      <h1 className="text-center font-bold">
        Kualitas {type}: {qualityText}
      </h1>
    </div>
  );
}
