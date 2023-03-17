import Image from "next/image";
import Head from "next/head";
export default function Ramen() {
  return (
    <div>
      <Head>
        <style>{`
          .center {
            display: block;
            margin: auto;
          }
        `}</style>
      </Head>
      <h1>Spicy Miso Ramen</h1>
      <Image
        src="/../../public/Spicy-Miso-Ramen.jpg"
        alt="Picture of Spicy Miso Ramen"
        width={500}
        height={500}
        layout="responsive"
        className="center"
      />
      <p>This is the recipe for my delicious spicy miso ramen! </p>
      <ul>
        <li>Ingredients:</li>
        <li>2 tablespoons toasted sesame oil </li>
        <li>4 garlic cloves, minced</li>
        <li>1 shallot, minced </li>
        <li>¼ cup miso paste </li>
        <li>2 tablespoons of gochujang</li>
        <li>
          2 tablespoons toasted sesame seeds, coarsely ground with a mortar and
          pestle or spice grinder.
        </li>
        <li>8 cups low-sodium chicken broth </li>
        <li>Salt, to taste (if needed) </li>
        <li>Sugar, to taste (if needed) </li>
        <li>4 5-ounce packages fresh ramen noodles </li>
        <li>4 soft-boiled eggs </li>
        <li>
          4 baby bok choy, quartered and blanched (or substitute about 12 ounces
          other veggies)
        </li>
        <li>1 bunch scallions, thinly sliced </li>
        <li>La-yu (Japanese chili oil), to serve (optional</li>
      </ul>
      <li>Instructions:</li>
      <div>
        <li>
          1. In a large wok or Dutch oven over medium heat, heat sesame oil
          until fragrant.
        </li>
        <li>
          2. Add the minced garlic, ginger, and shallots. Stir-fry until
          fragrant, about 30 seconds.
        </li>
        <li>
          3. Add the miso paste and ground sesame seeds and stir to incorporate.
          Add the spicy gochujang to taste.
        </li>
        <li>
          4.Add the chicken broth and bring to a simmer. Taste and adjust
          seasoning with salt and/or sugar, if needed.
        </li>
        <li>
          5. Meanwhile, bring a large pot of unsalted water to a boil over high
          heat and cook the ramen noodles according to package directions. .
        </li>
        <li>
          6. Divide ramen noodles between 4 bowls. Ladle soup base over cooked
          noodles.
        </li>
        <li>7. Halve soft-boiled eggs and add to ramen bowls.</li>
        <li>
          8. Garnish with bok choy, sliced scallions, and la-yu. Serve and
          enjoy!
        </li>
      </div>
    </div>
  );
}
