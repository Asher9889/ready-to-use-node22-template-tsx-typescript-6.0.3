import { parseStringDurationToMs } from "../shared";
import IEnvConfig from "./types";
import { StringValue } from "ms";

const envConfig:IEnvConfig = {
    port: Number(process.env.PORT || 3000),

    // database
    mongodbConnectionString: process.env.MONGODB_CONNECTION_STRING!,
    mongodbUsername: process.env.MONGODB_USERNAME!,
    mongodbPassword: encodeURIComponent(process.env.MONGODB_PASSWORD!),
    mongodbCluster: process.env.MONGODB_CLUSTER!,
    mongodbDbName: process.env.MONGODB_DB_NAME!,

    // jwt
    jwtSecret: process.env.JWT_SECRET!,

    // Secrets
    accessSecret: process.env.ACCESS_SECRET!,
    refreshSecret: process.env.REFRESH_SECRET!,

    accessTokenMaxAge: parseStringDurationToMs(process.env.ACCESS_TOKEN_MAX_AGE as StringValue, "ACCESS_TOKEN_MAX_AGE"),
    refreshTokenMaxAge: parseStringDurationToMs(process.env.REFRESH_TOKEN_MAX_AGE as StringValue, "REFRESH_TOKEN_MAX_AGE")
}

export default envConfig;