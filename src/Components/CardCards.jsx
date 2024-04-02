import { caps } from "../data/caps";
import { CardMaterial } from "./CardMaterial";

export const CardCards = () => {


    return (
        <div className="container mx-auto lg:h-full">
            <div className="p-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {caps.map(capitulo => (
                    // <CardMini key={capitulo.numero} {...capitulo} />
                    <CardMaterial key={capitulo.numero} {...capitulo} />
                ))}
                
            </div>
        </div>
    );
}
