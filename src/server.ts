import * as dotenv from 'dotenv';
dotenv.config({ path: `${__dirname}/../.env` });

import express from 'express';
import { Prisma, PrismaClient } from '../prisma/generated/Example';

const prisma = new PrismaClient();
const port = 8085;
const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.listen(port, () => {

    //Works
    prisma.$queryRaw`
        SELECT
            name
        FROM users
    `.then((res) => console.log(res));

    //Does not work on 4.11.0, only 4.10.1
    prisma.$queryRaw`
        SELECT
            name
        FROM users
        ${Prisma.empty}
    `.then((res) => console.log(res));

});