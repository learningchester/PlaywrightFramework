import { FullConfig } from "@playwright/test";
import * as dotenv from 'dotenv'

async function globalSetup(config: FullConfig) {

    if (process.env.setEnv) {
        dotenv.config({
            path:
                `.env.${process.env.setEnv}`,
            override: true
        })
    }
}
export default globalSetup

