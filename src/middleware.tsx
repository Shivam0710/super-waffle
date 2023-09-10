import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
export function middleware(request: NextRequest) {
	if (request.nextUrl.pathname.startsWith('/admin') && !request.cookies.get('isAuthenticated') && !request.nextUrl.pathname.includes("login")) {
		const url = request.nextUrl.clone()
		url.pathname = '/admin/login'
		return NextResponse.redirect(url)
	}

	const response = NextResponse.next()
	return response
}