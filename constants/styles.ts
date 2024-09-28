import { ImageSourcePropType } from "react-native";

type ImageInfo = {
  src: ImageSourcePropType;
  title: string;
  author: string;
  description: string;
};

type Style = {
  name: string;
  images: ImageInfo[];
  description: string;
};

export const data_styles: Style[] = [
  {
    name: "Abstract",
    images: [
      {
        src: require("@assets/images/styles/Abstract/0.jpg"),
        title: "Squares with Concentric Circles",
        author: "Wassily Kandinsky",
        description:
          "A vibrant exploration of color and form, this work by Kandinsky uses circles within squares to represent emotional and spiritual dynamics, characteristic of the abstract movement.",
      },
      {
        src: require("@assets/images/styles/Abstract/1.jpg"),
        title: "Composition VII",
        author: "Wassily Kandinsky",
        description:
          "One of Kandinsky's most complex works, Composition VII, represents his theories on spirituality in art, using a chaotic mixture of colors and forms to create an intense visual experience.",
      },
      {
        src: require("@assets/images/styles/Abstract/2.jpg"),
        title: "Composition VIII",
        author: "Wassily Kandinsky",
        description:
          "This painting emphasizes geometric shapes and a sense of dynamism, reflecting Kandinsky's deep interest in music and its abstract forms.",
      },
      {
        src: require("@assets/images/styles/Abstract/3.jpg"),
        title: "Yellow-Red-Blue",
        author: "Wassily Kandinsky",
        description:
          "In this work, Kandinsky juxtaposes large areas of color with geometric forms, exploring the relationship between form and color in abstract art.",
      },
      {
        src: require("@assets/images/styles/Abstract/4.jpeg"),
        title: "Autumn Rhythm (Number 30)",
        author: "Jackson Pollock",
        description:
          "A hallmark of Pollock's drip technique, this painting represents the raw energy and movement inherent in abstract expressionism.",
      },
    ],
    description:
      "Abstract art is a style that emphasizes shapes, colors, and forms over realistic representations, focusing on emotional and spiritual expression rather than literal depictions of reality.",
  },
  {
    name: "Baroque",
    images: [
      {
        src: require("@assets/images/styles/Baroque/0.jpeg"),
        title: "Self-Portrait with a Sunflower",
        author: "Anthony van Dyck",
        description:
          "This self-portrait reflects van Dyck's mastery of portraiture, capturing the artist in a moment of grace and elegance, typical of the Baroque era's dramatic lighting and attention to detail.",
      },
      {
        src: require("@assets/images/styles/Baroque/1.jpg"),
        title: "Judith Slaying Holofernes",
        author: "Artemisia Gentileschi",
        description:
          "A powerful Baroque painting, depicting the biblical story of Judith beheading Holofernes. Gentileschi conveys intense emotion and dynamic composition, showcasing her command of chiaroscuro.",
      },
      {
        src: require("@assets/images/styles/Baroque/2.jpg"),
        title: "Girl with a Pearl Earring",
        author: "Johannes Vermeer",
        description:
          "Often referred to as the 'Mona Lisa of the North,' Vermeer’s masterpiece captures the mysterious gaze of a young girl, showcasing the artist’s delicate handling of light and texture.",
      },
      {
        src: require("@assets/images/styles/Baroque/3.jpg"),
        title: "Las Meninas",
        author: "Diego Velázquez",
        description:
          "This complex composition features a group of figures surrounding the Infanta Margarita, with Velázquez himself appearing in the scene. 'Las Meninas' is celebrated for its intricate use of perspective and light.",
      },
      {
        src: require("@assets/images/styles/Baroque/4.jpg"),
        title: "The Night Watch",
        author: "Rembrandt van Rijn",
        description:
          "One of Rembrandt's most famous works, this group portrait of a militia company is renowned for its dramatic use of light and shadow, characteristic of the Baroque style.",
      },
    ],
    description:
      "Baroque art is known for its dramatic use of light, rich detail, and emotional intensity. It often depicts religious, historical, or mythological subjects with dynamic compositions and a sense of movement.",
  },
  {
    name: "Cubism",
    images: [
      {
        src: require("@assets/images/styles/Cubism/0.jpg"),
        title: "Violin and Candlestick",
        author: "Georges Braque",
        description:
          "This work is an iconic example of Analytical Cubism, breaking down objects into fragmented geometric shapes and showing multiple perspectives at once.",
      },
      {
        src: require("@assets/images/styles/Cubism/1.jpg"),
        title: "Man with a Guitar",
        author: "Juan Gris",
        description:
          "In this Cubist painting, Gris uses vibrant colors and geometric shapes to depict a man holding a guitar, blending human form and objects into a unified structure.",
      },
      {
        src: require("@assets/images/styles/Cubism/2.jpg"),
        title: "Les Demoiselles d'Avignon",
        author: "Pablo Picasso",
        description:
          "A revolutionary work that marked the beginning of Cubism. Picasso depicts five nude women with bodies broken into geometric planes and faces influenced by African masks.",
      },
      {
        src: require("@assets/images/styles/Cubism/3.jpg"),
        title: "Portrait of Ambroise Vollard",
        author: "Pablo Picasso",
        description:
          "This Cubist portrait features Ambroise Vollard, a major patron of Picasso, with sharp geometric forms that break down the face into an almost abstract structure.",
      },
      {
        src: require("@assets/images/styles/Cubism/4.jpg"),
        title: "Woman with a Hat",
        author: "Pablo Picasso",
        description:
          "A work that combines Cubist influences with expressive use of color, showing a woman's face with a hat, deconstructed into vibrant and geometric forms.",
      },
    ],
    description:
      "Cubism is an artistic movement that broke away from traditional representations, deconstructing objects into geometric shapes and showing multiple viewpoints in a single image. Pioneered by artists like Pablo Picasso and Georges Braque, it revolutionized 20th-century painting.",
  },
  {
    name: "Romanticism",
    images: [
      {
        src: require("@assets/images/styles/Romanticism/0.jpg"),
        title: "The Kiss",
        author: "Francesco Hayez",
        description:
          "A quintessential Romantic painting, 'The Kiss' captures a moment of passionate embrace, symbolizing themes of love and nationalistic fervor.",
      },
      {
        src: require("@assets/images/styles/Romanticism/1.jpg"),
        title: "The Raft of the Medusa",
        author: "Théodore Géricault",
        description:
          "This dramatic composition depicts the aftermath of a shipwreck, showcasing Géricault’s interest in human suffering and the sublime power of nature.",
      },
      {
        src: require("@assets/images/styles/Romanticism/2.jpg"),
        title: "Liberty Leading the People",
        author: "Eugène Delacroix",
        description:
          "A symbol of the French Revolution, this iconic painting depicts Liberty personified, leading a diverse group of revolutionaries forward, with the French flag in hand.",
      },
      {
        src: require("@assets/images/styles/Romanticism/3.jpg"),
        title: "La Maja Desnuda",
        author: "Francisco de Goya",
        description:
          "One of Goya’s most famous works, this painting of a reclining nude woman challenges traditional depictions of the female form, blending sensuality and realism.",
      },
      {
        src: require("@assets/images/styles/Romanticism/4.jpg"),
        title: "The Nightmare",
        author: "Henry Fuseli",
        description:
          "This eerie painting captures a woman in a deep sleep, haunted by a demonic presence. It represents Fuseli’s fascination with dreams, the supernatural, and the darker aspects of human psychology.",
      },
    ],
    description:
      "Romanticism emphasized emotion, individualism, and the awe of nature. It often depicted dramatic scenes of human passion, historical events, and the sublime beauty of the natural world.",
  },
  {
    name: "Realism",
    images: [
      {
        src: require("@assets/images/styles/Realism/0.jpg"),
        title: "The Desperate Man",
        author: "Gustave Courbet",
        description:
          "Le Désespéré is an oil-on-canvas self-portrait by Gustave Courbet, produced in 1843–1845, early during his stay in Paris. It is now in the private collection of the Conseil Investissement Art BNP Paribas but was displayed in the Musée d'Orsay's 2007 Courbet exhibition.",
      },
      {
        src: require("@assets/images/styles/Realism/1.jpg"),
        title: "Fall Woods (Осенний лес)",
        author: "Ivan Ivanovich Shishkin",
        description:
          "Shishkin is celebrated for his ability to capture the natural beauty of Russian forests, especially in different seasons. Showcases a peaceful autumn landscape, with trees shedding their leaves, creating a golden and serene atmosphere typical of Shishkin's work.",
      },
      {
        src: require("@assets/images/styles/Realism/2.jpg"),
        title: "The child round dance",
        author: "Hans Thoma",
        description:
          "Showcases a group of children holding hands in a circle and playing outdoors, a popular children's game from the time. The painting is characteristic of Thoma's gentle and idyllic portrayal of rural scenes, with the backdrop of a serene landscape and a focus on childhood innocence.",
      },
      {
        src: require("@assets/images/styles/Realism/3.jpg"),
        title: "The Fallen Angel",
        author: "Alexandre Cabanel",
        description:
          "The painting shows a saddened Lucifer, with his hands crossed and tears running from his eyes. He lies on the ground, naked, while angels fly in the sky above to show the glory of God.",
      },
      {
        src: require("@assets/images/styles/Realism/4.jpg"),
        title: "Pond in the march",
        author: "Karl Hagemeister",
        description:
          "It captures the interplay of light and color as it reflects off the water and interacts with the surrounding foliage. It focuses on nature, which often conveys a deep appreciation for the landscape.",
      },
    ],
    description:
      "Realism is an artistic style that emerged in the second half of the 19th century, characterized by the precise and detailed depiction of everyday life without idealization. It focused on social themes and the lives of the working classes.",
  },
  {
    name: "Impressionism",
    images: [
      {
        src: require("@assets/images/styles/Impressionism/0.jpg"),
        title: "Estanque de Nenúfares II",
        author: "Claude Monet",
        description:
          "It celebrated series of water lily paintings, which capture the beauty of his garden pond throughout different times of the day and seasons. Monet's exploration of light, color, and reflection in water is masterfully displayed in this work.",
      },
      {
        src: require("@assets/images/styles/Impressionism/1.jpg"),
        title: "The Starry Night",
        author: "Vincent Van Gogh",
        description:
          "Depicts a swirling night sky filled with stars above a tranquil village and a large cypress tree. The painting is characterized by its bold colors, dynamic forms, and expressive brushwork.",
      },
      {
        src: require("@assets/images/styles/Impressionism/2.jpg"),
        title: "Bar de Folies-Bergeres",
        author: "Édouard Manet",
        description:
          "Depicts a barmaid standing behind a counter at the Folies-Bergère, a famous Parisian nightclub and entertainment venue. She is shown in a reflective moment, looking out toward the viewer, while the bar is filled with bottles and glasses.",
      },
      {
        src: require("@assets/images/styles/Impressionism/3.jpg"),
        title: "La Baie de Douarnenez",
        author: "Eugène Boudin",
        description:
          "The painting captures the essence of the bay, characterized by its vibrant colors, dynamic sky, and the interplay of light on the water.",
      },
      {
        src: require("@assets/images/styles/Impressionism/4.jpg"),
        title: "In Front of the Vaudeville Theater in Paris",
        author: "Jean Béraud",
        description:
          "The painting depicts the bustling scene outside the Vaudeville Theater, capturing the lively atmosphere of Parisian nightlife. Béraud presents a moment frozen in time, showcasing the diverse crowd gathered to attend performances.",
      },
    ],
    description:
      "Impressionism emerged in France in the 1870s, centered on the representation of the effects of light and color. Impressionist artists worked outdoors, using quick brushstrokes and bright colors to capture fleeting moments in nature and urban life.",
  },
  {
    name: "Expressionism",
    images: [
      {
        src: require("@assets/images/styles/Expressionism/0.jpg"),
        title: "Summer Night by the Shore",
        author: "Edvard Munch",
        description:
          "The painting portrays a woman seated on the shore, gazing out at the water, with a night sky filled with swirling clouds and starry lights above.",
      },
      {
        src: require("@assets/images/styles/Expressionism/1.jpg"),
        title: "Birches in the Moor",
        author: "Otto Modersohn",
        description:
          "Shows a tranquil moorland scene dominated by birch trees. The painting captures the unique atmosphere of the moor, with its soft light and muted colors, showcasing Modersohn’s deep appreciation for the natural landscape.",
      },
      {
        src: require("@assets/images/styles/Expressionism/2.jpg"),
        title: "Composition VIII",
        author: "Wassily Kandinsky",
        description:
          "The painting features a variety of forms, including circles, lines, and angles, arranged in a harmonious yet complex manner.",
      },
      {
        src: require("@assets/images/styles/Expressionism/3.jpg"),
        title: "The Stables",
        author: "Franz Marc",
        description:
          "Depicts a serene scene within a stable, featuring horses in a setting filled with rich colors and abstract forms. Marc's distinctive style and use of color create a vibrant atmosphere that reflects his deep emotional connection to animals.",
      },
      {
        src: require("@assets/images/styles/Expressionism/4.jpg"),
        title: "The City of Bremen in the 17th Century",
        author: "Carl Vinnen",
        description:
          "The painting captures a panoramic view of the city of Bremen as it would have appeared in the 17th century, featuring its distinctive architecture and urban landscape. Vinnen’s work is characterized by a meticulous attention to detail and a vivid portrayal of historical context.",
      },
    ],
    description:
      "Expressionism is an artistic movement that arose in the early 20th century, where artists distorted reality to express emotions and subjective feelings. It is characterized by the use of intense colors and exaggerated forms to communicate emotional states.",
  },
  {
    name: "Surrealism",
    images: [
      {
        src: require("@assets/images/styles/Surrealism/0.jpg"),
        title: "L'Énigme sans fin",
        author: "Salvador Dalí",
        description:
          "Showcases Dalí's signature surrealist style, characterized by dreamlike imagery and intricate details. The painting features a landscape with a distorted perspective, blending elements of reality and fantasy.",
      },
      {
        src: require("@assets/images/styles/Surrealism/1.jpg"),
        title: "Band ohne Ende",
        author: "M.c. Escher",
        description:
          "Depicts a continuous, looping ribbon that appears to defy the laws of geometry and perspective. The work features intricate patterns that draw the viewer's eye along the surface of the ribbon, which twists and turns in on itself in a way that suggests infinity.",
      },
      {
        src: require("@assets/images/styles/Surrealism/2.jpg"),
        title: "The picnic",
        author: "Fritz van den Berghe",
        description:
          "Captures a lively outdoor scene with a group of figures enjoying a leisurely meal in a natural setting. The painting is characterized by its vibrant colors and dynamic composition.",
      },
      {
        src: require("@assets/images/styles/Surrealism/3.jpg"),
        title: "L’été de la St. Michel",
        author: "Pierre Roy",
        description:
          "Shows a serene summer landscape characterized by vivid colors and a dreamlike quality.",
      },
      {
        src: require("@assets/images/styles/Surrealism/4.jpg"),
        title: "Cafe",
        author: "Sophie Taeuber-Arp",
        description:
          "The painting captures the essence of a café scene through its use of abstract forms, blending the familiar with the imaginative.",
      },
    ],
    description:
      "Surrealism is an artistic and literary movement that emerged in the 1920s, influenced by psychoanalysis. Surrealist artists sought to unlock the creative potential of the unconscious, using dream-like images, unexpected juxtapositions, and irrational logic.",
  },
];
