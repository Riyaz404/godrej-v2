import { google } from 'googleapis'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    })

    const sheets = google.sheets({ version: 'v4', auth })

    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID!,
      range: 'Sheet1!A:E',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[
          body.fullName,
          body.phone,
          body.budget,
          body.config,
          new Date().toLocaleString(),
        ]],
      },
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ success: false }, { status: 500 })
  }
}
console.log("ENV CHECK:", {
  sheet: process.env.GOOGLE_SHEET_ID,
  email: process.env.GOOGLE_CLIENT_EMAIL ? "OK" : "MISSING",
  key: process.env.GOOGLE_PRIVATE_KEY ? "OK" : "MISSING",
})