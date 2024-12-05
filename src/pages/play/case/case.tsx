import vaiseau from '../../../assets/poumon/feu1-images-pixel.png';
import bottle from '../../../assets/poumon/bottle.png';
import toxi from '../../../assets/poumon/toxique.png';
import hook from '../../../assets/poumon/hook.png';

export type CaseProps = {
    state:number
    vaiseau?: boolean
}

export default function Case(
    props:CaseProps
) {

    let content = <></>;

    if (props.state==1){
        content = <img src={hook}/>
    }
    if (props.state==2){
        content = <img src={toxi}/>
    }
    if (props.state==3){
        content = <img src={bottle}/>
    }
    if (props.vaiseau){
        content = <img style={{"rotate": "-90deg"}} src={vaiseau}/>
    }


    return (
        <>
            <div className="card">
                <div style={{"height": "60px", "width": "60px"}}>
                    {content}
                </div>
            </div>
        </>
    )
}