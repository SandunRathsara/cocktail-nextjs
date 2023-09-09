import Dexie, { Table } from "dexie"
import { Drink } from "@/types/drink.interface"

export class CocktailDexie extends Dexie {
  favourites!: Table<Drink>

  constructor() {
    super("cocktails")
    this.version(1).stores({
      favourites: `++id, title, category, image`
    })
  }
}

export const db = new CocktailDexie()
