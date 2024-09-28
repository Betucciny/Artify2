import { ImageSourcePropType } from "react-native";
import * as FileSystem from 'expo-file-system';

type ImageInfo = {
    src: ImageSourcePropType;
    title: string;
    author: string;
    description: string;
}

type Style = {
    name: string;
    images: ImageInfo[];
    description: string;
}

export const data_styles: Style[] = [
    {
        name: "Realism",
        images: [
            {
                src: require("@assets/Images/Realismo/0.jpg"),
                title: "The Desperate Man",
                author: "Gustave Courbet",
                description: "Le Désespéré is an oil-on-canvas self-portrait by Gustave Courbet, produced in 1843–1845, early during his stay in Paris. It is now in the private collection of the Conseil Investissement Art BNP Paribas but was displayed in the Musée d'Orsay's 2007 Courbet exhibition."
            },
            {
                src: require("@assets/Images/Realismo/1.jpg"),
                title: "Fall Woods (Осенний лес)",
                author: "Ivan Ivanovich Shishkin",
                description: "Shishkin is celebrated for his ability to capture the natural beauty of Russian forests, especially in different seasons. Showcases a peaceful autumn landscape, with trees shedding their leaves, creating a golden and serene atmosphere typical of Shishkin's work."
            },
            {
                src: require("@assets/Images/Realismo/2.jpg"),
                title: "The child round dance",
                author: "Hans Thoma",
                description: "Showcases a group of children holding hands in a circle and playing outdoors, a popular children's game from the time. The painting is characteristic of Thoma's gentle and idyllic portrayal of rural scenes, with the backdrop of a serene landscape and a focus on childhood innocence."
            },
            {
                src: require("@assets/Images/Realismo/3.jpg"),
                title: "The Fallen Angel",
                author: "Alexandre Cabanel",
                description: "The painting shows a saddened Lucifer, with his hands crossed and tears running from his eyes. He lies on the ground, naked, while angels fly in the sky above to show the glory of God."
            },
            {
                src: require("@assets/Images/Realismo/4.jpg"),
                title: "Pond in the march",
                author: "Karl Hagemeister",
                description: "It captures the interplay of light and color as it reflects off the water and interacts with the surrounding foliage. It focuses on nature, which often conveys a deep appreciation for the landscape."
            }
        ],
        description: "Realism is an artistic style that emerged in the second half of the 19th century, characterized by the precise and detailed depiction of everyday life without idealization. It focused on social themes and the lives of the working classes."
    },
    {
        name: "Impressionism",
        images: [
            {
                src: require("@assets/Images/Impresionismo/0.jpg"),
                title: "Estanque de Nenúfares II",
                author: "Claude Monet",
                description: "It celebrated series of water lily paintings, which capture the beauty of his garden pond throughout different times of the day and seasons. Monet's exploration of light, color, and reflection in water is masterfully displayed in this work."
            },
            {
                src: require("@assets/Images/Impresionismo/1.jpg"),
                title: "The Starry Night",
                author: "Vincent Van Gogh",
                description: "Depicts a swirling night sky filled with stars above a tranquil village and a large cypress tree. The painting is characterized by its bold colors, dynamic forms, and expressive brushwork."
            },
            {
                src: require("@assets/Images/Impresionismo/2.jpg"),
                title: "Bar de Folies-Bergeres - Edouard Manet",
                author: "Édouard Manet",
                description: "Depicts a barmaid standing behind a counter at the Folies-Bergère, a famous Parisian nightclub and entertainment venue. She is shown in a reflective moment, looking out toward the viewer, while the bar is filled with bottles and glasses."
            },
            {
                src: require("@assets/Images/Impresionismo/3.jpg"),
                title: "La Baie de Douarnenez)",
                author: "Eugène Boudin",
                description: "The painting captures the essence of the bay, characterized by its vibrant colors, dynamic sky, and the interplay of light on the water."
            },
            {
                src: require("@assets/Images/Impresionismo/4.jpg"),
                title: "In Front of the Vaudeville Theater in Paris",
                author: "Jean Béraud",
                description: "The painting depicts the bustling scene outside the Vaudeville Theater, capturing the lively atmosphere of Parisian nightlife. Béraud presents a moment frozen in time, showcasing the diverse crowd gathered to attend performances."
            }
        ],
        description: "Impressionism emerged in France in the 1870s, centered on the representation of the effects of light and color. Impressionist artists worked outdoors, using quick brushstrokes and bright colors to capture fleeting moments in nature and urban life."
    },
    {
        name: "Expressionism",
        images: [
            {
                src: require("@assets/Images/Expresionismo/0.jpg"),
                title: "Summer Night by the Shore",
                author: "Edvard Munch",
                description: "The painting portrays a woman seated on the shore, gazing out at the water, with a night sky filled with swirling clouds and starry lights above."
            },
            {
                src: require("@assets/Images/Expresionismo/2.jpg"),
                title: "Composition VIII",
                author: "Wassily Kandinsky",
                description: "The painting features a variety of forms, including circles, lines, and angles, arranged in a harmonious yet complex manner."
            },
            {
                src: require("@assets/Images/Expresionismo/3.jpg"),
                title: "The Stables",
                author: "Franz Marc",
                description: "Depicts a serene scene within a stable, featuring horses in a setting filled with rich colors and abstract forms. Marc's distinctive style and use of color create a vibrant atmosphere that reflects his deep emotional connection to animals."
            },
            {
                src: require("@assets/Images/Expresionismo/1.jpg"),
                title: "Birches in the Moor",
                author: "Otto Modersohn",
                description: "Shows a tranquil moorland scene dominated by birch trees. The painting captures the unique atmosphere of the moor, with its soft light and muted colors, showcasing Modersohn’s deep appreciation for the natural landscape."
            },
            {
                src: require("@assets/Images/Expresionismo/4.jpg"),
                title: "The City of Bremen in the 17th Century",
                author: "Carl Vinnen",
                description: "The painting captures a panoramic view of the city of Bremen as it would have appeared in the 17th century, featuring its distinctive architecture and urban landscape. Vinnen’s work is characterized by a meticulous attention to detail and a vivid portrayal of historical context."
            }
        ],
        description: "Expressionism is an artistic movement that arose in the early 20th century, where artists distorted reality to express emotions and subjective feelings. It is characterized by the use of intense colors and exaggerated forms to communicate emotional states."
    },
    {
        name: "Surrealism",
        images: [
            {
                src: require("@assets/Images/Surrealismo/0.jpg"),
                title: "L'Énigme sans fin",
                author: "Salvador Dalí",
                description: "Showcases Dalí's signature surrealist style, characterized by dreamlike imagery and intricate details. The painting features a landscape with a distorted perspective, blending elements of reality and fantasy."
            },
            {
                src: require("@assets/Images/Surrealismo/1.jpg"),
                title: "Band ohne Ende",
                author: "M.c. Escher",
                description: "Depicts a continuous, looping ribbon that appears to defy the laws of geometry and perspective. The work features intricate patterns that draw the viewer's eye along the surface of the ribbon, which twists and turns in on itself in a way that suggests infinity."
            },
            {
                src: require("@assets/Images/Surrealismo/2.jpg"),
                title: "The picnic",
                author: "Fritz van den Berghe",
                description: "Captures a lively outdoor scene with a group of figures enjoying a leisurely meal in a natural setting. The painting is characterized by its vibrant colors and dynamic composition."
            },
            {
                src: require("@assets/Images/Surrealismo/3.jpg"),
                title: "L’été de la St. Michel",
                author: "Pierre Roy",
                description: "Shows a serene summer landscape characterized by vivid colors and a dreamlike quality."
            },
            {
                src: require("@assets/Images/Surrealismo/4.jpg"),
                title: "Cafe",
                author: "Sophie Taeuber-Arp",
                description: "The painting captures the essence of a café scene through its use of abstract forms, blending the familiar with the imaginative."
            }
        ],
        description: "Surrealism is an artistic and literary movement that emerged in the 1920s, influenced by psychoanalysis. Surrealist artists sought to unlock the creative potential of the unconscious, using dream-like images, unexpected juxtapositions, and irrational logic."
    }
];
