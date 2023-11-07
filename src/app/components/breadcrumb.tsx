export default async function Breadcrumb(props: {
  categoryId: string | undefined;
}) {
  const url = `https://api.mercadolibre.com/categories/${props.categoryId}`;
  const { path_from_root }: any = await fetch(url).then(
    (res) => res.json() as Promise<any>
  );
  if (!path_from_root) return <></>;
  return (
    <nav className="flex py-2 px-2 justify-start" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        <li className="inline-flex items-center">
          <a
            href="/"
            className="inline-flex items-center text-xs font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-600"
          >
            Inicio
          </a>
        </li>
        {path_from_root.map(
          (path: { id: string; name: string }, i: number, arr: any) => {
            return (
              <li key={path.id}>
                <div className="flex items-center">
                  <svg
                    className="w-3 h-3 text-gray-400 mx-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1"
                      d="m1 9 4-4-4-4"
                    />
                  </svg>
                  <a
                    href="#"
                    className="ml-1 text-xs font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-blue-600"
                  >
                    {path.name}
                  </a>
                </div>
              </li>
            );
          }
        )}
      </ol>
    </nav>
  );
}
