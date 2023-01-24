import { Request, Response } from "express";
import Skill from "../models/skill.model";
export default class SkillController {

  async index(req: Request, res: Response) {
    try {
      const data = await Skill.findAll({});
      return res.status(200).json({ message: "success", data });
    } catch (error) {
      res.status(500).send(error);
    }
  }

  async create(req: Request, res: Response) {
    try {
      const data = await Skill.create(req.body);
      return res.status(200).json(data);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  async update(req: Request, res: Response) {
    try {
      const { id, body } = req.params;
      const data = await Skill.update(
        { body }, { where: { id } }
      );

      return res.status(200).json({ message: "OK", data });
    } catch (error) {
      res.status(500).send(error);
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;
      await Skill.destroy({ where: { id } });

      const data = await Skill.findAll({});
      return res.status(200).json({ message: "OK", data: data });
    } catch (error) {
      res.status(500).send(error);
    }
  }
}
