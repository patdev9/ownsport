import { MysqlConnectionOptions } from "typeorm/driver/mysql/MysqlConnectionOptions"

const config: MysqlConnectionOptions = {
    type: "mysql",
    host: "localhost",
    port: 8889,
    username: "root",
    password: "rootroot",
    database: "ownsportFB",
    synchronize: true,
    entities:['entities/*.ts']
}
export default config