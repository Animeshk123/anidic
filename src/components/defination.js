import { useState } from "react";
import Image from "next/image";

const Def = ({ def, index }) => {
    const [open, setOpen] = useState(null);
    return (
        <>
            <button type="button" onClick={() => setOpen(prev => {
                if (prev == null) {
                    setOpen("hidden");
                }
                else {
                    setOpen(null);
                }
            })} className="bg-white my-3 text-black font-bold capitalize cursor-pointer shadow py-2 px-4 rounded-full flex align-items-center justify-center gap-2">
                {def.partOfSpeech}
                <Image src={(open) ? "/angle-up.svg": "/angle-down.svg"} className="w-5" width="20" height="20" alt="open"/>
            </button>
            <div className={open}>
                {
                    (def.definitions.length > 0 || def.definitions) ? (def.definitions.map((defi, index) => {
                        return (
                            <li className="py-1" key={index}>{defi.definition}</li>
                        )
                    })) : ""
                }
            </div>
        </>
    )
}
export default Def;