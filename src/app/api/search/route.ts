export async function POST(req: Request) {
    const { kw } = await req.json();
  
    const response = await fetch(process.env.NEXT_PUBLIC_API_URL as string, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ kw })
    });
  
    const data = await response.json();
  
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }