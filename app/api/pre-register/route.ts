import { NextRequest, NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';

export async function POST(request: NextRequest) {
  try {
    const { fullName, email } = await request.json();

    // Trim whitespace from inputs to prevent issues with trailing spaces
    const trimmedFullName = fullName?.trim();
    const trimmedEmail = email?.trim();

    // Validate input
    if (!trimmedFullName || !trimmedEmail) {
      return NextResponse.json(
        { error: 'Full name and email are required fields' },
        { status: 400 }
      );
    }

    // Validate full name (no empty strings after trimming)
    if (trimmedFullName.length === 0) {
      return NextResponse.json(
        { error: 'Full name cannot be empty. Please enter your name.' },
        { status: 400 }
      );
    }

    // Validate full name length
    if (trimmedFullName.length > 255) {
      return NextResponse.json(
        { error: 'Full name is too long. Please use less than 255 characters.' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      return NextResponse.json(
        { error: 'Invalid email format. Please enter a valid email address (e.g., name@example.com)' },
        { status: 400 }
      );
    }

    // Validate email length
    if (trimmedEmail.length > 255) {
      return NextResponse.json(
        { error: 'Email is too long. Please use less than 255 characters.' },
        { status: 400 }
      );
    }

    // Block institutional email domains
    const institutionalDomains = [
      'edu', 'ac.', 'university', 'college', 'school', 'unibo', 'polimi', 'polito',
      'unimi', 'unipd', 'unito', 'unina', 'unifi', 'uniro', 'unipg', 'univaq',
      'uniud', 'units', 'unisalento', 'uniba', 'unical', 'unicatt', 'unitn',
      'unicam', 'uniurb', 'unibs', 'unimc', 'unimol', 'unisannio', 'unibas',
      'unicz', 'unica', 'unime', 'unikore', 'unitus', 'unich', 'uniroma',
      'uniroma1', 'uniroma2', 'uniroma3', 'unimib', 'unipv', 'unige', 'unibo.it',
      'studenti', 'student', 'mail.studenti', 'campus'
    ];
    
    const emailDomain = trimmedEmail.toLowerCase().split('@')[1];
    
    const isInstitutional = institutionalDomains.some(domain => 
      emailDomain.includes(domain.toLowerCase())
    );
    
    if (isInstitutional) {
      return NextResponse.json(
        { error: 'Institutional email addresses are not allowed. Please use a personal email address.' },
        { status: 400 }
      );
    }

    // Check if email already exists
    const existingUser = await sql`
      SELECT id FROM pre_registrations 
      WHERE email = ${trimmedEmail}
    `;

    if (existingUser.rows.length > 0) {
      return NextResponse.json(
        { error: 'This email is already registered. Please use a different email address.' },
        { status: 409 }
      );
    }

    // Insert new pre-registration
    const result = await sql`
      INSERT INTO pre_registrations (full_name, email, created_at)
      VALUES (${trimmedFullName}, ${trimmedEmail}, NOW())
      RETURNING id
    `;

    return NextResponse.json({
      success: true,
      message: 'Thank you! Your pre-registration was successful.',
      id: result.rows[0].id
    });

  } catch (error) {
    console.error('Pre-registration error:', error);
    
    // Provide more specific error messages
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    
    // Check for specific database errors
    if (errorMessage.includes('does not exist')) {
      return NextResponse.json(
        { error: 'Database error: The registration table could not be found. Please contact support.' },
        { status: 503 }
      );
    }
    
    if (errorMessage.includes('connection') || errorMessage.includes('timeout')) {
      return NextResponse.json(
        { error: 'Unable to connect to the database. Please try again in a moment.' },
        { status: 503 }
      );
    }
    
    // Generic error for unexpected issues
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again later or contact support if the problem persists.' },
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
