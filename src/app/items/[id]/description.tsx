export default async function Description(props: { id: string }) {
  const urlDescription = new URL(
    `https://api.mercadolibre.com/items/${props.id}/description`
  );
  const { plain_text } = await fetch(urlDescription).then(
    (res) => res.json() as Promise<any>
  );
  return <p className="pb-6">{plain_text || "sin descripción"}</p>;
}
