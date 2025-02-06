import { NextResponse } from "next/server"

export async function POST(request: Request) {
  const { email } = await request.json()

  try {
    // Aquí implementar lógica de registro
    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: "Error en registro" }, { status: 500 })
  }
}
