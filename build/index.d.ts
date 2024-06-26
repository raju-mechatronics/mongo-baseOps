import mongodb, { ObjectId } from "mongodb";
import { PaginationOptions } from "mongodb-paginate/dist/types/types";
declare class BaseDatabaseOps {
    private _db;
    collectionName: string;
    dbName: string | null;
    dbUrl: string | null;
    private _collection;
    client: mongodb.MongoClient | null;
    static ObjectId: typeof mongodb.BSON.ObjectId;
    static mongodb: typeof mongodb;
    constructor(collectionName: string, dbName?: string, dbUrl?: string);
    getDB(): Promise<mongodb.Db>;
    getCollection(): Promise<mongodb.Collection<mongodb.BSON.Document>>;
    getClient(): Promise<mongodb.MongoClient>;
    writeOne(doc: mongodb.OptionalId<mongodb.BSON.Document>, options?: mongodb.InsertOneOptions): Promise<mongodb.OptionalId<mongodb.BSON.Document>>;
    writeMany(docs: mongodb.OptionalId<mongodb.BSON.Document>[], options?: mongodb.BulkWriteOptions): Promise<mongodb.OptionalId<mongodb.BSON.Document>[]>;
    updateOne(id: string | ObjectId, entity: mongodb.OptionalId<mongodb.BSON.Document>, options?: mongodb.UpdateOptions): Promise<mongodb.UpdateResult<mongodb.BSON.Document>>;
    updateMany(entityList: Array<mongodb.OptionalId<mongodb.BSON.Document>>, options?: mongodb.UpdateOptions): Promise<mongodb.UpdateResult<mongodb.BSON.Document>[]>;
    readOne(id: string | ObjectId, resolve?: mongodb.Document): Promise<mongodb.WithId<mongodb.BSON.Document> | null>;
    readMany(id: Array<string | ObjectId | undefined>, resolve?: mongodb.Document): Promise<mongodb.WithId<mongodb.BSON.Document>[]>;
    list(filter: {} | undefined, resolve: {} | undefined, paginationOptions: PaginationOptions): Promise<import("mongodb-paginate").PaginateResult | import("mongodb-paginate").EmptyPaginateResult>;
    removeOne(id: string | ObjectId | undefined): Promise<mongodb.DeleteResult>;
    removeMany(idList: Array<string | ObjectId | undefined>): Promise<mongodb.DeleteResult>;
}
export default BaseDatabaseOps;
