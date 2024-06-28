import { StyleSheet, Text, View } from "@react-pdf/renderer";

import { SkillProp } from "@/types";

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
  paragraph: {
    textAlign: "justify",
  },
});

export default function Skill({ skills }: { skills: SkillProp[] }) {
  return (
    <View style={styles.section}>
      <Text style={styles.heading}>Skills</Text>
      {skills &&
        skills.map((skill: SkillProp, index: number) => (
          <View style={styles.row} key={index}>
            <View style={styles.columnTitle}>
              <Text style={styles.label}>{skill.name}</Text>
            </View>
            <View style={styles.columnDescription}>
              <Text>{skill.skill.join(", ")}</Text>
            </View>
          </View>
        ))}
    </View>
  );
}
