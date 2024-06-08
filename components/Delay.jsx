async function fetchDatas() {
  
  const delay = duration => new Promise(resolve => setTimeout(resolve, duration));
    await delay(1000);
    return;
    
} 


export default async function Delay(){
    await fetchDatas();
    return (
        <h1>Good</h1>
    )
}