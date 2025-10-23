import { NextRequest, NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';

export async function POST(request: NextRequest) {
  try {
    const { fullName, email } = await request.json();

    // Validate input
    if (!fullName || !email) {
      return NextResponse.json(
        { error: 'Full name and email are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Check if email already exists
    const existingUser = await sql`
      SELECT id FROM pre_registrations 
      WHERE email = ${email}
    `;

    if (existingUser.rows.length > 0) {
      return NextResponse.json(
        { error: 'Email already registered' },
        { status: 409 }
      );
    }

    // Insert new pre-registration
    const result = await sql`
      INSERT INTO pre_registrations (full_name, email, created_at)
      VALUES (${fullName}, ${email}, NOW())
      RETURNING id
    `;

    return NextResponse.json({
      success: true,
      message: 'Pre-registration successful!',
      id: result.rows[0].id
    });

  } catch (error) {
    console.error('Pre-registration error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    // Get total count of pre-registrations
    const result = await sql`
      SELECT COUNT(*) as total FROM pre_registrations
    `;

    return NextResponse.json({
      total: result.rows[0].total
    });
  } catch (error) {
    console.error('Get registrations error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
