import { RankCardBuilder } from "discord-card-canvas";

export async function CreateUserCard() { 
    const canvasRank = await new RankCardBuilder({
        currentLvl: 102,
        currentRank: 563,
        currentXP: 71032,
        requiredXP: 95195,
        backgroundColor: { background: '#070d19', bubbles: '#0ca7ff' },
        // backgroundImgURL: 'any_image.png', ( you can also use )
        avatarImgURL: 'avatar.jpg',
        nicknameText: { content: 'xNinja_Catx', font: 'Nunito', color: '#0CA7FF' },
        userStatus: 'idle',
    }).build();
     return canvasRank.toBuffer();
 
}