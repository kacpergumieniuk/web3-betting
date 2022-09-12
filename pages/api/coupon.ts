import type {NextApiRequest, NextApiResponse} from "next";
import {Prisma, PrismaClient} from "@prisma/client";


const prisma = new PrismaClient()


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method !== 'POST') {
        return res.status(405).json({message: 'Method not allowed'});
    }
    try {

        const couponData: Prisma.CouponCreateInput = JSON.parse(req.body)
        const savedCoupon = await insertCouponWithBets(couponData);

        const log = await res.status(200).json(savedCoupon)


    } catch (err) {
        res.status(400).json({message: 'Something went wrong'});
    }
}

async function insertCouponWithBets(couponData: Prisma.CouponCreateInput) {
    await prisma.coupon.create({
        data: couponData,
        include: {
            matchOnCoupon: true,
        },
    })
}