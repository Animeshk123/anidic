import { useState } from "react";
import Def from "@/components/defination";
import LoadingBar from 'react-top-loading-bar';


const Home = () => {
  const [value, setValue] = useState(null);
  const [data, setData] = useState(null);
  const [progress, setProgress] = useState(0)
  const CallApi = async (query) => {
    try {
      setProgress(20);
      const data = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${query}`);
      const res = await data.json();
      setProgress(60);
      console.log(res)
      if (res && res[0]) {
        setData(res[0]);
      }
      else {
        setData(res);
      }
      setProgress(100);
    }
    catch (err) {
      alert(err.message);
      setProgress(100);
    }
  }
  return (
    <>
     <LoadingBar
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <div className="w-full h-auto pt-8 mb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <input type="text" placeholder="Enter A Valid Word..." onKeyDown={(e) => {
              (e.key == "Enter") ? ((value) ? CallApi(value) : "" ) : ""
            }} onChange={(e) => { setValue(e.target.value) }} value={value} className="py-2 px-4 rounded-lg border-2 border-blue-500 w-full" />
          </div>
          <button type="button" onClick={() => { (value) ? CallApi(value) : "" }} className="max-w-md md:hidden w-full block mt-5 py-2 rounded-lg mx-auto bg-blue-500 text-white hover:bg-black">
            Search
          </button>
          <div className="mt-6 mx-auto max-w-md">
            <h1 className="text-5xl mb-6 font-bold capitalize">{(data) ? (data.word) ? data.word : data.title : ""}</h1>
            {
              (data) ? (data.meanings) ? (data.meanings.map((def, index) => {
                return (
                  <div key={index} className="">
                    <Def key={index} def={def} index={index}/>
                  </div>
                );
              })) : data.message : ""
            }
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;
