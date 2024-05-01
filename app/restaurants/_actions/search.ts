"use server";

import { db } from "@/app/_lib/prisma";

export const searchForRestaurants = async (search: string) => {
  return db.restaurant.findMany({
    where: {
      name: {
        contains: search,
        mode: "insensitive",
      },
    },
  });
};
