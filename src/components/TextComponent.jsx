import './css/text-component.scss'

export const TextComponent = function ({title, details, children, index}){
    return(
        <div className='text-component' index={index}>
            <h3><b>{title}</b></h3>
            {details && <p dangerouslySetInnerHTML={{__html: details}}/>}
            {children}
        </div>
    )
}