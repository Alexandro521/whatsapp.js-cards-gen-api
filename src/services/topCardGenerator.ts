import { Font, LeaderboardBuilder } from "canvacord";

export async function topCardGenerator(data:dataType) {
  // load font
  Font.loadDefault();

  // generate image
  const lb = new LeaderboardBuilder()

    // set title, image and subtitle
    .setHeader(data.header)
    // set players, usually you would get this from a database but for this example we will hardcode it
    .setPlayers(data.body)
    .setBackground("https://images.hdqwalls.com/download/small-memory-evening-8k-5o-1280x1024.jpg");

  // changing variant
 
  lb.setVariant("default");

 lb.height =1600
  const image = await lb.build({ format: "png" });
  return image;
}
export type dataType = {
  header: {
    title: string
    image: string
    subtitle: string
  }
  body: Array<{
    avatar: string
    username: string
    displayName: string
    level: number
    xp: number
    rank: number
  }>
}
