import { StyleSheet, Text, View } from "@react-pdf/renderer";

import { AwardProp } from "@/types";

const styles = StyleSheet.create({
  section: {
    display: "flex",
    flexDirection: "column",
    marginTop: 5,
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
  year: {
    textAlign: "right",
  },
});

export default function Award({ awards }: { awards: AwardProp[] }) {
  return (
    <View style={styles.section}>
      <View style={styles.section}>
        <Text style={styles.heading}>Awards</Text>
        {awards &&
          awards.map((project: AwardProp, index: number) => (
            <View
              style={[
                styles.row,
                {
                  marginTop: index === 0 ? 0 : 5,
                },
              ]}
              key={index}
            >
              <View style={styles.columnDescription}>
                <Text>{project.name}</Text>
              </View>
              <View style={styles.columnTitle}>
                <Text style={styles.year}>
                  {new Date(project.at).getFullYear()}
                </Text>
              </View>
            </View>
          ))}
      </View>
    </View>
  );
}
