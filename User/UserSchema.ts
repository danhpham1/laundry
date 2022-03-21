import client from "../mongodb/client.ts";
import {
    Bson,
  } from "https://deno.land/x/mongo/mod.ts";

interface UserSchema {
    // _id?: Bson.ObjectId;
    username:string;
    password:string;
    roleId:Bson.ObjectId;
}

const db = client.database("deno");
const users = db.collection<UserSchema>("users");

export default users;