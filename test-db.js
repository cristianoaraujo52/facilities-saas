const { PrismaClient } = require('@prisma/client');

// Using the provided password and host.
const url = "postgresql://postgres:Analu305060%23@db.xnilcigwwbskylejyhpw.supabase.co:5432/postgres";

const prisma = new PrismaClient({
    datasources: {
        db: {
            url: url
        }
    }
});

async function main() {
    console.log("Testing connection...");
    try {
        await prisma.$connect();
        console.log("✅ LIVE DATABASE CONNECTION SUCCESSFUL!");
    } catch (e) {
        console.error("❌ CONNECTION FAILED:");
        console.error(e);
    } finally {
        await prisma.$disconnect();
    }
}

main();
