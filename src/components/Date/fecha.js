export function getDate(){
    let date = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

export function changeDate(stringDate){
    let date = new Date(stringDate);
    const options = {  year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute:'2-digit' };
    return date.toLocaleDateString('en-US', options);
}