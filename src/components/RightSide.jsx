import './css/right-side.scss';
import {TextComponent} from './TextComponent'
import avatar from '../assets/avatar.png'
import { RatingLevel } from './RatingLevel';


export const RightSide = function ({data}){
  const sections = ['educations', 'current_projects', 'personal_projects']
    return (
        <section cy='right-side'className="right-side">
            <header>
                <figure>
                    <img src={avatar} alt="myPicProf" />
                </figure>
                <h1>{data.name}<br/> 
                <b>{data.surname}</b></h1>
                <h2 cy='role'>{data.role}</h2>
            </header>
             
             <TextComponent 
             
             index='01' 
             title='SKILLS'>
                {
                    data.skills?.map(({name, rate}) => (
                <RatingLevel 
                    key={name}
                    name={name} 
                    rate={rate} />
                    ))
                }
                </TextComponent>

                {
                    sections.map((key, index) => (
                        <TextComponent 
                                        key={key}
                                        index={`0${index + 2}`}
                                        title={data[key]?.title}
                                        details={data[key]?.details}/>
                    
                    ))
                }   
        </section>
    )
}
