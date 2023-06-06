// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  budapest: { lat: string; lng: string };
  dresden: { lat: string; lng: string };
  los_angeles: { lat: string; lng: string };
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res
    .status(200)
    .json({
      budapest: { lat: "47.4986567", lng: "19.0532484" },
      dresden: { lat: "51.082249", lng: "13.7269685" },
      los_angeles: { lat: "33.9201528", lng: "-118.3925842" },
    });
}
