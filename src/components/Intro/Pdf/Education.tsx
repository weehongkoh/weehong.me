import { StyleSheet, Text, View } from "@react-pdf/renderer";

import { EducationProp } from "@/types";

const styles = StyleSheet.create({
  section: {
    display: "flex",
    flexDirection: "column",
    marginTop: 3,
  },
  heading: {
    borderBottom: "1 solid black",
    marginBottom: 3,
    fontWeight: 700,
    textTransform: "uppercase",
  },
  row: {
    display: "flex",
    flexDirection: "row",
  },
  columnTitle: {
    display: "flex",
    flexDirection: "column",
    width: 170,
  },
  columnDescription: {
    width: "100%",
  },
  label: {
    fontWeight: 500,
  },
  year: {
    textAlign: "right",
  },
});

export default function Education({
  educations,
}: {
  educations: EducationProp[];
}) {
  return (
    <View style={styles.section}>
      <View style={styles.section}>
        <Text style={styles.heading}>Educations</Text>
        {educations &&
          educations.map((education: EducationProp, index: number) => (
            <View
              style={[
                styles.row,
                {
                  marginTop: index === 0 ? 0 : 3,
                },
              ]}
              key={index}
            >
              <View style={styles.columnDescription}>
                <Text style={styles.label}>
                  {education.school_name}, {education.country}
                </Text>
                <Text>{education.certificate}</Text>
              </View>
              <View style={styles.columnTitle}>
                <Text style={styles.year}>
                  {`${new Date(education.from).getFullYear()} - ${new Date(education.to).getFullYear()}`}
                </Text>
              </View>
            </View>
          ))}
      </View>
    </View>
  );
}
