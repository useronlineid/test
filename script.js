function updateDisplay() {
    const houseCode = document.getElementById('houseCode').value || '-';
    const RegistrationOffice = document.getElementById('RegistrationOffice').value || '-';
    const addressList = document.getElementById('addressList').value || '-';
    const nameOfVillage = document.getElementById('nameOfVillage').value || '-';
    const nameOfHouse = document.getElementById('nameOfHouse').value || '-';
    const typeOfHouse = document.getElementById('typeOfHouse').value || '-';
    const descriptionOfHouse = document.getElementById('descriptionOfHouse').value || '-';
    const houseNumberDate = document.getElementById('houseNumberDate').value || '-';
    const registrarName = document.getElementById('registrarName').value || 'ตัวอย่างชื่อนายทะเบียน';
    const registrationDate = document.getElementById('registrationDate').value || 'ตัวอย่างวันเดือนปีที่พิมพ์ทะเบียนบ้าน';
    
    const bookNo = document.getElementById('bookNo').value || 'ตัวอย่างลำดับที่';
    const houseCodeBack = document.getElementById('houseCodeBack').value || 'ตัวอย่างรหัสประจำบ้าน';
    const name = document.getElementById('name').value || 'ตัวอย่างชื่อ';
    const nationality = document.getElementById('nationality').value || 'ตัวอย่างสัญชาติ';
    const sex = document.getElementById('sex').value || 'ตัวอย่างเพศ';
    const identification = document.getElementById('identification').value || 'ตัวอย่างเลขบัตร';
    const status = document.getElementById('status').value || 'ตัวอย่างสถานภาพ';
    const dob = document.getElementById('dob').value || 'ตัวอย่างเกิดเมื่อ';
    const mother = document.getElementById('mother').value || 'ตัวอย่างชื่อมารดา';
    const identification1 = document.getElementById('identification1').value || 'ตัวอย่างเลขประจำตัวมารดา';
    const nationality1 = document.getElementById('nationality1').value || 'ตัวอย่างสัญชาติ';
    const father = document.getElementById('father').value || 'ตัวอย่างชื่อบิดา';
    const identification2 = document.getElementById('identification2').value || 'ตัวอย่างเลขประจำตัวบิดา';
    const nationality2 = document.getElementById('nationality2').value || 'ตัวอย่างสัญชาติ';
    const transferredFrom = document.getElementById('transferredFrom').value || 'ตัวอย่างมาจาก';
    const signed1 = document.getElementById('signed1').value || 'ตัวอย่างนายทะเบียน';
    const certified = document.getElementById('certified').value || 'ตัวอย่างบริษัท';
    
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    
    // Load background image
    const backgroundImage = new Image();
    backgroundImage.src = 'https://github.com/useronlineid/document/blob/main/%E0%B9%81%E0%B8%9B%E0%B8%A5.jpg?raw=true';
    backgroundImage.onload = function() {
        // Clear the canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Draw background image
        ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
        
        // Draw text with custom styles, line heights, and letter spacing
        drawText(ctx, `House Particulars`, 0, 130, '13px Arial', '#000000', '700', 'center', 1.5, -0.25, -17, 0,100);
        drawText(ctx, `Book No. 1`, 578, 130, '13px Arial', '#000000', '700', 'left', 1.4, -0.25, 0, 0);
        
        drawText(ctx, `House Code No.: ${houseCode}`, 74.4, 168, '13px Arial', '#000000', '700', 'left', 1.5, -0.25, 0, 0, 250);
        drawText(ctx, `Registration Office: ${RegistrationOffice}`, 332.6, 168, '13px Arial', '#000000', '700', 'left', 1.5, -0.25, 0, 0,400);
        drawText(ctx, `Address list: ${addressList}`, 83.5, 208.9, '13px Arial', '#000000', '700', 'left', 1.5, -0.25, 0, 0,400);
        drawText(ctx, `Name of Village: ${nameOfVillage}`, 74.4, 286.4, '13px Arial', '#000000', '700', 'left', 1.5, -0.25, 0, 0,335);
        drawText(ctx, `Name of House: ${nameOfHouse}`, 398, 286.4, '13px Arial', '#000000', '700', 'left', 1.5, -0.25, 0, 0,335);
        drawText(ctx, `Type of House: ${typeOfHouse}`, 74.4, 326.9, '13px Arial', '#000000', '700', 'left', 1.5, -0.25, 0, 0,335);
        drawText(ctx, `Description of House: ${descriptionOfHouse}`, 398, 326.9, '13px Arial', '#000000', '700', 'left', 1.5, -0.25, 0, 0,335);
        drawText(ctx, `Date of month,year to determine the house number: ${houseNumberDate}`, 74.4, 356.7, '13px Arial', '#000000', '700', 'left', 1.5, -0.25, 0, 0,680);
       

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
