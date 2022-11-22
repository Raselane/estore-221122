import Link from 'next/link';
import Image from 'next/image';
import Router, { useRouter } from 'next/router';
import React, { useContext } from 'react'
import Layout from '../../components/Layout'
import data from '../../utils/data';
import { Store } from '../../utils/Store';
import db from '../../utils/db';
import Product from '../../models/Product';
import { GetServerSidePropsContext, InferGetServerSidePropsType, NextPage } from 'next';
import { GetServerSideProps } from 'next'

type prodProps = {
    product: {
        name: string,
        slug: string,
        category:string,
        image: string,
        price: Number,
        brand: string,
        rating: Number,
        numReviews: Number,
        countInStock: Number,
        description: string,

        item:Number,

    },
  }

const ProductScreen: NextPage<InferGetServerSidePropsType<typeof getServerSideProps>> =({product}: prodProps)=>{
    const products:any = JSON.stringify(product);
    console.log(products);
    const {state, dispatch}:any = useContext(Store);
    const router = useRouter();
    const {query} = useRouter();
    const {slug} = query;
    //const product = data.products.find((x) => x.slug === slug);

    if(!product){
        return <div>Product Not Found</div>
    }
    const addToCartHandler = () =>{
        const existItem = state.cart.cartItems.find( (item:any) => item.slug === product.slug);
        const quantity = existItem ? existItem.quantity + 1: 1;

        if(product.countInStock < quantity)
        {
            alert("Sorry, product is out of stock");
            return;
        }
        dispatch({type: 'CART_ADD_ITEM', payload: {...product, quantity}})
        router.push("/cart");
    }
  return (
  <Layout title={products.name}>
    <div className="py=2">
        <Link href="/">Back to products</Link>
    </div>

    <div className='grid md:grid-cols-4 md:gap-3'>
        <div className='md:col-span-2'>
            <Image
                src={products.image.toString()}
                alt={products.name}
                width={640}
                height={640}
                layout="responsive"
            ></Image>
        </div>
        <div>
            <ul>
                <li><h1 className='text-lg font-bold'>{products.name}</h1></li>
                <li>Category: {products.category}</li>
                <li>Brand: {products.brand}</li>
                <li>{products.rating} of {products.numReviews} reviews</li>
                <li>Description: {products.description}</li>
            </ul>
        </div>
        <div>
            <div className='card p-5'>
                <div className='mb-2 flex justify-between'>
                    <div>Price</div>
                    <div>M{products.price}.00</div>
                </div>
                <div className='mb-2 flex justify-between'>
                    <div>Status</div>
                    <div>{products.countInStock > 0 ? 'In-Stock': 'Unavailable'}</div>
                </div>
                <button className='primary-button w-full' onClick={addToCartHandler}>Add to cart</button>
            </div>
        </div>
    </div>
  </Layout>
  )
  
}

export const getServerSideProps: GetServerSideProps<prodProps> = async(context: GetServerSidePropsContext) =>{
    const { params } = context;
    const {slug} = params;
    await db.connect();
    const item = 6;
    const product = await Product.findOne({slug});
   // console.log(JSON.parse(JSON.stringify(db.convertDocToObj(product))));

    return {
        props:{product:JSON.parse(JSON.stringify(db.convertDocToObj(product)))}
    }
}
export default ProductScreen;
 