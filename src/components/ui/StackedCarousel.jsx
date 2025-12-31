import Image from "next/image";

import "@/styles/components/ui/stackedCarousel.css";

export default function StackedCarousel({ activeIndex, cards }) {
  const getCardIndex = (index) =>
    (index - activeIndex + cards.length) % cards.length;

  return (
    <div className="carousel-container">
      <div className="card-stack">
        {cards.map((card, index) => {
          const position = getCardIndex(index);

          if (position > 2) return null; // only show top 3 cards

          return (
            <div key={card.id} className={`card position-${position}`}>
              <Image
                src={card.image}
                alt={card.title}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
