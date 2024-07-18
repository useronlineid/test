function updateDisplay() {
    const houseCode = document.getElementById('sender-name').value || '-';
    const RegistrationOffice = document.getElementById('RegistrationOffice').value || '-';
    const addressList = document.getElementById('addressList').value || '-';
    const nameOfVillage = document.getElementById('nameOfVillage').value || '-';
    const nameOfHouse = document.getElementById('nameOfHouse').value || '-';
    const typeOfHouse = document.getElementById('typeOfHouse').value || '-';
    const descriptionOfHouse = document.getElementById('descriptionOfHouse').value || '-';
    const houseNumberDate = document.getElementById('houseNumberDate').value || '-';

    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    
    // Load background image
    const backgroundImage = new Image();
    backgroundImage.src = 'https://github.com/useronlineid/Theslipcame/blob/main/PNG-KBANK1.jpg?raw=true';
    backgroundImage.onload = function() {
        // Clear the canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Draw background image
        ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
        
        // Draw text with custom styles, line heights, and letter spacing
        drawText(ctx, `House Particulars`, 0, 130, '13px Arial', '#000000', '700', 'center', 1.5, -0.25, -17, 0,300);
        drawText(ctx, `Book No. 1`, 578, 130, '13px Arial', '#000000', '700', 'left', 1.4, -0.25, 0, 0);
        
        drawText(ctx, `House Code No.: ${houseCode}`, 74.4, 168, '13px Arial', '#000000', '700', 'left', 1.5, -0.25, 0, 0, 250);
        drawText(ctx, `Registration Office: ${RegistrationOffice}`, 332.6, 168, '13px Arial', '#000000', '700', 'left', 1.5, -0.25, 0, 0,400);
        drawText(ctx, `Address list: ${addressList}`, 83.5, 208.9, '13px Arial', '#000000', '700', 'left', 1.5, -0.25, 0, 0,400);
        drawText(ctx, `Name of Village: ${nameOfVillage}`, 74.4, 286.4, '13px Arial', '#000000', '700', 'left', 1.5, -0.25, 0, 0,335);
        drawText(ctx, `Name of House: ${nameOfHouse}`, 398, 286.4, '13px Arial', '#000000', '700', 'left', 1.5, -0.25, 0, 0,335);
        drawText(ctx, `Type of House: ${typeOfHouse}`, 74.4, 326.9, '13px Arial', '#000000', '700', 'left', 1.5, -0.25, 0, 0,335);
        drawText(ctx, `Description of House: ${descriptionOfHouse}`, 398, 326.9, '13px Arial', '#000000', '700', 'left', 1.5, -0.25, 0, 0,335);
        drawText(ctx, `Date of month,year to determine the house number: ${registrationDate}`, 67.8, 468.1, '13px Arial', '#000000', '700', 'left', 1.5, -0.25, 0, 0,680);

        drawText(ctx, `Registrar`, 0, 405.4, '13px Arial', '#000000', '700', 'center', 1.5, -0.25, 201, 0,285);
        drawText(ctx, `Signed:     ${signed}`, 0, 430.4, '13px Arial', '#000000', '700', 'center', 1.5, -0.25, 201, 0,285);

        drawText(ctx, `Date of House Registration Printing: ${houseNumberDate}`, 74.4, 356.7, '13px Arial', '#000000', '700', 'left', 1.5, -0.25, 0, 0,680);
       
        drawText(ctx, `Book No. 1`, 74.4, 561, '13px Arial', '#000000', '700', 'left', 1.5, -0.25, 0, 0, 250);
        drawText(ctx, `Particulars of Persons in the House Code No: ${houseCodeBack}`, 165.5, 561, '13px Arial', '#000000', '700', 'left', 1.5, -0.25, 0, 0, 400);
        drawText(ctx, `Book No. ${bookNo}`, 578, 561, '13px Arial', '#000000', '700', 'left', 1.4, -0.25, 0, 0,150);
        drawText(ctx, `Name: ${name1}`, 74.4, 592, '13px Arial', '#000000', '700', 'left', 1.4, -0.25, 0, 0,270);
        drawText(ctx, `Nationality: ${nationality}`, 362.4, 592, '13px Arial', '#000000', '700', 'left', 1.4, -0.25, 0, 0,150);
        drawText(ctx, `Sex: ${sex}`, 523.0, 592, '13px Arial', '#000000', '700', 'left', 1.4, -0.25, 0, 0,210);
        drawText(ctx, `Identification No.: ${identification}`, 74.4, 636.9, '13px Arial', '#000000', '700', 'left', 1.4, -0.25, 0, 0,270);
        drawText(ctx, `Status: ${status}`, 346.6, 636.9, '13px Arial', '#000000', '700', 'left', 1.4, -0.25, 0, 0,270);
        drawText(ctx, `Date of Birth: ${dob}`, 523.0, 636.9, '13px Arial', '#000000', '700', 'left', 1.4, -0.25, 0, 0,210);

        drawText(ctx, `Name of Biological Mother: ${mother}`, 74.4, 680.0, '13px Arial', '#000000', '700', 'left', 1.4, -0.25, 0, 0,270);
        drawText(ctx, `${identification1}`, 340.8, 680.0, '13px Arial', '#000000', '700', 'left', 1.4, -0.25, 0, 0,170);
        drawText(ctx, `Nationality: ${nationality1}`, 523.0, 680.0, '13px Arial', '#000000', '700', 'left', 1.4, -0.25, 0, 0,210);
        
        drawText(ctx, `Name of Biological Mother: ${father}`, 74.4, 715.0, '13px Arial', '#000000', '700', 'left', 1.4, -0.25, 0, 0,270);
        drawText(ctx, `${identification2}`, 340.8, 715.0, '13px Arial', '#000000', '700', 'left', 1.4, -0.25, 0, 0,170);
        drawText(ctx, `Nationality: ${nationality2}`, 523.0, 715.0, '13px Arial', '#000000', '700', 'left', 1.4, -0.25, 0, 0,210);
        
        drawText(ctx, `* Transferred from:`, 74.4, 758.6, '13px Arial', '#000000', '700', 'left', 1.4, -0.25, 0, 0,500);
        drawText(ctx, `${transferredFrom}`, 194.2, 758.6, '13px Arial', '#000000', '700', 'left', 1.4, -0.25, 0, 0,500);

        drawText(ctx, `Registrar`, 0, 814.5, '13px Arial', '#000000', '700', 'center', 1.5, -0.25, 201, 0,285);
        drawText(ctx, `Signed:     ${signed1}`, 0, 839.5, '13px Arial', '#000000', '700', 'center', 1.5, -0.25, 201, 0,285);

        drawText(ctx, `** Transferred to`, 66.9, 888.4, '13px Arial', '#000000', '700', 'left', 1.4, -0.25, 0, 0,500);

        drawText(ctx, `Certified Correct Translation`, 0, 985.2, '13px Arial', '#000000', '700', 'center', 1.5, -0.25, 201, 0,285);
        drawText(ctx, `(${certified})`, 0, 1021.2, '13px Arial', '#000000', '700', 'center', 1.5, -0.25, 201, 0,330);

        // Continue drawing other fields similarly with the desired line heights and letter spacing
    };
}

function drawText(ctx, text, x, y, font, color, weight, align = 'center', lineHeight = 1.9, letterSpacing = 1, adjustedX = 0, adjustedY = 0, maxWidth = 500) {
    ctx.font = `${weight} ${font}`;
    ctx.fillStyle = color;
    
    const paragraphs = text.split('<br>');
    let currentY = y;

    paragraphs.forEach(paragraph => {
        const lines = [];
        let currentLine = '';
        
        for (let i = 0; i < paragraph.length; i++) {
            currentLine += paragraph[i];
            const metrics = ctx.measureText(currentLine);
            
            if (metrics.width > maxWidth) {
                lines.push(currentLine.slice(0, -1));
                currentLine = paragraph[i];
            }
        }
        lines.push(currentLine);
        
        lines.forEach((line, index) => {
            let currentX = x;
            const textWidth = ctx.measureText(line).width;
            
            if (align === 'center') {
                currentX = (ctx.canvas.width - textWidth) / 2 + adjustedX;
            } else if (align === 'left') {
                currentX = x + adjustedX;
            } else if (align === 'right') {
                currentX = ctx.canvas.width - textWidth + adjustedX;
            }

            currentY = y + (index * parseInt(font, 10) * lineHeight);

            for (let j = 0; j < line.length; j++) {
                ctx.fillText(line[j], currentX, currentY);
                currentX += ctx.measureText(line[j]).width + letterSpacing;
            }
        });
        
        y = currentY + parseInt(font, 10) * lineHeight;
    });

    return currentY;
}

function downloadImage() {
    const canvas = document.getElementById('canvas');
    const link = document.createElement('a');
    link.download = 'house_info.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
}
