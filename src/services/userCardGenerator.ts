import { RankCardBuilder, loadFont, loadFonts } from "discord-card-canvas";

const font = loadFont   ('resources/fonts/Nunito-Black.ttf',{family:'Nunito'});

export async function CreateUserCard({ picture, kickname, exp, lvl, rank, requiredXP }: { picture: string, kickname: string, exp: number, lvl: number, rank: number, requiredXP: number }){
    try {
    const canvasRank = await new RankCardBuilder({
        currentLvl: lvl,
        currentRank: rank,
        currentXP: exp,
        requiredXP: requiredXP,
        backgroundColor: { background: '#070d19', bubbles: '#0ca7ff' },
        // backgroundImgURL: 'any_image.png', ( you can also use )
        avatarImgURL: picture || 'https://archive.org/download/discordprofilepictures/discordblue.png',        
        nicknameText: { content: kickname, color: '#0CA7FF' },
        userStatus: 'online',
        
    }).build();
        return canvasRank.toBuffer();
        } catch (err) {
            console.log(err);
        }
  
} 