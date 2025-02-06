export const dynamic = "force-static";
// export const revalidate = 60;

export async function GET() {
    const res = await fetch(
        "http://www.backup-backend.readychatai.com/messages_json"
    );
    console.log("🚀 ~ GET ~ res:", res);

    if (!res.ok) {
        return Response.json({ data: null, message: "Error fetching." });
    }

    const data = await res.json();
    console.log("🚀 ~ GET ~ data:", data);

    return Response.json({ data });
}
