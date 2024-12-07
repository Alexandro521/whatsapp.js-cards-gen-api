interface Props{
    Archivement: string
    Description: string
    user: string
    progress: number
    winExp: number
}

export function ArchivementCard(props:Props) { 
    return (
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Maestro del Código</title>
    <style>
        body {
            font-family: 'Poppins', sans-serif;
            background: linear-gradient(135deg, #141e30, #243b55);
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
        }

        .achievement-card {
            background: linear-gradient(135deg, #1f2937, #323f4b);
            color: white;
            border-radius: 15px;
            width: 320px;
            padding: 25px;
            box-shadow: 0 6px 15px rgba(0, 0, 0, 0.5);
            text-align: center;
            position: relative;
            overflow: hidden;
            word-wrap: break-word;
        }

        .achievement-card:before {
            content: '';
            position: absolute;
            top: -50px;
            right: -50px;
            background: rgba(255, 193, 7, 0.2);
            width: 150px;
            height: 150px;
            border-radius: 50%;
            z-index: 0;
        }

        .achievement-card .xp-badge {
            position: absolute;
            top: 15px;
            right: 15px;
            background-color: #ffca28;
            color: #1f2937;
            padding: 8px 15px;
            border-radius: 50px;
            font-weight: bold;
            font-size: 16px;
            z-index: 1;
        }

        .achievement-card .trophy-icon {
            font-size: 50px;
            color: #ffca28;
            margin-bottom: 15px;
            z-index: 1;
        }

        .achievement-card .title {
            font-size: 22px;
            font-weight: bold;
            margin-bottom: 10px;
            z-index: 1;
        }

        .achievement-card .caption {
            font-size: 14px;
            color: #d1d5db;
            margin-bottom: 15px;
            z-index: 1;
        }

        .achievement-card .unlocked-by {
            font-size: 15px;
            color: #d1d5db;
            margin-bottom: 25px;
            z-index: 1;
        }

        .achievement-card .progress-info {
            font-size: 14px;
            color: #d1d5db;
            margin-bottom: 8px;
            z-index: 1;
        }

        .achievement-card .progress-bar {
            background-color: #374151;
            border-radius: 7px;
            height: 12px;
            overflow: hidden;
            position: relative;
            z-index: 1;
        }
        .achievement-card .unlocked-by strong {
            color: #ffca28;
        }

        .achievement-card .progress-bar .progress {
            background: linear-gradient(90deg, #ffca28, #ffc107);
            height: 100%;
            width: 70%; /* Adjust this value to change progress */
        }
    </style>
</head>
<body>
    <div class="achievement-card">
        <div class="xp-badge">+${props.winExp} XP</div>
        <div class="trophy-icon">🏆</div>
        <div class="title">${props.Archivement}</div>
        <div class="caption">${props.Description}.</div>
        <div class="unlocked-by">Desbloqueado por<br><strong>${props.user}</strong></div>
        <div class="progress-info">${props.progress}/100 logros desbloqueados</div>
        <div class="progress-bar">
            <div class="progress"></div>
        </div>
    </div>
</body>
</html>
 

`)
}