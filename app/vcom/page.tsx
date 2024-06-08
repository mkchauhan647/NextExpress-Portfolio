// import Delay from "@/components/Delay";
async function fetchDatas() {
  
    const delay = duration => new Promise(resolve => setTimeout(resolve, duration));
      await delay(1000);
      return;
      
} 
  

export default async function Vcom() {
    await fetchDatas();
    return (
        <>
        {/* <Delay/> */}
        <p>It's working</p>
        </>
    )
}