import { MikroORM } from "@mikro-orm/core";
import { __prod__ } from "./constants";
import { Post } from "./entities/Post";
import microConfig from './mikro-orm.config';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';
import { HelloResolver } from "./resolvers/hello";

const main = async () => {
    const orm = await MikroORM.init(microConfig);
    orm.getMigrator().up();

    const app = express();

    const apolloServer = new ApolloServer({
        schema: await buildSchema({
            resolvers: [HelloResolver],
            validate: false,
        }),
    });

    apolloServer.applyMiddleware({ app });

    app.listen(5000, () =>{
        console.log('server started on localhost:5000');
    });
};

main().catch((err) => {
    console.error(err);
});