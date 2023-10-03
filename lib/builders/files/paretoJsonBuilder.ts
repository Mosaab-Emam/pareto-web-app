type ParetoJsonSchema = {
  preset: "t3-legacy";
};

export default function schemaJsonBuilder() {
  const paretoJsonSchema: ParetoJsonSchema = {
    preset: "t3-legacy",
  };

  return JSON.stringify(paretoJsonSchema);
}
