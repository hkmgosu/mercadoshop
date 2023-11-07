/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Breadcrumb from "../components/breadcrumb";

export type ItemType = {
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
  condition: String;
  free_shipping: Boolean;
  sold_quantity: Number;
  /* price: {
    currency: String;
    amount: Number;
    decimals: Number;
  };
  picture: String;
  free_shipping: Boolean; */
};

export type ItemsType = {
  categories: string[];
  items: ItemType[];
};

export default async function ItemsPage(params: {
  searchParams: { search: string };
}) {
  // route handler method for public api
  const results: ItemsType = await fetch(
    `http://localhost:3000/api/items?search=${params.searchParams.search}`
  ).then((res) => res.json());

  return (
    <>
      <Breadcrumb
        categoryId={results.categories.find(
          (item: any, i: number, arr: any) => arr.indexOf(item) !== i
        )}
      />
      <section>
        <article className="grid gap-1 content-start">
          {results.items.map((item: any) => {
            return (
              <Link
                key={item.id}
                className="flex gap-4 bg-white p-4 h-44"
                href={`/items/${item.id}`}
              >
                <img src={item.thumbnail} alt={item.price} />
                <div className="md:w-2/3">
                  <p className="text-md font-medium text-lg py-3">
                    {Number(item.price).toLocaleString("es-AR", {
                      style: "currency",
                      currency: item.currency_id,
                    })}
                  </p>
                  <p className="text-md">{item.title}</p>
                </div>
                <span className="ml-2 md:w-1/6 pt-3 text-sm capitalize opacity-50">
                  {item.seller_address.city.name}
                </span>
              </Link>
            );
          })}
        </article>
      </section>
    </>
  );
}
