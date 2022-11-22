import {initMongoose} from '../../utils/mongoose';
import Product from '../../models/Product';
import db from '../../utils/db';

export default async function handler(res:any,req:any){
    const query = req.query;
    const { slug } = query

    await db.connect();

    res.json(await Product.findOne({slug: 'free-shirt'}));
}