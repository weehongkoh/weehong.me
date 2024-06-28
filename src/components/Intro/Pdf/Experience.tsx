import { StyleSheet, Text, View } from "@react-pdf/renderer";

import { ExperienceProp } from "@/types";

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
  sidenote: {
    fontSize: 8,
    textAlign: "justify",
  },
  paragraph: {
    textAlign: "justify",
  },
});

export default function Experience({
  experiences,
}: {
  experiences: ExperienceProp[];
}) {
  return (
    <View style={styles.section}>
      <View style={styles.section}>
        <Text style={styles.heading}>Experiences</Text>
        {experiences &&
          experiences.map((experience: ExperienceProp, index: number) => (
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
                <Text style={styles.label}>{experience.company}</Text>
                <Text style={styles.sidenote}>
                  {`${experience.from} - ${experience.to ? experience.to : "CURRENT"}`}
                </Text>
              </View>
              <View style={styles.columnDescription}>
                {experience.descriptions.blocks.map((block, j) => (
                  <View key={j}>
                    <Text
                      style={[
                        styles.paragraph,
                        {
                          marginTop: j === 0 ? 0 : 3,
                          marginBottom:
                            j === experience.descriptions.blocks.length - 1
                              ? 0
                              : 3,
                        },
                      ]}
                    >
                      {block.data.text}
                    </Text>
                  </View>
                ))}
              </View>
            </View>
          ))}
      </View>
    </View>
  );
}
