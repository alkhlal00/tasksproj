export function downloadcv(){
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/file/d/1LgbPvCo3RR4-Y0tYxlGoK_aFl73PwS6l/view?usp=sharing'; 
    link.download = 'Abderrazaq_Moustaoui.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}