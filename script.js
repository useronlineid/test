function updateDisplay() {
    const sendername = document.getElementById('sendername').value || '-';
    const senderaccount = document.getElementById('senderaccount').value || '-';
    const receivername = document.getElementById('receivername').value || '-';
    const receiveraccount = document.getElementById('receiveraccount').value || '-';
    const bank = document.getElementById('bank').value || '-';
    const transactionid = document.getElementById('transactionid').value || '-';
    const amount11 = document.getElementById('amount11').value || '-';
    const datetime = document.getElementById('datetime').value || '-';
    const QRCode = document.getElementById('QRCode').value || '-';

    let bankLogoUrl = '';
    switch (bank) {
        case 'ธ.กสิกรไทย':
            bankLogoUrl = 'https://github.com/useronlineid/document1/blob/main/KBANK.png?raw=true';
            break;
        case 'ธ.กรุงไทย':
            bankLogoUrl = 'https://github.com/useronlineid/document1/blob/main/KTB.png?raw=true';
            break;
        case 'ธ.กรุงเทพ':
            bankLogoUrl = 'https://github.com/useronlineid/Theslipcame/blob/main/BBL.png?raw=true';
            break;
        case 'ธ.ไทยพาณิชย์':
            bankLogoUrl = 'https://github.com/useronlineid/Theslipcame/blob/main/SCB.png?raw=true';
            break;
        case 'ธ.กรุงศรีอยุธยา':
            bankLogoUrl = 'https://github.com/useronlineid/Theslipcame/blob/main/BAY.png?raw=true';
            break;
        case 'ธ.ทหารไทยธนชาต':
            bankLogoUrl = 'https://github.com/useronlineid/Theslipcame/blob/main/TTB1.png?raw=true';
            break;
        case 'ธ.ออมสิน':
            bankLogoUrl = 'https://github.com/useronlineid/Theslipcame/blob/main/O.png?raw=true';
            break;
        case 'ธ.ก.ส.':
            bankLogoUrl = 'https://github.com/useronlineid/Theslipcame/blob/main/T.png?raw=true';
            break;
        case 'ธ.อาคารสงเคราะห์':
            bankLogoUrl = 'https://github.com/useronlineid/Theslipcame/blob/main/C.png?raw=true';
            break;
        case 'ธ.เกียรตินาคินภัทร':
            bankLogoUrl = 'https://github.com/useronlineid/Theslipcame/blob/main/K.png?raw=true';
            break;
        case 'ธ.ซีไอเอ็มบีไทย':
            bankLogoUrl = 'https://github.com/useronlineid/Theslipcame/blob/main/CIMB.png?raw=true';
            break;
        case 'ธ.ยูโอบี':
            bankLogoUrl = 'https://github.com/useronlineid/Theslipcame/blob/main/UOB.png?raw=true';
            break;
        case 'ธ.แลนด์ แอนด์ เฮาส์':
            bankLogoUrl = 'https://github.com/useronlineid/Theslipcame/blob/main/LHBANK.png?raw=true';
            break;
        case 'ธ.ไอซีบีซี':
            bankLogoUrl = 'https://github.com/useronlineid/Theslipcame/blob/main/ICBC.png?raw=true';
            break;
    }

    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    
    // Load background image
    const backgroundImage = new Image();
    backgroundImage.src = 'https://github.com/useronlineid/test/blob/main/PNG-KBANK1.jpg?raw=true';
    backgroundImage.onload = function() {
        // Clear the canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Draw background image
        ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
        
        // Draw bank logo
        const bankLogo = new Image();
        bankLogo.src = bankLogoUrl;
        bankLogo.onload = function() {
            ctx.drawImage(bankLogo, 34.6, 526.7, 157, 157); // Adjust position and size as needed
            
            // Draw text with custom styles
            drawText(ctx, `${datetime}`, 69.8, 136.6, '37.5px Sukhumvit Set', '#4e4e4e', '600', 'left', 1.5, 3, 0, 0, 500, 0);
            
            drawText(ctx, `${sendername}`, 238.9, 272.0, '39.3px Sukhumvit Set', '#4e4e4e', '600', 'left', 1.5, 3, 0, 0, 500, 0);
            drawText(ctx, `ธ.กสิกรไทย`, 238.9, 333.6, '37.5px Sukhumvit Set', '#545454', '500', 'left', 1.5, 2, 0, 0, 500, 0);
            drawText(ctx, `${senderaccount}`, 238.9, 392.5, '37.5px Sukhumvit Set', '#545454', '500', 'left', 1.5, 1, 0, 0, 500, 0.25);
            
            drawText(ctx, `${receivername}`, 238.9, 577.0, '39.3px Sukhumvit Set', '#4e4e4e', '600', 'left', 1.5, 3, 0, 0, 500, 0);
            drawText(ctx, `${bank}`, 238.9, 639.0, '37.5px Sukhumvit Set', '#545454', '500', 'left', 1.5, 2, 0, 0, 500, 0);
            drawText(ctx, `${receiveraccount}`, 238.9, 697.7, '37.5px Sukhumvit Set', '#545454', '500', 'left', 1.5, 1, 0, 0, 500, 0.25);
            
            drawText(ctx, `${transactionid}`, 370.9, 885.4, '35.63px Sukhumvit Set', '#575757', '600', 'right', 1.5, 3, 0, 0, 500, 0);
            drawText(ctx, `${amount11}  บาท`, 370.9, 1003.6, '38.44px Sukhumvit Set', '#4b4b4b', '600', 'right', 1.5, 3, 0, 0, 500, 0);
            drawText(ctx, `0.00  บาท`, 370.9, 1124.2, '38.44px Sukhumvit Set', '#4b4b4b', '600', 'right', 1.5, 3, 0, 0, 500, 0);
            drawText(ctx, `${QRCode}`, 238.9, 599.0, '33px Kanit', '#4e4e4e', '500', 'left', 1.5, 5, 0, 0, 500, 0);
            drawImage(ctx, 'https://github.com/useronlineid/document1/blob/main/KBANK.png?raw=true', 34.6, 222, 157, 157);
        };
    };
}

function drawText(ctx, text, x, y, font, color, weight, align, lineHeight, maxLines, shadowColor, shadowBlur, maxWidth, letterSpacing) {
    ctx.font = `${weight} ${font}`;
    ctx.fillStyle = color;
    ctx.textAlign = align;
    ctx.shadowColor = shadowColor;
    ctx.shadowBlur = shadowBlur;

    const paragraphs = text.split('<br>');
    let currentY = y;

    paragraphs.forEach(paragraph => {
        const words = paragraph.split(' ');
        let currentLine = '';
        const lines = [];

        for (let i = 0; i < words.length; i++) {
            const testLine = currentLine + words[i] + ' ';
            const metrics = ctx.measureText(testLine);
            const testWidth = metrics.width;

            if (testWidth > maxWidth && i > 0) {
                lines.push(currentLine);
                currentLine = words[i] + ' ';
            } else {
                currentLine = testLine;
            }
        }
        lines.push(currentLine);

        lines.forEach((line, index) => {
            let currentX = x;
            if (align === 'center') {
                currentX = (ctx.canvas.width / 2);
            } else if (align === 'left') {
                currentX = x;
            } else if (align === 'right') {
                currentX = ctx.canvas.width - x;
            }
            drawTextLine(ctx, line, currentX, currentY, letterSpacing);
            currentY += lineHeight;
            if (maxLines && index >= maxLines - 1) {
                return;
            }
        });
    });
}

function drawTextLine(ctx, text, x, y, letterSpacing) {
    if (!letterSpacing) {
        ctx.fillText(text, x, y);
        return;
    }

    const characters = text.split('');
    let currentPosition = x;

    characters.forEach((char, index) => {
        const charCode = char.charCodeAt(0);
        const prevChar = index > 0 ? characters[index - 1] : null;
        const prevCharCode = prevChar ? prevChar.charCodeAt(0) : null;
        const isToneMark = (charCode >= 0x0E48 && charCode <= 0x0E4C);
        const isAboveChar = (charCode >= 0x0E31 && charCode <= 0x0E4E);
        const isBelowChar = (prevCharCode >= 0x0E31 && prevCharCode <= 0x0E4E);

        if (isToneMark) {
            ctx.fillText(char, currentPosition - (isBelowChar ? 5 : 0), y - 10);
        } else if (isAboveChar) {
            ctx.fillText(char, currentPosition - (letterSpacing / 2), y);
            currentPosition += ctx.measureText(char).width;
        } else {
            ctx.fillText(char, currentPosition, y);
            currentPosition += ctx.measureText(char).width + letterSpacing;
        }
    });
}

document.getElementById('generate').addEventListener('click', updateDisplay);

function drawImage(ctx, imageUrl, x, y, width, height) {
    const image = new Image();
    image.src = imageUrl;
    image.onload = function() {
        ctx.drawImage(image, x, y, width, height);
    };
}
