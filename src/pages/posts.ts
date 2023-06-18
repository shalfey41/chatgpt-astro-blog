export async function get() {
  return {
    body: JSON.stringify({ id: 1, title: "abc" }),
  };
}
