import Breadcrumbs from "@/app/components/breadcrumb";
import { Suspense } from "react";
import Description from "./description";

async function getItem(id: string) {
  const urlItem = new URL(`https://api.mercadolibre.com/items/${id}`);
  return await fetch(urlItem).then((res) => res.json() as Promise<any>);
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  // dynamic metadata
  const item = await getItem(params.id);
  return {
    title: `${item.title} - Mercado Shop`,
    description: "Test generado con nextjs13",
    generator: "Next.js",
    applicationName: "Next.js",
    referrer: "origin-when-cross-origin",
    keywords: ["Next.js", "React", "JavaScript"],
    authors: [{ name: "Erick" }],
    creator: "Erick Quiroz",
    publisher: "Erick Quiroz",
  };
}

export default async function ItemPage(segments: any) {
  const item = await getItem(segments.params.id);
  return (
    <>
      <Breadcrumbs categoryId={item.category_id} />
      <section>
        <article className="grid gap-2 rounded-md bg-white p-8 mb-4">
          <div className="md:flex gap-6">
            <div className="md:w-2/3 h-auto">
              <img src={item.thumbnail} alt={item.price} className="w-full" />
              <p className="text-2xl font-medium py-6">
                Descripción del producto
              </p>
              <Suspense fallback={<span>cargando la descripción</span>}>
                <Description id={segments.params.id} />
              </Suspense>
            </div>
            <div className="md:w-1/3 py-4">
              <p className="text-sm">
                {item.condition} - {item.sold_quantity} vendidos
              </p>
              <p className="text-lg font-semibold">{item.title}</p>
              <p className="text-4xl font-medium py-6">
                {Number(item.price).toLocaleString("es-AR", {
                  style: "currency",
                  currency: item.currency_id,
                })}
              </p>
              <button
                type="button"
                className="text-white text-xl py-3 w-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Comprar
              </button>
            </div>
          </div>
        </article>
      </section>
    </>
  );
}
