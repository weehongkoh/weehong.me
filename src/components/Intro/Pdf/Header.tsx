import { StyleSheet, Text, View } from "@react-pdf/renderer";

import { ResumeProp } from "@/types";

const styles = StyleSheet.create({
  section: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 5,
  },
  highlight: {
    fontSize: 12,
    fontWeight: "bold",
  },
  label: {
    width: 150,
    fontWeight: 700,
  },
});

export default function Header({
  data,
}: {
  data: Pick<ResumeProp, "name" | "email" | "phone" | "nationality">;
}) {
  return (
    <View style={styles.section}>
      <View>
        <Text style={styles.highlight}>{data.name}</Text>
        <Text>
          {data.email} | {data.phone} | {data.nationality}
        </Text>
        <Text>https://www.weehong.me</Text>
      </View>
    </View>
  );
}
