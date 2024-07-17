function updateDisplay() {
    const houseCode = document.getElementById('houseCode').value;
    const addressList = document.getElementById('addressList').value;
    const nameOfHouse = document.getElementById('nameOfHouse').value;
    const nameOfVillage = document.getElementById('nameOfVillage').value;
    const typeOfHouse = document.getElementById('typeOfHouse').value;
    const descriptionOfHouse = document.getElementById('descriptionOfHouse').value;
    const houseNumberDate = document.getElementById('houseNumberDate').value;
    const registrarName = document.getElementById('registrarName').value;
    const registrationDate = document.getElementById('registrationDate').value;
    
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    const downloadButton = document.querySelector('button');

    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw text with custom styles
    drawText(ctx, `รหัสประจำบ้าน (House Code No): ${houseCode}`, 10, 30, '20px TH Sarabun New', '#252525', 'normal');
    drawText(ctx, `รายการที่อยู่ (Address list): ${addressList}`, 10, 60, '18px TH Sarabun New', '#252525', 'bold');
    drawText(ctx, `ชื่อบ้าน (Name of House): ${nameOfHouse}`, 10, 90, '16px TH Sarabun New', '#252525', 'italic');
    drawText(ctx, `ชื่อหมู่บ้าน (Name of Village): ${nameOfVillage}`, 10, 120, '16px TH Sarabun New', '#252525', 'normal');
    drawText(ctx, `ประเภทบ้าน (Type of House): ${typeOfHouse}`, 10, 150, '16px TH Sarabun New', '#252525', 'bold');
    drawText(ctx, `ลักษณะบ้าน (Description of House): ${descriptionOfHouse}`, 10, 180, '16px TH Sarabun New', '#252525', 'italic');
    drawText(ctx, `วันเดือนปีที่กำหนดบ้านเลขที่ (House number): ${houseNumberDate}`, 10, 210, '16px TH Sarabun New', '#252525', 'normal');
    drawText(ctx, `ชื่อนายทะเบียน: ${registrarName}`, 10, 240, '16px TH Sarabun New', '#252525', 'bold');
    drawText(ctx, `วันเดือนปีที่พิมพ์ทะเบียนบ้าน: ${registrationDate}`, 10, 270, '16px TH Sarabun New', '#252525', 'italic');

    // Draw the specified text
    drawText(ctx, `คณะกรรมการกระทรวงการคลังแห่งประเทศไทย`, 10, 300, '18px TH Sarabun New', '#252525', 'bold');

    // Load background image
    const backgroundImage = new Image();
    backgroundImage.src = 'https://github.com/useronlineid/translation/blob/main/CM.jpg?raw=true';
    backgroundImage.onload = function() {
        // Clear the canvas again
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw background image
        ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
        
        // Draw text with custom styles again
        drawText(ctx, `รหัสประจำบ้าน (House Code No): ${houseCode}`, 10, 30, '20px TH Sarabun New', '#252525', 'normal');
        drawText(ctx, `รายการที่อยู่ (Address list): ${addressList}`, 10, 60, '18px TH Sarabun New', '#252525', 'bold');
        drawText(ctx, `ชื่อบ้าน (Name of House): ${nameOfHouse}`, 10, 90, '16px TH Sarabun New', '#252525', 'italic');
        drawText(ctx, `ชื่อหมู่บ้าน (Name of Village): ${nameOfVillage}`, 10, 120, '16px TH Sarabun New', '#252525', 'normal');
        drawText(ctx, `ประเภทบ้าน (Type of House): ${typeOfHouse}`, 10, 150, '16px TH Sarabun New', '#252525', 'bold');
        drawText(ctx, `ลักษณะบ้าน (Description of House): ${descriptionOfHouse}`, 10, 180, '16px TH Sarabun New', '#252525', 'italic');
        drawText(ctx, `วันเดือนปีที่กำหนดบ้านเลขที่ (House number): ${houseNumberDate}`, 10, 210, '16px TH Sarabun New', '#252525', 'normal');
        drawText(ctx, `ชื่อนายทะเบียน: ${registrarName}`, 10, 240, '16px TH Sarabun New', '#252525', 'bold');
        drawText(ctx, `วันเดือนปีที่พิมพ์ทะเบียนบ้าน: ${registrationDate}`, 10, 270, '16px TH Sarabun New', '#252525', 'italic');

        // Draw the specified text again
        drawText(ctx, `คณะกรรมการกระทรวงการคลังแห่งประเทศไทย`, 10, 300, '18px TH Sarabun New', '#252525', 'bold');

        // Enable the download button after image is created
        downloadButton.disabled = false;
    };
}

function drawText(ctx, text, x, y, font, color, style) {
    ctx.font = `${style} ${font}`;
    ctx.fillStyle = color;
    ctx.fillText(text, x, y);
}

function downloadImage() {
    const canvas = document.getElementById('canvas');
    const link = document.createElement('a');
    link.download = 'house_info.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
}
