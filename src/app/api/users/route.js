import { NextResponse } from "next/server";
import { getDbConnection } from "@/lib/db";

export async function GET() {
    try {
        const pool = await getDbConnection();
        
        const [users] = await pool.execute("SELECT * FROM users");

        return NextResponse.json({
            success: true,
            data: users
        })
    } catch (error) {
        return NextResponse.json({
            success: false,
            error: error.message
        },{status: 500});
    }
}