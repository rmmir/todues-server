import { DataSource } from 'typeorm'

export const dataSource = new DataSource({
    type: 'postgres',
    host: 'postgres',
    port: 5432,
    username: "postgres",
    password: "password",
    database: "todues_db",
    synchronize: true,
    logging: true,
    migrations: ['src/db/migrations/*.{js,ts}'],
})