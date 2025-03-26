import { prisma } from '@/lib/prisma';
import { NextApiRequest, NextApiResponse } from 'next';


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  try {
    switch (req.method) {
      case 'GET':
        const packageData = await prisma.healthPackage.findUnique({
          where: { id: Number(id) }
        });
        
        if (!packageData) {
          return res.status(404).json({ error: 'Package not found' });
        }
        
        return res.status(200).json(packageData);

      case 'PUT':
        const { title, description, originalPrice, discountedPrice, features, image } = req.body;
        
        const updatedPackage = await prisma.healthPackage.update({
          where: { id: Number(id) },
          data: {
            title,
            description,
            originalPrice: parseFloat(originalPrice),
            discountedPrice: parseFloat(discountedPrice),
            features: features,
            image
          }
        });
        
        return res.status(200).json(updatedPackage);

      case 'DELETE':
        await prisma.healthPackage.delete({
          where: { id: Number(id) }
        });
        
        return res.status(204).end();

      default:
        res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
        return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (error:any) {
    console.error('Error:', error);
    
    if (error?.code === 'P2025') {
      return res.status(404).json({ error: 'Package not found' });
    }
    
    return res.status(500).json({ 
      error: 'Internal server error',
      details: error.message 
    });
  } finally {
    await prisma.$disconnect();
  }
}