export function getDate(){
    let date = new Date();
    // let date_t = String(date);
    // let date_s = date_t.split(" ");
    // let month = date_s[1];
    // let day = date_s[2];
    // let year = date_s[3];
    // let time = date_s[4];
    // let time_s = time.split(":");
    // let hour = time_s[0];
    // let md = (hour < 13) ? 'AM' : 'PM';
    // hour = (hour < 13) ? hour : hour - 12;
    // let minute = time_s[1];
    // let fecha = `${date_t} / ${day} ${month} ${year} at ${hour}:${minute} ${md}`;
    // console.log(date_t);
    // return fecha;

    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute:'2-digit' };
    // console.log(date.toLocaleDateString('en-US', options));
    return date.toLocaleDateString('en-US', options);
}