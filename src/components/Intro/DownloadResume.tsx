"use client";

import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { pdf } from "@react-pdf/renderer";
import { saveAs } from "file-saver";

import Resume from "@/components/Intro/Pdf/Resume";
import { ResumeProp } from "@/types";

export default function DownloadResume({ data }: { data: ResumeProp }) {
  const downloadPdf = async () => {
    const date = new Date().toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
    });
    const fileName = `Vernon Wee Hong KOH Resume - ${date}`;
    const blob = await pdf(<Resume data={data} />).toBlob();
    saveAs(blob, fileName);
  };

  return (
    <button id="download-pdf" onClick={downloadPdf}>
      <FontAwesomeIcon icon={faDownload} className="mr-2 h-4 w-4" />
      Download Résumé
    </button>
  );
}
