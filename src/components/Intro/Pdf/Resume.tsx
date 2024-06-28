import React from "react";

import { Document, Font, Page, StyleSheet } from "@react-pdf/renderer";

import Award from "@/components/Intro/Pdf/Award";
import Education from "@/components/Intro/Pdf/Education";
import Experience from "@/components/Intro/Pdf/Experience";
import Header from "@/components/Intro/Pdf/Header";
import Project from "@/components/Intro/Pdf/Project";
import Skill from "@/components/Intro/Pdf/Skill";
import { ResumeProp } from "@/types";

Font.register({
  family: "Ubuntu Sans Mono",
  fonts: [
    {
      src: "https://fonts.gstatic.com/s/ubuntusansmono/v1/jVyc7mzgBHrR5yE7ZyRg0QRJMKI4zAbgjc1t-pKe27Ev_kYRiqcZu3n0.ttf",
      fontWeight: 400,
    },
    {
      src: "https://fonts.gstatic.com/s/ubuntusansmono/v1/jVyc7mzgBHrR5yE7ZyRg0QRJMKI4zAbgjc1t-pKe27Ed_kYRiqcZu3n0.ttf",
      fontWeight: 500,
    },
    {
      src: "https://fonts.gstatic.com/s/ubuntusansmono/v1/jVyc7mzgBHrR5yE7ZyRg0QRJMKI4zAbgjc1t-pKe27Hx-UYRiqcZu3n0.ttf",
      fontWeight: 600,
    },
    {
      src: "https://fonts.gstatic.com/s/ubuntusansmono/v1/jVyc7mzgBHrR5yE7ZyRg0QRJMKI4zAbgjc1t-pKe27HI-UYRiqcZu3n0.ttf",
      fontWeight: 700,
    },
    {
      src: "https://fonts.gstatic.com/s/ubuntusansmono/v1/jVyi7mzgBHrR5yE7ZyRg0QRJMKI45g_SchUEkQgw3KTnva5SgKM7vmn0BLE.ttf",
      fontWeight: 400,
      fontStyle: "italic",
    },
    {
      src: "https://fonts.gstatic.com/s/ubuntusansmono/v1/jVyi7mzgBHrR5yE7ZyRg0QRJMKI45g_SchUEkQgw3KTnvZxSgKM7vmn0BLE.ttf",
      fontWeight: 500,
      fontStyle: "italic",
    },
    {
      src: "https://fonts.gstatic.com/s/ubuntusansmono/v1/jVyi7mzgBHrR5yE7ZyRg0QRJMKI45g_SchUEkQgw3KTnvXBVgKM7vmn0BLE.ttf",
      fontWeight: 600,
      fontStyle: "italic",
    },
    {
      src: "https://fonts.gstatic.com/s/ubuntusansmono/v1/jVyi7mzgBHrR5yE7ZyRg0QRJMKI45g_SchUEkQgw3KTnvUlVgKM7vmn0BLE.ttf",
      fontWeight: 700,
      fontStyle: "italic",
    },
  ],
});

const styles = StyleSheet.create({
  page: {
    fontFamily: "Ubuntu Sans Mono",
    fontSize: 10,
    flexDirection: "column",
    paddingTop: 40,
    paddingBottom: 40,
    paddingHorizontal: 40,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

export default function Resume({ data }: { data: ResumeProp }) {
  const date = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
  });

  return (
    <Document
      title={`Vernon Wee Hong KOH Resume - ${date}`}
      author="Vernon Wee Hong KOH"
      subject={`Vernon Wee Hong KOH Resume - ${date}`}
      language="en"
    >
      <Page size="A4" style={styles.page}>
        <Header data={data} />
        <Skill skills={data.skills} />
        <Experience experiences={data.experiences} />
        <Project projects={data.projects} />
        <Award awards={data.awards} />
        <Education educations={data.educations} />
      </Page>
    </Document>
  );
}
