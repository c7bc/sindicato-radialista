"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { BadgeLink } from "./ui/badgelink";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-primary py-16 lg:min-h-[720px] lg:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-8">
        <div className="lg:flex lg:items-center lg:gap-12">
          <div className="flex flex-col items-start lg:w-1/2 lg:max-w-xl">
            <BadgeLink
              href="#sindicalize"
              label="Unidos pela Voz!"
              text="Junte-se à força dos Radialistas"
            />

            <h1 className="mt-4 text-display-md font-semibold text-primary md:text-display-lg lg:text-display-xl">
              Fortaleça sua voz. Fortaleça sua categoria.
            </h1>

            <p className="mt-4 text-lg text-secondary md:mt-6 md:text-xl">
              O Sindicato dos Radialistas é mais do que uma entidade: é o eco da
              sua dignidade profissional. Ao se sindicalizar, você defende seus
              direitos, amplia sua representatividade e fortalece quem dá vida ao
              som do Brasil.
            </p>

            <div className="mt-8 flex w-full flex-col-reverse items-stretch gap-3 md:mt-12 md:flex-row md:items-start">
              <Button variant="outline">Ver benefícios</Button>
              <Button variant="solid">Sindicalize-se agora</Button>
            </div>
          </div>

          {/* Imagem com efeito diagonal */}
          <div className="relative mt-16 h-70 w-full md:h-96 lg:mt-0 lg:h-148 lg:w-1/2">
            <Image
              className="size-full object-cover lg:[clip-path:polygon(10%_0%,_100%_0%,_100%_100%,_0%_100%)]"
              src="/hero.jpeg"
              alt="Radialista em estúdio de rádio"
              fill
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
