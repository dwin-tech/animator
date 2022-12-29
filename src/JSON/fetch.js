export async function getJsonFrame() {
  try {
    const res = await fetch("http://localhost:5000/", {});
    const data = await res.json();
    return data;
  } catch (error) {
    console.log("ERROR :--> ", error);
    return [];
  }
}
