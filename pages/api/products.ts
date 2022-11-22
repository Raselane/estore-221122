import {initMongoose} from '../../utils/mongoose';
import Product from '../../models/Product';
import db from '../../utils/db';

export default async function handler(req:any, res:any){
    await db.connect();

    res.json(await Product.find().exec() );
}