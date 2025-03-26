import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    switch (req.method) {
      case 'GET':
        const packages = await prisma.healthPackage.findMany();
        return res.status(200).json(packages);

      case 'POST':
        const { title, description, originalPrice, discountedPrice, features, image } = req.body;
        
        if (!title || !description || !originalPrice || !discountedPrice || !features) {
          return res.status(400).json({ error: 'Missing required fields' });
        }

        const newPackage = await prisma.healthPackage.create({
          data: {
            title,
            description,
            originalPrice: parseFloat(originalPrice),
            discountedPrice: parseFloat(discountedPrice),
            features: features,
            image: image || 'https://via.placeholder.com/300'
          }
        });
        
        return res.status(201).json(newPackage);

      default:
        res.setHeader('Allow', ['GET', 'POST']);
        return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (error:any) {
    console.error('Error:', error);
    return res.status(500).json({ 
      error: 'Internal server error',
      details: error?.message 
    });
  } finally {
    await prisma.$disconnect();
  }
}