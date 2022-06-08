// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import React, { useState } from "react";

export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}



const FORM_ENDPOINT = "https://public.herotofu.com/v1/EXAMPLE_FORM_ID";

// The rest of the code...