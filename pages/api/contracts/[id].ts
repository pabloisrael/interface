import type { NextApiRequest, NextApiResponse } from "next";

import prisma from "../_base";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const contract = await prisma.contract.findUnique({
      where: { id: String(req.query.id) },
      include: { owner: true, tenant: true },
    });
    return res.status(200).json(contract);
  }
}
