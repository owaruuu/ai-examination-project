export const dynamic = "force-static";
// export const revalidate = 60;

export async function GET() {
    const res = await fetch(
        "http://www.backup-backend.readychatai.com/messages_jsonBAD"
    );

    if (!res.ok) {
        return Response.json({ data: null, message: "Error fetching." });
    }

    const data = await res.json();

    return Response.json({ data });
}
