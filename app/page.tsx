import Image from "next/image";

export default function Page() {
  return (
    <main>
      <h1>Lion Majestueux</h1>
      <p>
        Admirez ce portrait puissant d&apos;un lion dans la savane africaine.
        Son regard perçant et sa crinière luxuriante incarnent la force et la
        noblesse de ce roi des animaux.
      </p>
      <div className="image-container">
        <Image
          src="/lion.jpg"
          alt="Un lion majestueux observant la savane"
          width={1600}
          height={1067}
          priority
        />
      </div>
      <p className="credit">
        Crédit&nbsp;: Photo de{" "}
        <a
          href="https://commons.wikimedia.org/wiki/File:Lion_waiting_in_Namibia.jpg"
          target="_blank"
          rel="noreferrer"
        >
          Yathin S Krishnappa
        </a>{" "}
        (CC BY 2.0).
      </p>
    </main>
  );
}
