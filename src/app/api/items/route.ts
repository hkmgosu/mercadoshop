import {  ItemsType } from "@/app/items/page";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const search = searchParams.get("search");
  const url = `https://api.mercadolibre.com/sites/MLA/search?q=${search}&limit=4`;
  const { results } = await fetch(url).then(
    (res) =>
      res.json() as Promise<{
        results: {
          id: string;
          title: string;
          thumbnail: string;
          price: number;
          currency_id: number;
          seller_address: {
            city: {
              name: string;
            };
          };
        }[];
      }>
  );

  return Response.json({
    author: { name: "Erick", lastname: "Quiroz" },
    categories: results.map((item: any) => item.category_id),
    items: results.map((item: any) => {
      return {
        id: item.id,
        title: item.title,
        thumbnail: item.thumbnail,
        price: item.price,
        currency_id: item.currency_id,
        seller_address: { city: { name: item.seller_address.city.name } },
        condition: item.condition,
        free_shipping: item.free_shipping,
        sold_quantity: item.sold_quantity,
      };
    }),
  } as ItemsType);
}
