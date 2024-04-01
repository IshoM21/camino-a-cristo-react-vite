import { caps } from "../data/caps";
import { CardCap } from "./CardCap";
import { CardMaterial } from "./CardMaterial";
import CardMini from "./CardMini";

export const CardCards = () => {


    return (
        <div className="container mx-auto">
            <div className="p-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {caps.map(capitulo => (
                    // <CardMini key={capitulo.numero} {...capitulo} />
                    <CardMaterial key={capitulo.numero} {...capitulo} />
                ))}
                
            </div>
        </div>
    );
}
