import Image from "next/image";
import fastforex from "@api/fastforex";


export default function Home() {
  var result;
  // fastforex.auth('71e821fb46-50c19bc06f-sqgt3c');
  // fastforex.getConvert({from: 'USD', to: 'EUR', amount: 1.00})
  //   .then(({ data }) => console.log(data))
  //   .catch(err => console.error(err));

  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 sm:items-start">
        {Nav()}
        <div className="mainContent ">
            <h1>Convert currency</h1>
        </div>
      </main>
    </div>
  );
}


export function Nav(){
  return(
    <nav className="bg-zinc-900 w-screen">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex shrink-0 items-center">
              </div>
              <div className="sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  <a href="#" className="rounded-md bg-green-600 px-3 py-2 text-sm font-bold text-white" aria-current="page">Lookingmoney</a>
                  <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-zinc-800 hover:text-white">Convert</a>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
  )
}