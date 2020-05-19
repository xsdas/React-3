const OnReadLater=(id:any,news:any)=>{
let newsReadLater=news.find((res:any)=>res.source.id==id);
fetch('http://localhost:3001/api/v1/news',{
    method:'POST',
    headers:{'Content-Type':'application/json'},

    body:JSON.stringify(newsReadLater)

}).then(res=>console.log(res.json()));
}
export default OnReadLater;