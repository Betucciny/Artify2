import Screen from "@/components/Screen";
import Section from "@/components/home/Section";

const galleryImagesUri = [
  "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/65/78ce0081ad11e681d7bb31b0a632ef/starry-night.jpg",
  "https://images.aeonmedia.co/images/14af162d-53e8-4e80-a36f-d17b45704353/great-art-explained-the-birth-of-venus-landscape-3-v2.jpg?width=3840&quality=75&format=auto",
  "https://culturizm.com/wp-content/uploads/2024/01/contemporary_art_styles.png.webp",
];

const stylesImagesUri = [
  "https://m.media-amazon.com/images/I/81DO2H9zhwL._AC_UF1000,1000_QL80_.jpg",
  "https://img.freepik.com/free-photo/fantasy-eye-illustration_23-2151675421.jpg",
  "https://storage.googleapis.com/pod_public/1300/150711.jpg",
];

export default function Home() {
  return (
    <Screen title="Artify">
      <Section title="Gallery" images={galleryImagesUri} href="/gallery" />
      <Section title="Styles" images={stylesImagesUri} href="/create" />
    </Screen>
  );
}
