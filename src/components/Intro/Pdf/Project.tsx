import { StyleSheet, Text, View } from "@react-pdf/renderer";

import { ProjectProp } from "@/types";
import { stripHtmlTags } from "@/utils";

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
    paddingRight: 5,
  },
  columnDescription: {
    width: "100%",
  },
  label: {
    fontWeight: 500,
  },
  paragraph: {
    textAlign: "justify",
  },
});

export default function Project({ projects }: { projects: ProjectProp[] }) {
  return (
    <View style={styles.section}>
      <View style={styles.section}>
        <Text style={styles.heading}>Projects</Text>
        {projects &&
          projects.map((project: ProjectProp, index: number) => (
            <View
              style={[
                styles.row,
                {
                  marginTop: index === 0 ? 0 : 5,
                },
              ]}
              key={index}
            >
              <View style={styles.columnTitle}>
                <Text style={styles.label}>{project.name}</Text>
              </View>
              <View style={styles.columnDescription}>
                <Text style={styles.paragraph}>
                  {stripHtmlTags(project.description)}
                </Text>
              </View>
            </View>
          ))}
      </View>
    </View>
  );
}
