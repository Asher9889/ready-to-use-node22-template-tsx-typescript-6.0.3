interface IEnvConfig {
    port: string | number;


    // database
    mongodbConnectionString: string;
    mongodbUsername: string;
    mongodbPassword: string;
    mongodbCluster: string;
    mongodbDbName: string;
    jwtSecret: string;


    // JWT Secrets
    accessSecret: string;
    refreshSecret: string;
    accessTokenMaxAge: number;
    refreshTokenMaxAge: number;

}


export default IEnvConfig;