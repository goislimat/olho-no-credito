interface Props {
  sectionTitle: string;
  items: {
    photoURL: string;
    photoDescription: string;
    title: string;
    description: string;
  }[];
}

function ThreeDescritiveCards({ sectionTitle, items }: Props) {
  return (
    <section>
      {items.map(function ({ photoURL, photoDescription, title, description }) {
        return (
          <article>
            <header>
              <img src={photoURL} alt={photoDescription} />
              <p>{title}</p>
            </header>

            <p>{description}</p>
          </article>
        );
      })}
    </section>
  );
}

export default ThreeDescritiveCards;
