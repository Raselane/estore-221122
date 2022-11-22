import Product from '../../models/Product';
import User from '../../models/User';
import data from '../../utils/data';
import db from '../../utils/db';

const handler = async (req:any, res:any) => {
 
  try {
    await db.connect();
    const products = await db.collections('products').find({}).toArray();
    
    return res.json({
      data: JSON.parse(JSON.stringify(products)),
      success: true,
          })
  } catch (error) {
    return res.json({
      message: new Error(error).message,
      success: false,
    })
    console.error(error);
         } 
  await db.disconnect();
  res.send({ message: 'seeded successfully' });
};
export default handler;
