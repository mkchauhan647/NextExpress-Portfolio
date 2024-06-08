export default function Loading(){

    return (
        <div className=" flex flex-col justify-center items-center h-screen md:h-48 -mt-10 -ml-10 gap-2">
              <h1 className="text-xl px-4">Loading...</h1>
              <div className="flex justify-center items-center gap-4">
           <div className="  loading-animation"/>
                <div className="  loading-animation"/>
                <div className="  loading-animation"/>
                </div>
            </div>
    )

}