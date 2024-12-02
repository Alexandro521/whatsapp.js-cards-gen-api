import { RankCardBuilder, loadFont, loadFonts } from "discord-card-canvas";

const font = loadFont   ('resources/fonts/Nunito-Black.ttf',{family:'Nunito'});

export async function CreateUserCard({ picture, kickname, exp, lvl, rank, status }: { picture: string, kickname: string, exp: number, lvl: number, rank: number, status: string }) {
    try {
    const canvasRank = await new RankCardBuilder({
        currentLvl: lvl,
        currentRank: rank,
        currentXP: exp,
        requiredXP: 95195,
        backgroundColor: { background: '#070d19', bubbles: '#0ca7ff' },
        // backgroundImgURL: 'any_image.png', ( you can also use )
        avatarImgURL: picture || 'https://archive.org/download/discordprofilepictures/discordblue.png',
        nicknameText: { content: kickname, color: '#0CA7FF' },
        userStatus: 'idle',
    }).build();
        return canvasRank.toBuffer();
        } catch (err) {
            console.log(err);
        }
  
} 