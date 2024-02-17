import type {Config} from 'drizzle-kit'

export default {
    schema: './db/schema.tsx',
    out: './drizzle',
    driver: 'better-sqlite',
    dbCredentials: {
        url: "sqlite.db"
    }
} satisfies Config