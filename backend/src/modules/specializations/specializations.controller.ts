import { Request, Response, NextFunction } from 'express';
import prisma from '../../database/prisma';
import { sendSuccess } from '../../utils/response';

export class SpecializationsController {
  static async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const specializations = await prisma.specialization.findMany({
        orderBy: { name: 'asc' },
        include: {
          _count: {
            select: { doctors: true },
          },
        },
      });
      return sendSuccess(res, specializations, 'Specializations retrieved');
    } catch (error) {
      return next(error);
    }
  }

  static async getById(req: Request, res: Response, next: NextFunction) {
    try {
      const specialization = await prisma.specialization.findUnique({
        where: { id: req.params.id },
        include: { doctors: true },
      });
      if (!specialization) {
        throw { statusCode: 404, message: 'Specialization not found', code: 'NOT_FOUND' };
      }
      return sendSuccess(res, specialization, 'Specialization details');
    } catch (error) {
      return next(error);
    }
  }

  static async create(req: Request, res: Response, next: NextFunction) {
    try {
      const { name, description, icon } = req.body;
      const specialization = await prisma.specialization.create({
        data: { name, description, icon },
      });
      return sendSuccess(res, specialization, 'Specialization created', 201);
    } catch (error) {
      return next(error);
    }
  }
}
