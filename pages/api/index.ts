// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios';
import { xml2json } from 'xml-js';

import type { NextApiRequest, NextApiResponse } from 'next';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const data = req.body;

    const response: any = await axios.get('https://ignio.com/r/export/utf/xml/daily/com.xml', {
      headers: {
        'Content-Type': 'application/xml',
      },
    });
    const result = xml2json(response.data, { compact: false, spaces: 4 });

    const zodiacs = JSON.parse(result);
    res.status(201).json(zodiacs);
  } catch (err) {
    console.log(err);
  }
}

export default handler;
