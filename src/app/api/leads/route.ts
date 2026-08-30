import { NextResponse } from "next/server";
import { z } from "zod";

const leadSchema = z.object({
  interest: z.string().trim().min(2).max(120),
  dates: z.string().trim().max(80).optional(),
  groupSize: z.coerce.number().int().min(1).max(20).optional(),
  contact: z.string().trim().min(5).max(160),
  consent: z.literal("yes"),
  company: z.string().max(0)
});

export async function POST(request: Request) {
  const data = Object.fromEntries(await request.formData());
  const parsed = leadSchema.safeParse(data);
  if (!parsed.success) return NextResponse.json({ ok: false, error: "Проверьте заполнение полей" }, { status: 400 });
  // TODO: сохранить лид через Payload Local API после подключения CMS. PII не логировать.
  return NextResponse.json({ ok: true, message: "Запрос принят в демо-режиме" }, { status: 202 });
}
