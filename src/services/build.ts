import nodeHtmlToImage from 'node-html-to-image'
import { ArchivementCard } from './ArchivementCard';

export async function render() {

    const buffer = await nodeHtmlToImage({
      
      beforeScreenshot: async (page) => {
        await page.setViewport({
          width: 400,
          height: 350,
            deviceScaleFactor: 1,
            isLandscape: false,

        });
        },
      encoding: 'binary',
        html: ArchivementCard({
            Archivement: 'Maestro del Código',
            Description: 'Has alcanzado un nivel experto en resolver desafíos de programación.',
            user: 'JohnDoe123',
            progress: 30,
            winExp: 500,
        }),
        puppeteerArgs: {
            headless: false,
        }
        
    })
    return buffer
    
}