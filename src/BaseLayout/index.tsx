import './style.css'

type BaseLayoutProps = {
    title : String;
}

export function BaseLayout ( props : BaseLayoutProps ) {
    return (
        <>
        <div className="baseLayout">
            <span>{props.title}</span>
        </div>
        </>
    )
}